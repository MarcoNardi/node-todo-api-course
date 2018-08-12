const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

schema.methods.toJSON = function () {
    var user = this;
    var userObj = user.toObject();

    return _.pick(userObj, ["email", "_id"]);
};

schema.methods.generateAuthToken = function () {
    var user = this;
    var access = "auth";
    // var _id = user._id.toHexString()
    var token = jwt.sign({ _id: user._id.toHexString(), access }, "pippo").toString();
    user.tokens = user.tokens.concat([{ access, token }]);
    return user.save().then(() => { return token });
};

schema.statics.findByToken = function (token) {
    var User = this;
    var decoded
    try {
        decoded = jwt.verify(token, "pippo");
    } catch (e) {
        return Promise.reject(e);
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': "auth"
    });
};

schema.pre("save", function (next) {
    var user = this;
    if (user.isModified("password")) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hashValue) => {
                user.password = hashValue;
                next();
            });
        });
    } else {
        next();
    }

});
var User = mongoose.model("User", schema);
module.exports = { User };