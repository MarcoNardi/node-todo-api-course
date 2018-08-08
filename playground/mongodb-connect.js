// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log("connected to mongodb server");
    const db = client.db("TodoApp");
    // db.collection("Todos").insertOne({
    //     text: "do homework",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unalbe to insert todo");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection("Users").insertOne({
    //     name: "Gio",
    //     age: 56,
    //     location: "Chiampo"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert user", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
});