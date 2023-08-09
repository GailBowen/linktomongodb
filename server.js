console.log('Gail - hello from server.js');
const express = require('express');
const mongoose = require('mongoose');
const Article = require('./articles');
const app = express();
//const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1/fetaomelette', {useNewUrlParser: true, useUnifiedTopology: true});

console.log('am I here?');

let article = new Article({ 
        title: 'feta',
        description: 'spinach on polish bread',
        markdown: 'I love Terry'
    });

    try {
        article = article.save();
     }
     catch (e) {
         console.log(e);
     }

     app.use(express.urlencoded({extended: false}));

     app.listen(5003);

     //I AM THE UAT BRANCH - HELLO