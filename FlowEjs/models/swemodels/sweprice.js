var mongoose = require('mongoose');

// Product Schema
var SwepriceSchema = mongoose.Schema({
   
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

var Sweprice = module.exports = mongoose.model('Sweprice', SwepriceSchema);