var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');
var auth = require('../../config/auth');
var isAdmin = auth.isAdmin;

    
var Sweklipp = require('../../models/swemodels/sweklipp');
var Sweprice = require('../../models/swemodels/sweprice');
var Swehair = require('../../models/swemodels/swehair');
var Swemake = require('../../models/swemodels/swemake');

router.get('/', isAdmin, function (req, res) {


   
    Swemake.find(function (err, swemakes) {
        Swehair.find(function (err, swehairs) {
            Sweklipp.find(function (err, sweklipps) {
                Sweprice.find(function (err, sweprices) {

        res.render('sweadmin/sweprice', {
            sweprices: sweprices,
            sweklipps: sweklipps,
            swehairs: swehairs,
            swemakes: swemakes,
            
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

            router.get('/add-sweprice', isAdmin, function (req, res) {

                var first = "";
                var slug = "";
                var second = "";
            
                

                
                    res.render('sweadmin/add_sweprice', {
                        first: first,
                        slug: slug,
                        second: second,
                        
                    
                        
                    });
                });


/*
 * POST add price
 */
router.post('/add-sweprice', function (req, res) {
    
    
   
    
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('sweadmin/add_sweprice', {
                errors: errors,
                first: first,
                slug: slug,
                second: second,
                
                   
                
            });
     
    } else {
        Sweprice.findOne({slug: slug}, function (err, sweprice) {
            if (sweprice) {
                req.flash('danger', 'that exists, choose another.');
              
                    res.render('sweadmin/add_sweprice', {
                        first: first,         
                        slug: slug,
                        second: second,
                        
                        
                     

                        
                        
                   
                    });
              
            } else {

                var sweprice = new Sweprice({
                    first: first,
                    slug: slug,
                    second: second,
                    
           
                   
                });

                sweprice.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/swecontent/' + sweprice._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    
                  


                    req.flash('success', 'content added!');
                    res.redirect('/sweadmin/sweprice');
                });
            }
        });
    }

});


/*
 * GET edit price
 */
router.get('/edit-sweprice/:id', isAdmin, function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   
        Sweprice.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/sweadmin/sweprice');
            } else {
                
                        res.render('sweadmin/edit_sweprice', {
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
router.post('/edit-sweprice/:id', function (req, res) {

    
   

   
    

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('sweadmin/sweprice/edit-sweprice/' + id);
    } else {
        Sweprice.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'this name exists, choose another.');
                res.redirect('sweadmin/sweprice/edit-sweprice/' + id);
            } else {
                Sweprice.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                        p.first = first;
                        p.slug = slug;
                        p.second = second;
                      
                   
                   
                 
                    p.save(function (err) {
                        if (err)
                            console.log(err);


                            fs.remove('public/swecontent/' + id, function (err) {
                                if (err)
                                console.log(err);
                            })


                           

                       
                        req.flash('success', 'price edited!');
                        res.redirect('/sweadmin/sweprice/edit-sweprice/' + id);
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
    router.get('/delete-sweprice/:id', isAdmin,function (req, res) {
    
        var id = req.params.id;
        var path = 'public/swecontent/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                Sweprice.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'price deleted!');
                res.redirect('/sweadmin/sweprice');
            }
        });
    
    });
    
    

    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP KLIPP KLIPP */
    
    
    
    
    /*
     * GET add Klipp
     */
    
    router.get('/add-sweklipp', isAdmin, function (req, res) {
    
        var first = "";
        var slug = "";
        var second = "";
        var third = "";
        
        
    
        
            res.render('sweadmin/add_sweklipp', {
                first: first,
                slug: slug,
                second: second,
                third: third,
                
               
                
            });
        });
    
    
    /*
     * POST add price
     */
    router.post('/add-sweklipp', function (req, res) {
        
        
       
        
       
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
    
      
        
    
        var errors = req.validationErrors();
    
        if (errors) {
            
                res.render('sweadmin/add_klipp', {
                    errors: errors,
                    first: first,
                    slug: slug,
                    second: second,
                    third: third,
                    
                       
                    
                });
         
        } else {
            Sweklipp.findOne({slug: slug}, function (err, sweklipp) {
                if (sweklipp) {
                    req.flash('danger', 'that exists, choose another.');
                  
                        res.render('sweadmin/add_klipp', {
                            first: first,         
                            slug: slug,
                            second: second,
                            third: third,
                            
                            
                         
    
                            
                            
                       
                        });
                  
                } else {
    
                    var sweklipp = new Sweklipp({
                        first: first,
                        slug: slug,
                        second: second,
                        third: third,
                        
               
                       
                    });
    
                    sweklipp.save(function (err) {
                        if (err)
                            return console.log(err);
    
                        mkdirp('public/swecontent/' + sweklipp._id, function (err) {
                            return console.log(err);
                        });
    
                       
                    
                        
                      
    
    
                        req.flash('success', 'content added!');
                        res.redirect('/sweadmin/sweprice');
                    });
                }
            });
        }
    
    });
    
    
    /*
     * GET edit price
     */
    router.get('/edit-sweklipp/:id',isAdmin,  function (req, res) {
    
        var errors;
    
        if (req.session.errors)
            errors = req.session.errors;
        req.session.errors = null;
    
       
    
            Sweklipp.findById(req.params.id, function (err, p) {
                if (err) {
                    console.log(err);
                    res.redirect('/sweadmin/sweprice');
                } else {
                    
                            res.render('sweadmin/edit_sweklipp', {
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
    router.post('/edit-sweklipp/:id', function (req, res) {
    
        
       
    
       
        
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
        
        var id = req.params.id;
    
        var errors = req.validationErrors();
    
        if (errors) {
            req.session.errors = errors;
            res.redirect('/sweadmin/sweprice/edit-sweklipp/' + id);
        } else {
            Sweklipp.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
                if (err)
                    console.log(err);
    
                if (p) {
                    req.flash('danger', 'this name exists, choose another.');
                    res.redirect('/sweadmin/sweprice/edit-sweklipp/' + id);
                } else {
                    Sweklipp.findById(id, function (err, p) {
                        if (err)
                            console.log(err);
    
                            p.first = first;
                            p.slug = slug;
                            p.second = second;
                            p.third = third;
                            
                           
                       
                       
                     
                        p.save(function (err) {
                            if (err)
                                console.log(err);
    
    
                                fs.remove('public/swecontent/' + id, function (err) {
                                    if (err)
                                    console.log(err);
                                })
    
    
                               
    
                           
                            req.flash('success', 'price edited!');
                            res.redirect('/sweadmin/sweprice/edit-sweklipp/' + id);
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
        router.get('/delete-sweklipp/:id',isAdmin, function (req, res) {
        
            var id = req.params.id;
            var path = 'public/swecontent/' + id;
        
            fs.remove(path, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    Sweklipp.findByIdAndRemove(id, function (err) {
                        console.log(err);
                    });
                    
                    req.flash('success', 'price deleted!');
                    res.redirect('/sweadmin/sweprice');
                }
            });
        
        });
        
    
    
    
    
    
    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP FUCKING HAIR STYLE */
    router.get('/add-swehair', isAdmin, function (req, res) {
    
        var first = "";
        var slug = "";
        var second = "";
      
        
        
    
        
            res.render('sweadmin/add_swehair', {
                first: first,
                slug: slug,
                second: second
              
                
               
                
            });
        });
    
    
    /*
     * POST add price
     */
    router.post('/add-swehair', function (req, res) {
        
        
       
        
       
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        
        
    
      
        
    
        var errors = req.validationErrors();
    
        if (errors) {
            
                res.render('sweadmin/add_swehair', {
                    errors: errors,
                    first: first,
                    slug: slug,
                    second: second,
                    
                    
                       
                    
                });
         
        } else {
            Swehair.findOne({slug: slug}, function (err, swehair) {
                if (swehair) {
                    req.flash('danger', 'that exists, choose another.');
                  
                        res.render('sweadmin/add_swehair', {
                            first: first,         
                            slug: slug,
                            second: second,
                            
                            
                            
                         
    
                            
                            
                       
                        });
                  
                } else {
    
                    var swehair = new Swehair({
                        first: first,
                        slug: slug,
                        second: second
                      
                        
               
                       
                    });
    
                    swehair.save(function (err) {
                        if (err)
                            return console.log(err);
    
                        mkdirp('public/swecontent/' + swehair._id, function (err) {
                            return console.log(err);
                        });
    
                       
                    
                        
                      
    
    
                        req.flash('success', 'content added!');
                        res.redirect('/sweadmin/sweprice');
                    });
                }
            });
        }
    
    });
    
    
    /*
     * GET edit price
     */
    router.get('/edit-swehair/:id',isAdmin, function (req, res) {
    
        var errors;
    
        if (req.session.errors)
            errors = req.session.errors;
        req.session.errors = null;
    
       
    
            Swehair.findById(req.params.id, function (err, p) {
                if (err) {
                    console.log(err);
                    res.redirect('/sweadmin/sweprice');
                } else {
                    
                            res.render('sweadmin/edit_swehair', {
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
    router.post('/edit-swehair/:id', function (req, res) {
    
        
       
    
       
        
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
        
        var id = req.params.id;
    
        var errors = req.validationErrors();
    
        if (errors) {
            req.session.errors = errors;
            res.redirect('/sweadmin/sweprice/edit-swehair/' + id);
        } else {
            Swehair.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
                if (err)
                    console.log(err);
    
                if (p) {
                    req.flash('danger', 'this name exists, choose another.');
                    res.redirect('/sweadmin/sweprice/edit-swehair/' + id);
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
    
    
                                fs.remove('public/swecontent/' + id, function (err) {
                                    if (err)
                                    console.log(err);
                                })
    
    
                               
    
                           
                            req.flash('success', 'price edited!');
                            res.redirect('/sweadmin/sweprice/edit-swehair/' + id);
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
        router.get('/delete-swehair/:id',isAdmin, function (req, res) {
        
            var id = req.params.id;
            var path = 'public/swecontent/' + id;
        
            fs.remove(path, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    Swehair.findByIdAndRemove(id, function (err) {
                        console.log(err);
                    });
                    
                    req.flash('success', 'price deleted!');
                    res.redirect('/sweadmin/sweprice');
                }
            });
        
        });
        
    
    
    
    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
  /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP FUCKING MAKEUP *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
  
  router.get('/add-swemake', isAdmin, function (req, res) {
    
    var first = "";
    var slug = "";
    var second = "";
  
    
    

    
        res.render('sweadmin/add_swemake', {
            first: first,
            slug: slug,
            second: second
          
            
           
            
        });
    });


/*
 * POST add price
 */
router.post('/add-swemake', function (req, res) {
    
    
   
    
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    
    

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('sweadmin/add_swemake', {
                errors: errors,
                first: first,
                slug: slug,
                second: second,
                
                
                   
                
            });
     
    } else {
        Swemake.findOne({slug: slug}, function (err, swemake) {
            if (swemake) {
                req.flash('danger', 'that exists, choose another.');
              
                    res.render('sweadmin/add_swemake', {
                        first: first,         
                        slug: slug,
                        second: second,
                        
                        
                        
                     

                        
                        
                   
                    });
              
            } else {

                var swemake = new Swemake({
                    first: first,
                    slug: slug,
                    second: second
                  
                    
           
                   
                });

                swemake.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/swecontent/' + swemake._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    
                  


                    req.flash('success', 'content added!');
                    res.redirect('/sweadmin/sweprice');
                });
            }
        });
    }

});


/*
 * GET edit price
 */
router.get('/edit-swemake/:id', isAdmin,  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   

        Swemake.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/sweadmin/sweprice');
            } else {
                
                        res.render('sweadmin/edit_swemake', {
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
router.post('/edit-swemake/:id', function (req, res) {

    
   

   
    

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
   
    
    
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/sweadmin/sweprice/edit-swemake/' + id);
    } else {
        Swemake.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'this name exists, choose another.');
                res.redirect('/sweadmin/sweprice/edit-swemake/' + id);
            } else {
                Swemake.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                        p.first = first;
                        p.slug = slug;
                        p.second = second;
                        
                        
                       
                   
                   
                 
                    p.save(function (err) {
                        if (err)
                            console.log(err);


                            fs.remove('public/swecontent/' + id, function (err) {
                                if (err)
                                console.log(err);
                            })


                           

                       
                        req.flash('success', 'price edited!');
                        res.redirect('/sweadmin/sweprice/edit-swemake/' + id);
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
    router.get('/delete-swemake/:id', isAdmin,function (req, res) {
    
        var id = req.params.id;
        var path = 'public/swecontent/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                Swemake.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'price deleted!');
                res.redirect('/sweadmin/sweprice');
            }
        });
    
    });
    



/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP-make ENDS */
    
   



module.exports = router;