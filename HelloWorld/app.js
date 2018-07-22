console.log("starting app");

const fs = require('fs');
const os = require('os');

fs.appendFileSync('greet.txt', `Hi ${os.userInfo().username} !`);

