var mongoose = require('mongoose');

// Product Schema
var EngpriceSchema = mongoose.Schema({
   
    first: {
        type: String
        
    },
    slug: {
        type: String
    },
    second: {
        type: String
    },
    
    
});

var Engprice = module.exports = mongoose.model('Engprice', EngpriceSchema);