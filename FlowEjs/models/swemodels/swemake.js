var mongoose = require('mongoose');

// Product Schema
var SwemakeSchema = mongoose.Schema({
   
    first: {
        type: String
        
    },
    slug: {
        type: String
    },
    second: {
        type: String
    }
    
  
});

var Swemake= module.exports = mongoose.model('Swemake', SwemakeSchema);