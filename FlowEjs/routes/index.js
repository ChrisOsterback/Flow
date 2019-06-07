var express = require('express');
var router = express.Router();


var Staff = require('../models/staff');
var Price = require('../models/price');




router.get('/', function (req, res) {
  
    Staff.find(function (err, staffs) {
        Price.find(function (err, prices) {
        if (err)
        conesole.log(err);

        res.render('index', {
         staffs: staffs,
         prices: prices,
         
        });
    
    });
    });

});




// Exports
module.exports = router;