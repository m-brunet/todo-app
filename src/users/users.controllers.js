const services = require('./users.services');
const joi = require('joi');

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

        //schema used for validation
        const userSchema = {
            username: joi.string()
                .alphanum()
                .min(8)
                .max(16),
            password: joi.string()
                .min(8)
                .max(12),
            displayName: joi.string()
                .alphanum()
                .min(6)
                .max(16)
        };

        //options of validation
        const options = {
            'allowUnknown': false
        };

        const validated = await joi.validate(data, userSchema, options);//check params
        const user = await services.createOneUser(validated);//create a new user
        res.status(201).send(user);
    } catch (err) {
        throw err;
    }
}

module.exports.getManyUsers = getManyUsers;
module.exports.createOneUser = createOneUser;
