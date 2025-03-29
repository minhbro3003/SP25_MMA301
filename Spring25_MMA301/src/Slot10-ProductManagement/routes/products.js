//npm i express
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
//display list of product
router.get('/admin',async (req,res)=>{
    try {
        const products = await Product.find();//get all product
        res.render('admin',{products,product:null});
    } catch (error) {
        res.status(500).send(error.message);
    }
});
//add new product
router.post('/add-product',async (req,res)=>{
    try {
        const {id,name,price,des} = req.body;//get data from user
        const newProduct = new Product({id,name,price,des});//create a new product
        await newProduct.save();//save to document of mongo
        res.redirect('/admin');
    } catch (error) {
        res.status(500).send(error);
    }
});
//get info of a exist product
router.get('/edit-product/:id',async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);//get one product by id
        const products = await Product.find();//get list product
        res.render('admin',{product,products}); //send all product to the response
    } catch (error) {
        res.status(500).send(error);
    }
});
//update a product
router.post('/edit-product/:id',async (req,res)=>{
    try {
        const {name,price,des} = req.body;//get name,price,des from the Request
        await Product.findByIdAndUpdate(req.params.id,{name,price,des});
        res.redirect('/admin');
    } catch (error) {
        res.status(500).send(error);
    }
});
//delete a product
router.post('/delete-product/:id',async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/admin');
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports=router;