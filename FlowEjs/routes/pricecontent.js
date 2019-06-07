var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');
var resizeImg = require('resize-img');


var Price = require('../models/price');


router.get('/',  function (req, res) {
    var esimatedDocumentCount

    Price.count(function (err, c) {
        esimatedDocumentCount = c;
    });

    Price.find(function (err, prices) {
        res.render('admin/price', {
            prices: prices,
            esimatedDocumentCount: esimatedDocumentCount
        });
    });
});



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
            second: second
      
           
            
        });
    });


/*
 * POST add price
 */
router.post('/add-price', function (req, res) {
    
    

    req.checkBody('first', 'There has to be name.').notEmpty();
   

    var first = req.body.first;
    var slug = first.replace(/\s+/g, '-').toLowerCase();
    var second = req.body.second;

  

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('admin/add_price', {
                errors: errors,
                first: first,
                slug: slug,
                second: second
              
                
                
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
                    second: second
                    
                   
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

    
   

    req.checkBody('first', 'this must have a value.').notEmpty();
    

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
    








module.exports = router;