var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");


var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var Todo1 = new Todo({
    text: "do things",
});

Todo1.save().then((doc) => {
    console.log("saved the Todo", doc);
}, (e) => {
    console.log("unable to save Todo", e);
});


var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

User1 = new User({
    email: "hello@fuccboi.com"
});

User1.save().then((doc) => {
    console.log("User saved", doc);
}, (e) => {
    console.log("couldn't save the user", e);
});