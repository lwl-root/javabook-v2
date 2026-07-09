export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  // 自动跳转到 GitHub 的官方登录授权页
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`);
}