console.log("starting notes");

const fs = require('fs');

var fetchNotes = () => {

    try {
        var currentNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(currentNotes);
        
        } catch(e) {
        return [];
        }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
var notes = fetchNotes();
var note = {
    title,
    body
};
var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
    
    };
};

var getAll = () => {
    console.log('getting all notes');
};

var getNote = (note) => {
    console.log('getting note', note);
};

var removeNote = (noteToDelete) => {
    var currentNotes = fetchNotes();
    var notesAfterDelete = currentNotes.filter((note) => note.title !== noteToDelete );
    saveNotes(notesAfterDelete);

    return currentNotes.length !== notesAfterDelete.length;
}
module.exports = {
addNote,
getAll,
getNote,
removeNote,
fetchNotes,
saveNotes
};

