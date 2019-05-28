const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');


// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('Connected to MongoDB');
// });

const app = express()



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT);