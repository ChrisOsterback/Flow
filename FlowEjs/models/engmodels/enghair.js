var mongoose = require('mongoose');

// Product Schema
var EnghairSchema = mongoose.Schema({
   
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

var Enghair = module.exports = mongoose.model('EnghEngair', EnghairSchema);