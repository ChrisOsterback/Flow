var mongoose = require('mongoose');

// Product Schema
var PriceSchema = mongoose.Schema({
   
    first: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    second: {
        type: String
    }
    
    
});

var Price = module.exports = mongoose.model('Price', PriceSchema);