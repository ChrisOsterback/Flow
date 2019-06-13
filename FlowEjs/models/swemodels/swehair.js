var mongoose = require('mongoose');

// Product Schema
var SweHairSchema = mongoose.Schema({
   
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

var SweHair = module.exports = mongoose.model('SweHair', SweHairSchema);