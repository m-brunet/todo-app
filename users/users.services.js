const mongoose = require('mongoose');

const User = mongoose.model('User');
const users = require('./users.json');

//create
async function createOneUser(data) {
    try {
        const user = new User({username : data.username, password : data.password, displayName : data.displayName});
        return await user.save();
    } catch (err) {
        throw err;
    }
}

//read

//update

//delete


async function getManyUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(users);
        }, 3000);
    });
}

module.exports.getManyUsers = getManyUsers;
module.exports.createOneUser = createOneUser;
