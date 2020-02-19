var express = require('express');
var router = express.Router();
var urlService = require('../services/url');

/* GET home page. */
router.get('/', function(req, res) {
  urlService.getUrls(callback => {
    res.render('pages/home', {
      title: 'Home',
      data: callback,
    });
  });

});

module.exports = router;
