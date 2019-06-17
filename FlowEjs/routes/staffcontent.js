var express = require('express');
var router = express.Router();
var mkdirp = require('mkdirp');
var fs = require('fs-extra');
var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

var Staff = require('../models/staff');


router.get('/', isAdmin, function (req, res) {
   

    Staff.find(function (err, staffs) {
        res.render('admin/content', {
            staffs: staffs,
            
        });
    });
});



/*
 * GET add staff
 */

router.get('/add-staff', isAdmin, function (req, res) {

    var title = "";
    var slug = "";
    var worktitle = "";
    var sweworktitle = "";
    var engworktitle = "";
  
    

    
        res.render('admin/add_staff', {
            title: title,
            slug: slug,
            worktitle: worktitle,
            sweworktitle: sweworktitle,
            engworktitle: engworktitle
           
            
        });
    });


/*
 * POST add Staff
 */
router.post('/add-staff',  function (req, res) {
    var imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";
    

    req.checkBody('title', 'There has to be name.').notEmpty();
    

    var title = req.body.title;
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var worktitle = req.body.worktitle;
    var sweworktitle = req.body.sweworktitle;
    var engworktitle = req.body.engworktitle;
  

  
    

    var errors = req.validationErrors();

    if (errors) {
        
            res.render('admin/add_staff', {
                errors: errors,
                title: title,
                slug: slug,
                worktitle: worktitle,
                sweworktitle: sweworktitle,
                engworktitle: engworktitle
                
                
            });
     
    } else {
        Staff.findOne({slug: slug}, function (err, staff) {
            if (staff) {
                req.flash('danger', 'Staff title exists, choose another.');
              
                    res.render('admin/add_staff', {
                        title: title,         
                        slug: slug,
                        worktitle: worktitle,
                        sweworktitle: sweworktitle,
                        engworktitle: engworktitle

                        
                        
                   
                    });
              
            } else {

                var staff = new Staff({
                    title: title,
                    slug: slug,
                    worktitle: worktitle,
                    sweworktitle: sweworktitle,
                    engworktitle: engworktitle,
                    image: imageFile, 
                   
                });

                staff.save(function (err) {
                    if (err)
                        return console.log(err);

                    mkdirp('public/staff_images/' + staff._id, function (err) {
                        return console.log(err);
                    });

                   
                
                    if (imageFile != "") {
                        var staffImage = req.files.image;
                        var path = 'public/staff_images/' + staff._id + '/' + imageFile;

                        staffImage.mv(path, function (err) {
                            return console.log(err);
                        });
                    }
                  


                    req.flash('success', 'staff added!');
                    res.redirect('/admin/content');
                });
            }
        });
    }

});


/*
 * GET edit staff
 */
router.get('/edit-staff/:id', isAdmin,  function (req, res) {
    
    var errors;

    if (req.session.errors)
        errors = req.session.errors;
    req.session.errors = null;

   

        Staff.findById(req.params.id, function (err, p) {
            if (err) {
                console.log(err);
                res.redirect('/admin/content');
            } else {
                
                
                        res.render('admin/edit_staff', {
                            title: p.title,
                            errors: errors,
                            worktitle: p.worktitle,
                            sweworktitle: p.sweworktitle,
                            engworktitle: p.engworktitle,
                            image: p.image,
                            id: p._id
                        });
                    }
        }
          
        )}
)
       

 
/*
 * POST edit staff
*/
router.post('/edit-staff/:id', function (req, res) {

    var imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    req.checkBody('title', 'Title must have a value.').notEmpty();
    

    var title = req.body.title;
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var worktitle = req.body.worktitle;
    var sweworktitle = req.body.sweworktitle;
    var engworktitle = req.body.engworktitle;
    var pimage = req.body.pimage;
    var id = req.params.id;

    var errors = req.validationErrors();

    if (errors) {
        req.session.errors = errors;
        res.redirect('/admin/content/edit-staff/' + id);
    } else {
        Staff.findOne({slug: slug, _id: {'$ne': id}}, function (err, p) {
            if (err)
                console.log(err);

            if (p) {
                req.flash('danger', 'Staff title exists, choose another.');
                res.redirect('/admin/staff/edit-staff/' + id);
            } else {
                Staff.findById(id, function (err, p) {
                    if (err)
                        console.log(err);

                    p.title = title;
                    p.slug = slug;
                    p.worktitle = worktitle;
                        p.sweworktitle = sweworktitle;
                        p.engworktitle = engworktitle;
                    if (imageFile != "") {
                        p.image = imageFile;
                    }

                    p.save(function (err) {
                        if (err)
                            console.log(err);

                        if (imageFile != "") {
                            if (pimage != "") {
                                fs.remove('public/staff_images/' + id + '/' + pimage, function (err) {
                                    if (err)
                                        console.log(err);
                                });
                            }

                            var staffImage = req.files.image;
                            var path = 'public/staff_images/' + id + '/' + imageFile;

                            staffImage.mv(path, function (err) {
                                return console.log(err);
                            });

                        }

                        req.flash('success', 'staff edited!');
                        res.redirect('/admin/content/edit-staff/' + id);
                    });

                });
            }
        });
    }

});




    router.get('/delete-image/:image', isAdmin, function (req, res) {

        var originalImage = 'public/staff_images/' + req.query.id;
        var thumbImage = 'public/staff_images/' + req.query.id;
    
        fs.remove(originalImage, function (err) {
            if (err) {
                console.log(err);
            } else {
                fs.remove(thumbImage, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        req.flash('success', 'Image deleted!');
                        res.redirect('/admin/content/edit-staff/' + req.query.id);
                    }
                });
            }
        });
    });
    
    /*
     * GET delete staff
     */
    router.get('/delete-staff/:id', isAdmin, function (req, res) {
    
        var id = req.params.id;
        var path = 'public/staff_images/' + id;
    
        fs.remove(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                Staff.findByIdAndRemove(id, function (err) {
                    console.log(err);
                });
                
                req.flash('success', 'Staff deleted!');
                res.redirect('/admin/content');
            }
        });
    
    });
    








module.exports = router;