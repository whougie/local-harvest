const router = require('express').Router();

const userRoute = require('./userRoute');
const productRoute = require('./productRoute');
const productsPurchaseRoute = require('./productsPurchaseRoute');
const bagRoute = require('./bagRoute');

router.use('/users', userRoute);
router.use('/products', productRoute);
router.use('/products-purchases', productsPurchaseRoute);
router.use('/bags', bagRoute);

module.exports = router;