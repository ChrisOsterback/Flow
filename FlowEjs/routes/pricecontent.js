var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');


    
var Klipp = require('../models/klipp.js');
var Price = require('../models/price');
var Hair = require('../models/hair');
var Make = require('../models/make');

router.get('/',  function (req, res) {


   
    Make.find(function (err, makes) {
    Hair.find(function (err, hairs) {
    Klipp.find(function (err, klipps) {
    Price.find(function (err, prices) {

        res.render('admin/price', {
            prices: prices,
            klipps: klipps,
            hairs:hairs,
            makes:makes,
            
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

router.get('/add-price',  function (req, res) {

    var first = "";
    var slug = "";
    var second = "";
   
    

    
        res.render('admin/add_price', {
            first: first,
            slug: slug,
            second: second,
            
           
            
        });
    });


/*
 * POST add price
 */
router.post('/add-price', function (req, res) {
    
    
   
    
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('admin/add_price', {
                errors: errors,
                first: first,
                slug: slug,
                second: second,
                
                   
                
            });
     
    } else {
        Price.findOne({slug: slug}, function (err, price) {
            if (price) {
                req.flash('danger', 'that exists, choose another.');
              
                    res.render('admin/add_price', {
                        first: first,         
                        slug: slug,
                        second: second,
                        
                        
                     

                        
                        
                   
                    });
              
            } else {

                var price = new Price({
                    first: first,
                    slug: slug,
                    second: second,
                    
           
                   
                });

                price.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/content/' + price._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    
                  


                    req.flash('success', 'content added!');
                    res.redirect('/admin/price');
                });
            }
        });
    }

});


/*
 * GET edit price
 */
router.get('/edit-price/:id',  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   

        Price.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/admin/price');
            } else {
                
                        res.render('admin/edit_price', {
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
router.post('/edit-price/:id', function (req, res) {

    
   

   
    

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/admin/price/edit-price/' + id);
    } else {
        Price.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'this name exists, choose another.');
                res.redirect('/admin/price/edit-price/' + id);
            } else {
                Price.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                        p.first = first;
                        p.slug = slug;
                        p.second = second;
                      
                   
                   
                 
                    p.save(function (err) {
                        if (err)
                            console.log(err);


                            fs.remove('public/content/' + id, function (err) {
                                if (err)
                                console.log(err);
                            })


                           

                       
                        req.flash('success', 'price edited!');
                        res.redirect('/admin/price/edit-price/' + id);
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
    router.get('/delete-price/:id', function (req, res) {
    
        var id = req.params.id;
        var path = 'public/content/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                Price.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'price deleted!');
                res.redirect('/admin/price');
            }
        });
    
    });
    
    

    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP KLIPP KLIPP */
    
    
    
    
    /*
     * GET add Klipp
     */
    
    router.get('/add-klipp',  function (req, res) {
    
        var first = "";
        var slug = "";
        var second = "";
        var third = "";
        
        
    
        
            res.render('admin/add_klipp', {
                first: first,
                slug: slug,
                second: second,
                third: third,
                
               
                
            });
        });
    
    
    /*
     * POST add price
     */
    router.post('/add-klipp', function (req, res) {
        
        
       
        
       
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
    
      
        
    
        var errors = req.validationErrors();
    
        if (errors) {
            
                res.render('admin/add_klipp', {
                    errors: errors,
                    first: first,
                    slug: slug,
                    second: second,
                    third: third,
                    
                       
                    
                });
         
        } else {
            Klipp.findOne({slug: slug}, function (err, klipp) {
                if (klipp) {
                    req.flash('danger', 'that exists, choose another.');
                  
                        res.render('admin/add_klipp', {
                            first: first,         
                            slug: slug,
                            second: second,
                            third: third,
                            
                            
                         
    
                            
                            
                       
                        });
                  
                } else {
    
                    var klipp = new Klipp({
                        first: first,
                        slug: slug,
                        second: second,
                        third: third,
                        
               
                       
                    });
    
                    klipp.save(function (err) {
                        if (err)
                            return console.log(err);
    
                        mkdirp('public/content/' + klipp._id, function (err) {
                            return console.log(err);
                        });
    
                       
                    
                        
                      
    
    
                        req.flash('success', 'content added!');
                        res.redirect('/admin/price');
                    });
                }
            });
        }
    
    });
    
    
    /*
     * GET edit price
     */
    router.get('/edit-klipp/:id',  function (req, res) {
    
        var errors;
    
        if (req.session.errors)
            errors = req.session.errors;
        req.session.errors = null;
    
       
    
            Klipp.findById(req.params.id, function (err, p) {
                if (err) {
                    console.log(err);
                    res.redirect('/admin/price');
                } else {
                    
                            res.render('admin/edit_klipp', {
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
    router.post('/edit-klipp/:id', function (req, res) {
    
        
       
    
       
        
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
        
        var id = req.params.id;
    
        var errors = req.validationErrors();
    
        if (errors) {
            req.session.errors = errors;
            res.redirect('/admin/price/edit-klipp/' + id);
        } else {
            Klipp.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
                if (err)
                    console.log(err);
    
                if (p) {
                    req.flash('danger', 'this name exists, choose another.');
                    res.redirect('/admin/price/edit-klipp/' + id);
                } else {
                    Klipp.findById(id, function (err, p) {
                        if (err)
                            console.log(err);
    
                            p.first = first;
                            p.slug = slug;
                            p.second = second;
                            p.third = third;
                            
                           
                       
                       
                     
                        p.save(function (err) {
                            if (err)
                                console.log(err);
    
    
                                fs.remove('public/content/' + id, function (err) {
                                    if (err)
                                    console.log(err);
                                })
    
    
                               
    
                           
                            req.flash('success', 'price edited!');
                            res.redirect('/admin/price/edit-klipp/' + id);
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
        router.get('/delete-klipp/:id', function (req, res) {
        
            var id = req.params.id;
            var path = 'public/content/' + id;
        
            fs.remove(path, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    Klipp.findByIdAndRemove(id, function (err) {
                        console.log(err);
                    });
                    
                    req.flash('success', 'price deleted!');
                    res.redirect('/admin/price');
                }
            });
        
        });
        
    
    
    
    
    
    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP FUCKING HAIR STYLE */
    router.get('/add-hair',  function (req, res) {
    
        var first = "";
        var slug = "";
        var second = "";
      
        
        
    
        
            res.render('admin/add_hair', {
                first: first,
                slug: slug,
                second: second
              
                
               
                
            });
        });
    
    
    /*
     * POST add price
     */
    router.post('/add-hair', function (req, res) {
        
        
       
        
       
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        
        
    
      
        
    
        var errors = req.validationErrors();
    
        if (errors) {
            
                res.render('admin/add_hair', {
                    errors: errors,
                    first: first,
                    slug: slug,
                    second: second,
                    
                    
                       
                    
                });
         
        } else {
            Hair.findOne({slug: slug}, function (err, hair) {
                if (hair) {
                    req.flash('danger', 'that exists, choose another.');
                  
                        res.render('admin/add_hair', {
                            first: first,         
                            slug: slug,
                            second: second,
                            
                            
                            
                         
    
                            
                            
                       
                        });
                  
                } else {
    
                    var hair = new Hair({
                        first: first,
                        slug: slug,
                        second: second
                      
                        
               
                       
                    });
    
                    hair.save(function (err) {
                        if (err)
                            return console.log(err);
    
                        mkdirp('public/content/' + hair._id, function (err) {
                            return console.log(err);
                        });
    
                       
                    
                        
                      
    
    
                        req.flash('success', 'content added!');
                        res.redirect('/admin/price');
                    });
                }
            });
        }
    
    });
    
    
    /*
     * GET edit price
     */
    router.get('/edit-hair/:id',  function (req, res) {
    
        var errors;
    
        if (req.session.errors)
            errors = req.session.errors;
        req.session.errors = null;
    
       
    
            Hair.findById(req.params.id, function (err, p) {
                if (err) {
                    console.log(err);
                    res.redirect('/admin/price');
                } else {
                    
                            res.render('admin/edit_hair', {
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
    router.post('/edit-hair/:id', function (req, res) {
    
        
       
    
       
        
    
        var first = req.body.first;
        var slug = first.replace(/\s+/g, '-').toLowerCase();
        var second = req.body.second;
        var third = req.body.third;
        
        
        var id = req.params.id;
    
        var errors = req.validationErrors();
    
        if (errors) {
            req.session.errors = errors;
            res.redirect('/admin/price/edit-hair/' + id);
        } else {
            Hair.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
                if (err)
                    console.log(err);
    
                if (p) {
                    req.flash('danger', 'this name exists, choose another.');
                    res.redirect('/admin/price/edit-hair/' + id);
                } else {
                    Hair.findById(id, function (err, p) {
                        if (err)
                            console.log(err);
    
                            p.first = first;
                            p.slug = slug;
                            p.second = second;
                            p.third = third;
                            
                           
                       
                       
                     
                        p.save(function (err) {
                            if (err)
                                console.log(err);
    
    
                                fs.remove('public/content/' + id, function (err) {
                                    if (err)
                                    console.log(err);
                                })
    
    
                               
    
                           
                            req.flash('success', 'price edited!');
                            res.redirect('/admin/price/edit-hair/' + id);
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
        router.get('/delete-hair/:id', function (req, res) {
        
            var id = req.params.id;
            var path = 'public/content/' + id;
        
            fs.remove(path, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    Hair.findByIdAndRemove(id, function (err) {
                        console.log(err);
                    });
                    
                    req.flash('success', 'price deleted!');
                    res.redirect('/admin/klipp');
                }
            });
        
        });
        
    
    
    
    
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
    /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
  /* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP FUCKING MAKEUP *//* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP HAIR ENDS */
  
  router.get('/add-make',  function (req, res) {
    
    var first = "";
    var slug = "";
    var second = "";
  
    
    

    
        res.render('admin/add_make', {
            first: first,
            slug: slug,
            second: second
          
            
           
            
        });
    });


/*
 * POST add price
 */
router.post('/add-make', function (req, res) {
    
    
   
    
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
    
    

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('admin/add_make', {
                errors: errors,
                first: first,
                slug: slug,
                second: second,
                
                
                   
                
            });
     
    } else {
        Make.findOne({slug: slug}, function (err, make) {
            if (make) {
                req.flash('danger', 'that exists, choose another.');
              
                    res.render('admin/add_make', {
                        first: first,         
                        slug: slug,
                        second: second,
                        
                        
                        
                     

                        
                        
                   
                    });
              
            } else {

                var make = new Make({
                    first: first,
                    slug: slug,
                    second: second
                  
                    
           
                   
                });

                make.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/content/' + make._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    
                  


                    req.flash('success', 'content added!');
                    res.redirect('/admin/price');
                });
            }
        });
    }

});


/*
 * GET edit price
 */
router.get('/edit-make/:id',  function (req, res) {

    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   

        Make.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/admin/price');
            } else {
                
                        res.render('admin/edit_make', {
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
router.post('/edit-make/:id', function (req, res) {

    
   

   
    

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;
   
    
    
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/admin/price/edit-make/' + id);
    } else {
        Make.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'this name exists, choose another.');
                res.redirect('/admin/price/edit-make/' + id);
            } else {
                Make.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                        p.first = first;
                        p.slug = slug;
                        p.second = second;
                        
                        
                       
                   
                   
                 
                    p.save(function (err) {
                        if (err)
                            console.log(err);


                            fs.remove('public/content/' + id, function (err) {
                                if (err)
                                console.log(err);
                            })


                           

                       
                        req.flash('success', 'price edited!');
                        res.redirect('/admin/price/edit-make/' + id);
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
    router.get('/delete-make/:id', function (req, res) {
    
        var id = req.params.id;
        var path = 'public/content/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                Make.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'price deleted!');
                res.redirect('/admin/klipp');
            }
        });
    
    });
    



/* GEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET KLIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP-make ENDS */
    
   



module.exports = router;