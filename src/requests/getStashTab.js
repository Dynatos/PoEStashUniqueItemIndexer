var request = require('request');

var headers = {
  'Pragma': 'no-cache',
  'DNT': '1',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Cache-Control': 'no-cache',
  'X-Requested-With': 'XMLHttpRequest',
  'Connection': 'keep-alive',
  'Referer': 'https://www.pathofexile.com/',
  'Cookie': 'POESESSID=9db88ffdeccc7e6a2fdf354e499b92f5; session_start=1501133125; __utma=183580967.1841396280.1526074553.1526074553.1526074553.1; __utmc=183580967; __utmz=183580967.1526074553.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)'
};

var options = {
  url: 'https://www.pathofexile.com/character-window/get-stash-items?accountName=Dynatos&tabIndex=3&league=SSF%20Incursion&tabs=0',
  headers: headers
};

function callback(error, response, body) {
  if (error || response.statusCode !== 200) {
    return cb(error || new Error('Invalid Status Code'));
  }
}

request(options, callback);
