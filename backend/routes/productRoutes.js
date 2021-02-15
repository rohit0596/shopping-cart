const express = require("express");
const router = express.Router();

const {getAllProducts, getProductByid,} = require("../controller/productControllers");

//@des GET all products from db
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@des GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductByid)

module.exports = router;