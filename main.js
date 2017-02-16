var fs = require('fs');
var dataBase = require('./dataBase.js');

var User = {
  name: 'string',
  password: 'string',
  mail: 'string'
};

var userCollection = dataBase.addCollection('Users',User);
