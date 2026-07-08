const crypto = require('crypto');

module.exports = function handler(req, res) {
  const { client_id, redirect_uri } = req.query;

  const state = crypto.randomBytes(16).toString('hex');

  res.setHeader('Set-Cookie', 'oauth_state=' + state + '; Path=/; HttpOnly; SameSite=Lax');

  const githubAuthUrl = 'https://github.com/login/oauth/authorize?client_id=' + client_id + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&scope=repo,user&state=' + state;

  res.writeHead(302, { Location: githubAuthUrl });
  res.end();
};
