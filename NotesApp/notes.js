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
    return fetchNotes();
};

var getNote = (title) => {
    console.log('getting note');
    var notes = fetchNotes();    
    try{
        var selectedNote = notes.filter((selectedNote) => title === selectedNote.title);
        return selectedNote[0];
    }
    catch(e) {
        return false;
    }    
};

var removeNote = (noteToDelete) => {
    var currentNotes = fetchNotes();
    var notesAfterDelete = currentNotes.filter((note) => note.title !== noteToDelete );
    saveNotes(notesAfterDelete);

    return currentNotes.length !== notesAfterDelete.length;
}

var logNote = (note) => {
    debugger;
    console.log('---')
    console.log(`Title: ${note.title} Text: ${note.body}`);
};
module.exports = {
addNote,
getAll,
getNote,
removeNote,
fetchNotes,
saveNotes,
logNote
};

