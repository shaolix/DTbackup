var MongoClient = require('mongodb').MongoClient;

var _db;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect('mongodb://dotogether:csc309team08@ds147510.mlab.com:47510/dotogether', function(err, db) {
      _db = db;
      return callback(err);
    });
  },

  getDB: function() {
    return _db;
  }
  
}; 
