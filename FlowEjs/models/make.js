var mongoose = require('mongoose');

// Product Schema
var MakeSchema = mongoose.Schema({
   
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

var Make = module.exports = mongoose.model('Make', MakeSchema);