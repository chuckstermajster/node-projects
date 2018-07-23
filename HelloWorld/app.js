console.log("starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

var add = notes.add(2, 6);

console.log(add);

console.log(_.isString(true));
console.log(_.isString('Mateusz'));




//  var result = notes.addNote();
//  console.log(result);
//fs.appendFileSync('greet.txt', `Hi ${os.userInfo().username} ! You are ${notes.age}`);

