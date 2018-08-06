const request = require('request');
const yargs = require('yargs');
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

var encodedAdress = encodeURIComponent(argv.a);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=warszawska%2023%2041200%20Sosnowiec`,
    json: true
}, (error, response, body) => {
console.log(body.results[0].formatted_address);
console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});