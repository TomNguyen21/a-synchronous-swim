const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // if (req.method === 'GET') {
  //   res.writeHead(200, headers);
  //   //var direction = messages.dequeue();
  //   res.end(randomDirection())
  //   //res.end(direction);
  // }
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    var direction = messages.dequeue();
    console.log(direction);
    res.end(direction);
  }
  if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
  }
  next(); // invoke next() at the end of a request to help with testing!
};

//pick a random option to return
// var randomDirection = () => {

//   const validMessages = ['left', 'right', 'up', 'down'];
//   let index = Math.floor(Math.random() * 4);
//   let value = validMessages[index]
//   return value;
// }
// let index = Math.floor(Math.random() * 4);
// let value = validMessages[index];
