var mongoose = require('mongoose');

// Product Schema
var SweklippSchema = mongoose.Schema({
   
    first: {
        type: String
        
    },
    slug: {
        type: String
    },
    second: {
        type: String
    },
    third: {
        type: String
    }
  
});

var Sweklipp = module.exports = mongoose.model('Sweklipp', SweklippSchema);