// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to inser todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    //
    // });

    // db.collection('Users').insertOne({
    //     name: 'Brian',
    //     age: 50,
    //     location: 'Reston'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    //
    // });

    db.close();
});
