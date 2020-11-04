var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});
//Automatically add User and Password
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);