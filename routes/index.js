var express = require('express');
var router = express.Router();
var mssql = require('./sql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  mssql.queryTag().then((result) => {
    res.render('map', { title: 'Map',tag: result});
  }).catch((err) => {
    
  });
});


module.exports = router;
