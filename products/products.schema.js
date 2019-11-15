const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    quantity: Number,
    price: Number
});

mongoose.model('Product', productSchema);
