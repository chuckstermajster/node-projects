var obj = {
    name: 'Mateusz'
};

var stringObject = JSON.stringify(obj);
var json = '{"name": "Mateusz", "age": 25}';
var jsonObj = JSON.parse(json);


const fs = require('fs');

var originalNote = {
    title: 'title111111',
    body: 'bodyddd'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note.title);