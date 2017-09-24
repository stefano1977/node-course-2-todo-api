const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //db.collection('Todos').findOneAndUpdate(
  //  {_id: new ObjectID('59c74625693bac02f8b87c9c')},
  //  {$set: {completed: true}},
  //  {returnOriginal: false}).then((result) => {
  //    console.log(result);
  //  })

  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('59c5f8f2bcd6cf062c517bcd')},
    {$set: {name: 'Stefano'}, $inc: {age: 1}},
    {returnOriginal: false}).then((result) => {
      console.log(result);
    })






  db.close();

}) // chiusura MongoClient.connect
