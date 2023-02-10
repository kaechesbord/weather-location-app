const request = require("request")

const geocode = (adress, callback) => {
    const geocodeURL = "http://api.positionstack.com/v1/forward?access_key=f9d66780ae9dcbb3878365a6372200c1&query="+encodeURIComponent(adress)+"&limit=1"
    
    request({url: geocodeURL, json:true}, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else if (response.body.data === 0) {
                callback("Unable to find location. Try another search.", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                name: response.body.data[0].label
            } )
        }
    })
}

module.exports = geocode