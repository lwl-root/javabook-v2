const https = require('https');

module.exports = async function handler(req, res) {
  const { code, state } = req.query;

  const cookies = req.headers.cookie || '';
  const savedState = cookies.split(';').find(function(c) { return c.trim().startsWith('oauth_state='); });
  const stateValue = savedState ? savedState.split('=')[1] : null;

  if (state !== stateValue) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>Error</h1><p>State mismatch</p>');
    return;
  }

  var postData = JSON.stringify({
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
    code: code
  });

  try {
    var tokenResponse = await new Promise(function(resolve, reject) {
      var tokenReq = https.request({
        hostname: 'github.com',
        path: '/login/oauth/access_token',
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      }, function(githubRes) {
        var data = '';
        githubRes.on('data', function(chunk) { data += chunk; });
        githubRes.on('end', function() { resolve(JSON.parse(data)); });
      });
      tokenReq.on('error', reject);
      tokenReq.write(postData);
      tokenReq.end();
    });

    if (tokenResponse.error) {
      res.writeHead(403, { 'Content-Type': 'text/html' });
      res.end('<h1>Error</h1><p>' + (tokenResponse.error_description || tokenResponse.error) + '</p>');
      return;
    }

    var token = tokenResponse.access_token;
    var msg = 'authorization:github:success:' + token;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<script>window.parent.postMessage("' + msg + '", "*");</script><p>Done</p>');
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>Error</h1><p>' + err.message + '</p>');
  }
};
