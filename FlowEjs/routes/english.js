var express = require('express');
var router = express.Router();


var Staff = require('../models/staff');
var Engprice = require('../models/engmodels/engprice');
var Engklipp = require('../models/engmodels/engklipp');
var Enghair = require('../models/engmodels/enghair');
var Engmake = require('../models/engmodels/engmake');


router.get('/', function (req, res) {
    Engmake.find(function (err, engmakes) {
    Enghair.find(function (err, enghairs) {
    Engklipp.find(function (err, engklipps) {
    Staff.find(function (err, staffs) {
        Engprice.find(function (err, engprices) {
        if (err)
        conesole.log(err);

        res.render('english', {
         staffs: staffs,
         engprices: engprices,
         engklipps: engklipps,
         enghairs: enghairs,
         engmakes: engmakes  
         
        });
        });
    });
    
});
    
    });
    });

});




// Exports
module.exports = router;