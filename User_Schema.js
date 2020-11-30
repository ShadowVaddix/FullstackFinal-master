var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    item: {type: String, index: 1, require: true}
}, {collection: 'users'});
exports.userSchema = userSchema;