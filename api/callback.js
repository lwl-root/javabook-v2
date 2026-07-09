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
  res.status(200).send(`
    <html>
    <body>
      <script>
        const token = "${data.access_token}";
        if (token && token !== "undefined") {
          window.opener.postMessage("authorization:github:success:" + JSON.stringify({ token: token, provider: 'github' }), "*");
          window.close();
        } else {
          document.body.innerHTML = "登录失败，未拿到有效的 Token，请检查 Vercel 环境变量。";
        }
      </script>
    </body>
    </html>
  `);
}