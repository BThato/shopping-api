const express = require('express');
const router = express.Router();


//Routes

router.get('/', (req, res, next) => {
    res.status(201).json({ message: 'well this page runs to the products get method' });
});


router.post('/', (req, res, next) => {

    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({ message: 'created orders the orders required', order: order });
});

router.get('/:orderId', (req, res, next) => {
    res.status(201).json({ message: 'Got order by Id' });
});

router.delete('/:orderId', (req, res) => {

    res.status(201).json({
        message: 'order was delelted',
        orderId: req.params.orderId
    });
});


module.exports = router;