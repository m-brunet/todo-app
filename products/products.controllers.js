const services = require('./products.services');

async function getProductNames(req, res) {
    try {
        const productNames = await services.getProductNames();
        return res.send(productNames);
    } catch (err) {
        throw err;
    }
}

async function getTotalPrice(req, res) {
    try {
        const totalPrice = await services.getTotalPrice();
        return res.send(totalPrice);
    } catch (err) {
        throw err;
    }
}

module.exports.getProductNames = getProductNames;
module.exports.getTotalPrice = getTotalPrice;
