// migrations/001-initial-setup.js

const mongoose = require('mongoose');

const up = async () => {
  // Create 'bookservices' collection
  await mongoose.connection.createCollection('bookservices');

  // Create indexes for 'bookservices' collection
  await mongoose.connection.collection('bookservices').createIndex({ "Name": "text" });
  await mongoose.connection.collection('bookservices').createIndex({ "Phno": 1, "type": "number" });
  await mongoose.connection.collection('bookservices').createIndex({ "EmailId": "text" });
  await mongoose.connection.collection('bookservices').createIndex({ "service": "text" });
  await mongoose.connection.collection('bookservices').createIndex({ "message": "text" });
 

  // Create 'login' collection
  await mongoose.connection.createCollection('login');

  // Create indexes for 'login' collection
  await mongoose.connection.collection('login').createIndex({ "email": "text" });
  await mongoose.connection.collection('login').createIndex({ "password": "text" });
};

const down = async () => {
  // Drop 'bookservices' collection
  await mongoose.connection.dropCollection('bookservices');

  // Drop 'login' collection
  await mongoose.connection.dropCollection('login');
};

module.exports = { up, down };
