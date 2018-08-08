const request = require("request");

getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2c13a06d7801cba9097b3b21ecc8c390/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature               
            });
        }
        else {
            callback('unable to fetch the data');
        }    
    });
};

module.exports = {
    getWeather
}
