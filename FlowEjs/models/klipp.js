var mongoose = require('mongoose');

// Product Schema
var KlippSchema = mongoose.Schema({
   
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

var Klipp = module.exports = mongoose.model('Klipp', KlippSchema);