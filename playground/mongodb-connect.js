const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // prima collezione da memorizzare nel nuovo database
  db.collection('Todos').insertOne({
    text: 'something to do',
    completed: 'False'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined,2));
  });

  // seconda collezione da inserire nel database
  db.collection('Users').insertOne({
    //_id: '123', posso stabilre un mio personale _id
    name: 'Stefano',
    age: '40',
    location: 'Trento'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert users', err);
    }
    console.log(result.ops);
    //console.log(result.ops[0]._id); posso stampare '_id'
    //console.log(result.ops[0]._id.getTimestamp()); posso stampare l'ora e la data di modifica
  });

  // chiusura del database mongodb
  db.close();

})
