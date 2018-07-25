console.log('starting app');

const lodash = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command ', command);
console.log('Process ', process.argv);
console.log('Yargs ', argv);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('note created');
        console.log('---')
        console.log(`Title: ${note.title} Text: ${note.body}`);
    } else {
        console.log('title taken');
    }

} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title)
} else if (command === 'remove'){
    notes.removeNote(argv.title);
}
 else {
    console.log('command not recognized');
}

