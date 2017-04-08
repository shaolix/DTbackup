var MongoClient = require('mongodb').MongoClient;

var _db;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect('mongodb://heroku_n5jqj31x:Sl839857@ds015750.mlab.com:15750/heroku_n5jqj31x', function(err, db) {
      _db = db;
      return callback(err);
    });
  },

  getDB: function() {
    return _db;
  }
  
}; 

/*mongodb://dotogether:csc309team08@ds147510.mlab.com:47510/dotogether*/