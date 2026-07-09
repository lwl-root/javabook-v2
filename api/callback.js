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

  // 2. 把令牌传回给你的 admin 页面，使用 "*" 彻底解决跨域不响应的问题
  // 2. 增强型多重通信回传（彻底解决主页面卡住问题）
  res.status(200).send(`
    <html>
    <head><title>正在授权...</title></head>
    <body>
      <div style="text-align:center;margin-top:50px;font-family:sans-serif;">
        <h2>授权成功，正在为您打开管理后台...</h2>
      </div>
      <script>
        const token = "${data.access_token}";
        const message = "authorization:github:success:" + JSON.stringify({ token: token, provider: 'github' });

        if (token && token !== "undefined") {
          // 尝试多次发送，确保主页面一定能接收到
          window.opener.postMessage(message, "*");
          
          setTimeout(() => {
            window.opener.postMessage(message, "*");
          }, 200);

          setTimeout(() => {
            window.close();
          }, 500);
        } else {
          document.body.innerHTML = "<h2>登录失败：未拿到有效的 Token，请检查 Vercel 环境变量设置。</h2>";
        }
      </script>
    </body>
    </html>
  `);
}