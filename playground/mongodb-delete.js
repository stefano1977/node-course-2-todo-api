const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'go home'}).then((result) => {
    console.log(result);
  })

  // deleteOne
  db.collection('Todos').deleteOne({text: 'go home'}).then((result) => {
    console.log(result);
  })

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })

  // altro esempio
  db.collection('Users').deleteMany({name: 'luca'});

  // altro esempio
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  })

  db.close();

}) // chiusura MongoClient.connect
