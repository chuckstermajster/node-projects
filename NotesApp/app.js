


const notes = require('./notes');
const yargs = require('yargs');
var titleOptions = {
    describe: 'Title of a note',
        demand: true,
        alias: 't'
}
var bodyOptions = {
    describe: 'Body of a note',
    demand: true,
    alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'list all notes')
.command('read', 'read a note', {title: titleOptions})
.command('remove', 'remove a note', {title: titleOptions})
.help()
.argv;
var command = argv._[0];

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('note created!');
        notes.logNote(note);
        
    } else {caches
        console.log('title taken');
    }

} else if (command === 'list'){
   var allNotes =  notes.getAll();
   console.log(`Printing ${allNotes.length} note(s)`);
   allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){    
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    } else {
        console.log("note not found");
    }

} else if (command === 'remove'){    
   var noteRemoved = notes.removeNote(argv.title);

   var message = noteRemoved? `you removed the note of tite: ${argv.title}`: "note not found!";
   console.log(message); 
}
 else {
    console.log('command not recognized');
}

