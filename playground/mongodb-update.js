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
    // db.collection("Todos").findOneAndUpdate({ _id: new ObjectID("5b6ae1ee448fcca30d5bdb8e") }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result)
    //     });
    db.collection("Users").findOneAndUpdate({ name: "Alex" }, {
        $set: {
            name: "Marco"
        },
        $inc: {
            age: 1
        }
    }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });


    // client.close();
});