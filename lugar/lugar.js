const axios = require('axios');


const getLugarLatLon = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
        headers: {
            'x-rapidapi-key': '027f002249msh1cdb3bca6ff2d15p148ae1jsn4aff17c029a6',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'useQueryString': true
        }
    });

    const respuesta = await instance.get('/cities', {
        params: {
            countryIds: 'es',
            namePrefix: encodedUrl,
            types: 'CITY'
        }
    })

    if (respuesta.data.data.length === 0) {

        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = respuesta.data.data[0]
    const ciudad = data.name
    const latitud = data.latitude
    const longitud = data.longitude


    return {
        ciudad,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLon
}