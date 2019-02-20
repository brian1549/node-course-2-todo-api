const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


// Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5c6d6fd17adf1ada9b4ad400').then((todo) => {
    console.log(todo);
});
