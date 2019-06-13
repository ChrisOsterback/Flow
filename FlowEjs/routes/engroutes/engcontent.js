var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');


    
var Engklipp = require('../../models/engmodels/engklipp');
var Engprice = require('../../models/engmodels/engprice');
var Enghair = require('../../models/engmodels/enghair');
var Engmake = require('../../models/engmodels/engmake');

router.get('/',  function (req, res) {


   
    Engmake.find(function (err, engmakes) {
        Enghair.find(function (err, enghairs) {
            Engklipp.find(function (err, engklipps) {
                Engprice.find(function (err, engprices) {

        res.render('engadmin/engprice', {
            engprices: engprices,
            engklipps: engklipps,
            enghairs: enghairs,
            engmakes: engmakes,
            
        });
    });
    });
    });
});
});


/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET  PKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT PAKET */
/*
 * GET add price
 */

            router.get('/add-engprice',  function (req, res) {

                var first = "";
                var slug = "";
                var second = "";
            
                

                
                    res.render('engadmin/add_engprice', {
                        first: first,
                        slug: slug,
                        second: second,
                        
                    
                        
                    });
                });


/*
 * POST add price
 */
router.post('/add-engprice', function (req, res) {
    
    
   
    
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('engadmin/add_engprice', {
                errors: errors,
                first: first,
                slug: slug,
                second: second,
                
                   
                
            });
     
    } else {
        Engprice.findOne({slug: slug}, function (err, engprice) {
            if (engprice) {
                req.flash('danger', 'that exists, choose another.');
              
                    res.render('engadmin/add_engprice', {
                        first: first,         
                        slug: slug,
                        second: second,
                        
                        
                     

                        
                        
                   
                    });
              
            } else {

                var engprice = new Engprice({
                    first: first,
                    slug: slug,
                    second: second,
                    
           
                   
                });

                engprice.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/engcontent/' + engprice._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    
                  


                    req.flash('success', 'content added!');
                    res.redirect('/engadmin/engprice');
                });
            }
        });
    }

});


/*
 * GET edit price
 */
router.get('/edit-engprice/:id',  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   
        Engprice.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/engadmin/engprice');
            } else {
                
                        res.render('engadmin/edit_engprice', {
                            first: p.first,
                            errors: errors,
                            second: p.second,
                            
                            id: p._id
                        });
                    }
        }
          
        )}
)
       

 
/*
 * POST edit price
 */
router.post('/edit-engprice/:id', function (req, res) {

    
   

   
    

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('engadmin/engprice/edit-engprice/' + id);
    } else {
        Engprice.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'this name exists, choose another.');
                res.redirect('engadmin/engprice/edit-engprice/' + id);
            } else {
                Engprice.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                        p.first = first;
                        p.slug = slug;
                        p.second = second;
                      
                   
                   
                 
                    p.save(function (err) {
                        if (err)
                            console.log(err);


                            fs.remove('public/engcontent/' + id, function (err) {
                                if (err)
                                console.log(err);
                            })


                           

                       
                        req.flash('success', 'price edited!');
                        res.redirect('/engadmin/engprice/edit-engprice/' + id);
                                }
                        
                         
                        
                    )

                });
                
            }
        });
    }

});





 
    
    /*
     * GET delete price
     */
    router.get('/delete-engprice/:id', function (req, res) {
    
        var id = req.params.id;
        var path = 'public/engcontent/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                Engprice.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'price deleted!');
                res.redirect('/engadmin/engprice');
            }
        });
    
    });
    
    

    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP KLIPP KLIPP */
    
    
    
    
    /*
     * GET add Klipp
     */
    
    router.get('/add-engklipp',  function (req, res) {
    
        var first = "";
        var slug = "";
        var second = "";
        var third = "";
        
        
    
        
            res.render('engadmin/add_engklipp', {
                first: first,
                slug: slug,
                second: second,
                third: third,
                
               
                
            });
        });
    
    
    /*
     * POST add price
     */
    router.post('/add-engklipp', function (req, res) {
        
        
       
        
       
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
    
      
        
    
        var errors = req.validationErrors();
    
        if (errors) {
            
                res.render('engadmin/add_engklipp', {
                    errors: errors,
                    first: first,
                    slug: slug,
                    second: second,
                    third: third,
                    
                       
                    
                });
         
        } else {
            Engklipp.findOne({slug: slug}, function (err, engklipp) {
                if (engklipp) {
                    req.flash('danger', 'that exists, choose another.');
                  
                        res.render('engadmin/add_engklipp', {
                            first: first,         
                            slug: slug,
                            second: second,
                            third: third,
                            
                            
                         
    
                            
                            
                       
                        });
                  
                } else {
    
                    var engklipp = new Engklipp({
                        first: first,
                        slug: slug,
                        second: second,
                        third: third,
                        
               
                       
                    });
    
                    engklipp.save(function (err) {
                        if (err)
                            return console.log(err);
    
                        mkdirp('public/engcontent/' + engklipp._id, function (err) {
                            return console.log(err);
                        });
    
                       
                    
                        
                      
    
    
                        req.flash('success', 'content added!');
                        res.redirect('/engadmin/engprice');
                    });
                }
            });
        }
    
    });
    
    
    /*
     * GET edit price
     */
    router.get('/edit-engklipp/:id',  function (req, res) {
    
        var errors;
    
        if (req.session.errors)
            errors = req.session.errors;
        req.session.errors = null;
    
       
    
            Engklipp.findById(req.params.id, function (err, p) {
                if (err) {
                    console.log(err);
                    res.redirect('/engadmin/engprice');
                } else {
                    
                            res.render('engadmin/edit_engklipp', {
                                first: p.first,
                                errors: errors,
                                second: p.second,
                                third: p.third,
                                
                                id: p._id
                            });
                        }
            }
              
            )}
    )
           
    
     
    /*
     * POST edit price
     */
    router.post('/edit-engklipp/:id', function (req, res) {
    
        
       
    
       
        
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
        
        var id = req.params.id;
    
        var errors = req.validationErrors();
    
        if (errors) {
            req.session.errors = errors;
            res.redirect('/engadmin/engprice/edit-engklipp/' + id);
        } else {
            Engklipp.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
                if (err)
                    console.log(err);
    
                if (p) {
                    req.flash('danger', 'this name exists, choose another.');
                    res.redirect('/engadmin/engprice/edit-engklipp/' + id);
                } else {
                    Engklipp.findById(id, function (err, p) {
                        if (err)
                            console.log(err);
    
                            p.first = first;
                            p.slug = slug;
                            p.second = second;
                            p.third = third;
                            
                           
                       
                       
                     
                        p.save(function (err) {
                            if (err)
                                console.log(err);
    
    
                                fs.remove('public/engcontent/' + id, function (err) {
                                    if (err)
                                    console.log(err);
                                })
    
    
                               
    
                           
                            req.flash('success', 'price edited!');
                            res.redirect('/engadmin/engprice/edit-engklipp/' + id);
                                    }
                            
                             
                            
                        )
    
                    });
                    
                }
            });
        }
    
    });
    
    
    
    
    
     
        
        /*
         * GET delete price
         */
        router.get('/delete-engklipp/:id', function (req, res) {
        
            var id = req.params.id;
            var path = 'public/engcontent/' + id;
        
            fs.remove(path, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    Engklipp.findByIdAndRemove(id, function (err) {
                        console.log(err);
                    });
                    
                    req.flash('success', 'price deleted!');
                    res.redirect('/engadmin/engprice');
                }
            });
        
        });
        
    
    
    
    
    
    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP FUCKING HAIR STYLE */
    router.get('/add-enghair',  function (req, res) {
    
        var first = "";
        var slug = "";
        var second = "";
      
        
        
    
        
            res.render('engadmin/add_enghair', {
                first: first,
                slug: slug,
                second: second
              
                
               
                
            });
        });
    
    
    /*
     * POST add price
     */
    router.post('/add-enghair', function (req, res) {
        
        
       
        
       
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        
        
    
      
        
    
        var errors = req.validationErrors();
    
        if (errors) {
            
                res.render('engadmin/add_enghair', {
                    errors: errors,
                    first: first,
                    slug: slug,
                    second: second,
                    
                    
                       
                    
                });
         
        } else {
           Enghair.findOne({slug: slug}, function (err, enghair) {
                if (enghair) {
                    req.flash('danger', 'that exists, choose another.');
                  
                        res.render('engadmin/add_enghair', {
                            first: first,         
                            slug: slug,
                            second: second,
                            
                            
                            
                         
    
                            
                            
                       
                        });
                  
                } else {
    
                    var enghair = new Enghair({
                        first: first,
                        slug: slug,
                        second: second
                      
                        
               
                       
                    });
    
                   enghair.save(function (err) {
                        if (err)
                            return console.log(err);
    
                        mkdirp('public/engcontent/' + enghair._id, function (err) {
                            return console.log(err);
                        });
    
                       
                    
                        
                      
    
    
                        req.flash('success', 'content added!');
                        res.redirect('/engadmin/engprice');
                    });
                }
            });
        }
    
    });
    
    
    /*
     * GET edit price
     */
    router.get('/edit-enghair/:id',  function (req, res) {
    
        var errors;
    
        if (req.session.errors)
            errors = req.session.errors;
        req.session.errors = null;
    
       
    
            Enghair.findById(req.params.id, function (err, p) {
                if (err) {
                    console.log(err);
                    res.redirect('/engadmin/engprice');
                } else {
                    
                            res.render('engadmin/edit_enghair', {
                                first: p.first,
                                errors: errors,
                                second: p.second,
                               
                                
                                id: p._id
                            });
                        }
            }
              
            )}
    )
           
    
     
    /*
     * POST edit price
     */
    router.post('/edit-enghair/:id', function (req, res) {
    
        
       
    
       
        
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
        
        var id = req.params.id;
    
        var errors = req.validationErrors();
    
        if (errors) {
            req.session.errors = errors;
            res.redirect('/engadmin/engprice/edit-enghair/' + id);
        } else {
            Enghair.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
                if (err)
                    console.log(err);
    
                if (p) {
                    req.flash('danger', 'this name exists, choose another.');
                    res.redirect('/engadmin/engprice/edit-enghair/' + id);
                } else {
                    Swehair.findById(id, function (err, p) {
                        if (err)
                            console.log(err);
    
                            p.first = first;
                            p.slug = slug;
                            p.second = second;
                            p.third = third;
                            
                           
                       
                       
                     
                        p.save(function (err) {
                            if (err)
                                console.log(err);
    
    
                                fs.remove('public/engcontent/' + id, function (err) {
                                    if (err)
                                    console.log(err);
                                })
    
    
                               
    
                           
                            req.flash('success', 'price edited!');
                            res.redirect('/engadmin/engprice/edit-enghair/' + id);
                                    }
                            
                             
                            
                        )
    
                    });
                    
                }
            });
        }
    
    });
    
    
    
    
    
     
        
        /*
         * GET delete price
         */
        router.get('/delete-enghair/:id', function (req, res) {
        
            var id = req.params.id;
            var path = 'public/engcontent/' + id;
        
            fs.remove(path, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    Enghair.findByIdAndRemove(id, function (err) {
                        console.log(err);
                    });
                    
                    req.flash('success', 'price deleted!');
                    res.redirect('/engadmin/engprice');
                }
            });
        
        });
        
    
    
    
    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
  /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP FUCKING MAKEUP *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
  
  router.get('/add-engmake',  function (req, res) {
    
    var first = "";
    var slug = "";
    var second = "";
  
    
    

    
        res.render('engadmin/add_engmake', {
            first: first,
            slug: slug,
            second: second
          
            
           
            
        });
    });


/*
 * POST add price
 */
router.post('/add-engmake', function (req, res) {
    
    
   
    
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    
    

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('sweadmin/add_engmake', {
                errors: errors,
                first: first,
                slug: slug,
                second: second,
                
                
                   
                
            });
     
    } else {
        Engmake.findOne({slug: slug}, function (err, engmake) {
            if (engmake) {
                req.flash('danger', 'that exists, choose another.');
              
                    res.render('engadmin/add_engmake', {
                        first: first,         
                        slug: slug,
                        second: second,
                        
                        
                        
                     

                        
                        
                   
                    });
              
            } else {

                var engmake = new Engmake({
                    first: first,
                    slug: slug,
                    second: second
                  
                    
           
                   
                });

                engmake.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/engcontent/' + engmake._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    
                  


                    req.flash('success', 'content added!');
                    res.redirect('/engadmin/engprice');
                });
            }
        });
    }

});


/*
 * GET edit price
 */
router.get('/edit-engmake/:id',  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   

        Engmake.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/engadmin/engprice');
            } else {
                
                        res.render('engadmin/edit_engmake', {
                            first: p.first,
                            errors: errors,
                            second: p.second,
                           
                            
                            id: p._id
                        });
                    }
        }
          
        )}
)
       

 
/*
 * POST edit price
 */
router.post('/edit-engmake/:id', function (req, res) {

    
   

   
    

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
   
    
    
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/engadmin/engprice/edit-engmake/' + id);
    } else {
        Engmake.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'this name exists, choose another.');
                res.redirect('/engadmin/engprice/edit-engmake/' + id);
            } else {
                Engmake.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                        p.first = first;
                        p.slug = slug;
                        p.second = second;
                        
                        
                       
                   
                   
                 
                    p.save(function (err) {
                        if (err)
                            console.log(err);


                            fs.remove('public/engcontent/' + id, function (err) {
                                if (err)
                                console.log(err);
                            })


                           

                       
                        req.flash('success', 'price edited!');
                        res.redirect('/engadmin/engprice/edit-engmake/' + id);
                                }
                        
                         
                        
                    )

                });
                
            }
        });
    }

});





 
    
    /*
     * GET delete price
     */
    router.get('/delete-engmake/:id', function (req, res) {
    
        var id = req.params.id;
        var path = 'public/engcontent/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
               Engmake.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'price deleted!');
                res.redirect('/engadmin/engprice');
            }
        });
    
    });
    



/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP-make ENDS */
    
   



module.exports = router;