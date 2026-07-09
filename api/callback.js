export default async function handler(req, res) {
  const { code } = req.query;
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
  // 将 Token 传递回前端完成登录
  res.status(200).send(`
    <script>
      window.opener.postMessage("authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}", "*");
      window.close();
    </script>
  `);
}