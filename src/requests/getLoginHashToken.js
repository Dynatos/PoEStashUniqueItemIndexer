const request = require('request');
const cheerio = require('cheerio');

function extractHash(responseBody) {
  const parsedBody = cheerio.load(responseBody);
  
  return parsedBody('input[name="hash"]').attr('value');
}

module.exports = function getLoginHashTokenExport(cb) {
  
  const headers = {
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Referer': 'https://www.pathofexile.com/game',
    'Accept-Language': 'en-US,en;q=0.9'
  };
  
  const options = {
    url: 'https://www.pathofexile.com/login',
    headers: headers
  };
  
  function callback(error, response) {
    
    if (error || response.statusCode !== 200) {
      return cb(error || new Error('Invalid Status Code'));
    }
  
    const hash = extractHash(response.body);
    
    cb(null, hash)
  }
  
  request(options, callback);
};