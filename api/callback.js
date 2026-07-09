export default async function handler(req, res) {
  const { code } = req.query;

  // 1. 拿着 code 去 GitHub 换令牌
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    })
  });

  const data = await response.json();
  let content = '';

  if (data.access_token) {
    // 官方标准：登录成功后返回的格式
    content = JSON.stringify({ token: data.access_token, provider: 'github' });
  } else {
    content = JSON.stringify({ error: data.error_description || 'Bad code' });
  }

  // 2. 注入官方专属的回传脚本（包含全套事件监听和握手机制）
  res.status(200).send(`
    <html>
    <head><title>正在授权...</title></head>
    <body>
      <div style="text-align:center;margin-top:50px;font-family:sans-serif;">
        <h2>授权完成，正在进入管理后台...</h2>
      </div>
      <script>
        (function() {
          function receiveMessage(e) {
            // 收到主页面的握手请求后，把钥匙准确地发回给对应的 origin
            window.opener.postMessage(
              'authorization:github:success:${content}',
              e.origin
            );
            window.removeEventListener("message", receiveMessage, false);
            setTimeout(() => { window.close(); }, 300);
          }
          
          window.addEventListener("message", receiveMessage, false);
          // 1. 主动对母页面大喊一声：我已经准备好传钥匙了！
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
    </body>
    </html>
  `);
}