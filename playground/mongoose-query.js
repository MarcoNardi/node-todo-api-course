const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
// ObjectId("5b6b6bec0d1c1a12309b6132")


var id = "5b6b6bec0d1c1a12309b613211";
if (!ObjectID.isValid(id)) {
    console.log("id not valide");
}


Todo.findById(id).then((todo) => {
    if (!todo) {
        console.log("Id not found");
    }
    console.log("todo by id ", todo);
}).catch((e) => console.log(e));