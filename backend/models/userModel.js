const {Schema, model} = require('../connection');

const scObj = new Schema({
    name: String,
    mobile: Number,
    age: Number,
    email: String,
    password: String
})
module.exports = model('users', scObj);


