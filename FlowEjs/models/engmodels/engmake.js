var mongoose = require('mongoose');

// Product Schema
var EngmakeSchema = mongoose.Schema({
   
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

var Engmake= module.exports = mongoose.model('Engmake', EngmakeSchema);