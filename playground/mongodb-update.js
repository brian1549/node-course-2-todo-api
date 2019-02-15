// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c66c12be5a2aa287a5514d7')
    // }, {
    //     $set: {completed: true}
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c65a621e5a2aa287a55117e")
    }, {
        $set:{name: 'Brian', location: 'Reston'},
        $inc:{age: 25}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});
