const express = require('express');
const mongoose = require('mongoose');
//npm i body-parser
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const app = express();
//config view engine is ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));//midleware
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/a2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected');
}).catch(err => {
    console.log('error: ', err.message);
});
//use route for the product management
app.use('/', productRoutes);
//listen port 3000
app.listen(3000, () => {
    console.log('Server is running at 3000 port');
});