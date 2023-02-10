const request = require("request")

const forecast = (lat,lon, callback) => {
    const forecastURL = "http://api.weatherstack.com/current?access_key=2fbcf7b8d07be523870e6c6c4ddeae60&query=" + lat + "," + lon + "&units = f"
    
    request({url: forecastURL, json:true}, (error, response) => {
        console.log(response)
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
                callback("Please provide proper coordinates.", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data.location.lat,
                longitude: response.body.data.location.lon,
                temperature: response.body.data.current.temperature,
            } )
        }
    })
}

module.exports = forecast