console.log("starting app");

const fs = require('fs');
const os = require('os');
import './notes';
fs.appendFileSync('greet.txt', `Hi ${os.userInfo().username} !`);

