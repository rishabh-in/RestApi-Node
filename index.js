const express = require('express');
const mongoose = require('mongoose');

// setup express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/testdata');
mongoose.Promise = global.Promise;

// Serve static files
app.use(express.static('public'));

app.use(express.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next) {
    //console.log(err)
    res.status(422).send({error:err.message});
});

// listen for requests
app.listen(4000,()=> {
    console.log("Running at 4000");
})