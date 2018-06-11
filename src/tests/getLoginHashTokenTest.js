const test = require('tape');

const getLoginHashToken = require('../requests/getLoginHashToken');

test('Get login hash token', (t) => {
  getLoginHashToken((error, hash) => {
    t.ok(hash, 'Has hash');
    t.notOk(error, 'Does not have error');
    t.end();
  })
});