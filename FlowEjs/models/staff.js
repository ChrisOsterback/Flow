var mongoose = require('mongoose');

// Product Schema
var StaffSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
  
    slug: {
        type: String
    },
    worktitle: {
        type: String
    },
  
    image: {
        type: String
    }
    
});

var Staff = module.exports = mongoose.model('Staff', StaffSchema);