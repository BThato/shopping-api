 const express = require('express');
 const router = express.Router();
 const Product = require('../models/Product');
 const mongoose = require('mongoose');
 


 router.get('/', (req, res, next) => {
     res.status(200).json({ message: 'well this page runs to the products get method' });
 });



 router.post('/', (req, res, next) => {

     const product = new Product({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         price: req.body.price
     });


     res.status(200).json({
         message: 'handling post request',
         createdProduct: product
     });
 });


 router.get('/:productId', (req, res, next) => {

     const id = req.params.productId;

     if (id === 'special') {
         res.status(200).json({ message: 'you have discovered and spical id' });
     } else {
         res.status(200).json({ message: 'you have passed' });
     };


 });


 router.patch('/:prodcutId', (req, res, next) => {
     res.status(200).json({ message: 'you have upadated very well' });

 });


 router.delete('/:prodcutId', (req, res, next) => {
     res.status(200).json({ message: 'have deleted very well' });

 });


 module.exports = router;