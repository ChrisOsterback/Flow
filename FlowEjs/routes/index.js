                    var express = require('express');
                    var router = express.Router();


                    var Staff = require('../models/staff');
                    var Price = require('../models/price');
                    var Klipp = require('../models/klipp');
                    var Hair = require('../models/hair');
                    var Make = require('../models/make');
                    


                    router.get('/', function (req, res) {
                        Make.find(function (err, makes) {
                        Hair.find(function (err, hairs) {
                        Klipp.find(function (err, klipps) {
                        Staff.find(function (err, staffs) {
                            Price.find(function (err, prices) {
                            if (err)
                            conesole.log(err);

                            res.render('index', {
                            staffs: staffs,
                            prices: prices,
                            klipps: klipps,
                            hairs: hairs,
                            makes: makes  
                            
                            });
                            });
                        });
                        
                    });
                        
                        });
                        });

                    });




                    // Exports
                    module.exports = router;