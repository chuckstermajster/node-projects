const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(results.address);        
//     }
// });

weather.getWeather(50.2862638, 19.1040791, (errorMessage, weatherResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`It is currently ${weatherResults.temperature} but it will fell like ${weatherResults.apparentTemperature}`);
    }
});



