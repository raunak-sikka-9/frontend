const {Schema, model} = require('../connection');

const scObj = new Schema({
    name: String,
    email: String,
})
module.exports = model('subscribers', scObj);