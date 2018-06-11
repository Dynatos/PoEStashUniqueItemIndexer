const request = require('request');
const qs = require('querystring');

module.exports = function loginUser(hash, cb) {
  
  const headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Origin': 'https://www.pathofexile.com',
    'Upgrade-Insecure-Requests': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Referer': 'https://www.pathofexile.com/login',
    'Accept-Language': 'en-US,en;q=0.9',
  };
  
  const dataString = qs.stringify({
    login_email: email,
    login_password: password,
    remember_me: 0,
    hash: hash,
    login: 'Login'
  });
  
  const options = {
    url: 'https://www.pathofexile.com/login',
    method: 'POST',
    headers: headers,
    body: dataString
  };
  
  function callback(error, response) {
    if (error || response.statusCode !== 200) {
      return cb(error || new Error('Invalid Status Code'));
    }
    
    
  }
  
  request(options, callback);
};
