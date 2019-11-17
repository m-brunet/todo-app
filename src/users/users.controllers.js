const services = require('./users.services');

async function getManyUsers(req, res) {
    try {
        const users = await services.getManyUsers();
        return res.send(users);
    } catch (err) {
        throw err;
    }
}

async function createOneUser(req, res) {
    try {
        const data = req.body;
        const user = await services.createOneUser(data);
        res.status(201).send(user);
    } catch (err) {
        throw err;
    }
}


module.exports.getManyUsers = getManyUsers;
module.exports.createOneUser = createOneUser;
