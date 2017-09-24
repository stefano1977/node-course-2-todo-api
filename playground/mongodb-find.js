const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // prima query di ricerca
  //db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //  console.log('Todos');
  //  console.log(JSON.stringify(docs, undefined, 2));
  //}, (err) => {
  //  console.log('Unable to fetch todos', err)
  //});

  // seconda query di ricerca
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count: ' + count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })

  // terza query di ricerca
  //db.collection('Users').find({name: 'Stefano'}).toArray().then((docs) => {
  //  console.log(JSON.stringify(docs, undefined, 2));
  //})

  db.close();


}) // chiusura MongoClient.connect
