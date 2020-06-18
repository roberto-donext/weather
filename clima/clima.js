const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const instance = axios.create({
        baseURL: 'https://community-open-weather-map.p.rapidapi.com',
        headers: {
            'x-rapidapi-key': '027f002249msh1cdb3bca6ff2d15p148ae1jsn4aff17c029a6',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'useQueryString': true
        }
    });

    let respuesta = await instance.get('/weather', {
        params: {
            lat: latitud,
            lon: longitud
        }
    })


    return respuesta.data.main.temp;

}


module.exports = {
    getClima
}