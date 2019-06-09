var mongoose = require('mongoose');

// Product Schema
var HairSchema = mongoose.Schema({
   
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

var Hair = module.exports = mongoose.model('Hair', HairSchema);