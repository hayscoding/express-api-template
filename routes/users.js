var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/single', function(req, res, next) {
  res.render('single', {title: 'SINGLE ROUTE', bodyText: 'Here is our body text wink wink'});
});

router.post('/single', function(req, res, next) {
  res.send('test text testing again');
});

module.exports = router;
