require("dotenv").config();

const express = require("express");
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));