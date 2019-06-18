
exports.isAdmin = function(req, res, next) {
    if (req.isAuthenticated() && res.locals.user.admin == 1) {
        next();
    } else {
        req.flash('Success', 'Welcome To Admin Page');
        res.redirect('/users/login');
    }
}