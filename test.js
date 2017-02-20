var dataBase = require('./dataBase.js')('data');

User ={
  Id: 'Id',
  collectionName: 'Users',
  name: 'string',
  age: 'number',
  email: 'string'
}

dataBase.addCollection(User.collectionName,User);
Users = dataBase.getCollection(User.collectionName);

userItem = {
  Id: 'emelie',
  age: 26,
  email: 'emelie@email.com'
};

Users.addItem(userItem);

Users.getItemById(userItem.name);

Users.changeItemById(userItem.Id, {town: 'malmberget'});

Users.deleteItemById(userItem.name);

dataBase.deleteCollection(User.collectionName);
