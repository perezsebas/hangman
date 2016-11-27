"use strict";

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
  connect(){
    client.connect('mongodb://localhost:27017/letters', (err, db) => {
      if (err){
        console.log("Error connecting to DB");
        process.exit(1);
      }
      _db = db;
      console.log("Connnected to DB");
    });
  }
}
