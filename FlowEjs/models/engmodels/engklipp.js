var mongoose = require('mongoose');

// Product Schema
var EngklippSchema = mongoose.Schema({
   
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

var Engklipp = module.exports = mongoose.model('Engklipp', EngklippSchema);