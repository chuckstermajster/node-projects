console.log("starting notes");

var addNote = (title, body) => {
console.log('adding note ', title, body);
};

var getAll = () => {
    console.log('getting all notes');
};

var getNote = (note) => {
    console.log('getting note', note);
};

var removeNote = (note) => {
    console.log('removing note: ', note);
}
module.exports = {
addNote,
getAll,
getNote,
removeNote
};

