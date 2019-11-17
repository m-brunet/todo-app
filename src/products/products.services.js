const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//create
/*async function createOneProduct(data) {
    try {
        //const user = new User({username : data.username, password : data.password, displayName : data.displayName});
        //return await user.save();
    } catch (err) {
        throw err;
    }
}*/

//read

//update

//delete

//getProductNames
async function getProductNames() {
    try {
        const products = await Product.find();
        //products.forEach((product) => {
        //    productNames.push(product.productName);
        //});

        // return products.map((product) => {
        //     return product.productName;
        // });

        return products.reduce((acc, current, index) => {
            if (index === 0) {
                return { products: current.productName };
            }

            return {
                products: acc.products + ', ' + current.productName
            };
        }, { products: '' });
    } catch (err) {
        throw err;
    }
}

//getTotalPrice
async function getTotalPrice() {
    try {
        const products = await Product.find();

        return products.reduce((acc, current) => {
            return { total: acc.total + current.price * current.quantity };
        }, { total: 0 });
    } catch (err) {
        throw err;
    }
}

module.exports.getProductNames = getProductNames;
module.exports.getTotalPrice = getTotalPrice;
