var express = require('express');
var router = express.Router();


var Staff = require('../models/staff');
var Sweprice = require('../models/swemodels/sweprice');
var Sweklipp = require('../models/swemodels/sweklipp');
var Swehair = require('../models/swemodels/swehair');
var Swemake = require('../models/swemodels/swemake');


router.get('/', function (req, res) {
    Swemake.find(function (err, swemakes) {
    Swehair.find(function (err, swehairs) {
    Sweklipp.find(function (err, sweklipps) {
    Staff.find(function (err, staffs) {
       Sweprice.find(function (err, sweprices) {
        if (err)
        conesole.log(err);

        res.render('swedish', {
         staffs: staffs,
         sweprices: sweprices,
         sweklipps: sweklipps,
         swehairs: swehairs,
         swemakes: swemakes  
         
        });
        });
    });
    
});
    
    });
    });

});




// Exports
module.exports = router;