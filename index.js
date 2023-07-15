const express = require('express');
const app = express();

// env connections
const dotenv = require('dotenv');
const dotenvb = require('dotenv').config();

// template engines connection
app.use(express.urlencoded({ extended: true }));
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "index" }));
app.set('view engine', 'hbs');

// working with path..
const path = require('path');

// Make public folder globally 
app.use(express.static(path.join(__dirname, 'public')))


//routes

// dammydee
// app.get('/contact',(req,res)=>{
//     res.render('pages/contact')
// })
app.listen(process.env.PORT || 8000, () => {
    console.log('server is running ')
})