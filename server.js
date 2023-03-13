const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/routes');
const url = require('url')
const moment = require('moment');


const app = express();

// conecting to DATABASE

mongoose.connect("mongodb+srv://mithlesh:1234@cluster0.tnbojkw.mongodb.net/feement?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
})

var conect = mongoose.connection;


conect.on('error', () => console.log("error in connecting database"));
conect.once('open', () => console.log("connected"))

// 33333333333333333333333333333333333333333

app.use(express.static('./public/feement'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',route)


app.listen(8080, function () {
    console.log(" running on port number 8080");
});