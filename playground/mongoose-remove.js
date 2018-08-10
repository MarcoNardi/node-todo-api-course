const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
// ObjectId("5b6b6bec0d1c1a12309b6132")
//removing all docs
// Todo.remove({}).then((results) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove()
// all od this return the doc (find)

Todo.findByIdAndRemove("5b6b6bec0d1c1a12309b6132").then((todo) => {
    console.log(todo);
});