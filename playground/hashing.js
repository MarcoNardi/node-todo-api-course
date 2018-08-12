const bcrypt = require("bcryptjs");

var password = "hellomydudes";
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashValue) => {
        console.log(hashValue);
    });
});

var hashedPsw = "$2a$10$QFlVci8Mo5/ACr1nZZiqF.gQW5SltoG/PT7lPYNf.DQ6dRrFq2Tti";
bcrypt.compare("herru", hashedPsw, (err, res) => {
    console.log(res);
});

// const { SHA256 } = require("crypto-js");
// const jwt = require("jsonwebtoken");

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, "123abc");
// console.log(token);


// var decoded = jwt.verify(token, "123abc");
// console.log(decoded);
// var msg = "im user number 5";
// var hash = SHA256(msg).toString();
// console.log(hash);

// var data = {
//     id: 4

// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + "shhitsasecret").toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + "shhitsasecret").toString();
// if (resultHash === token.hash) {
//     console.log("data not changed");
// } else {
//     console.log("data was changed");
// }