export default function handler(req, res) {
  // 1. 获取你在 Vercel 填写的客户端 ID
  const clientId = process.env.GITHUB_CLIENT_ID;
  
  // 2. 拼接你项目的真实回调地址 (注意这里必须要和你在 GitHub 填的一致)
  const redirectUri = `https://${req.headers.host}/api/callback`;

  // 3. 重定向到 GitHub
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo,user`);
}