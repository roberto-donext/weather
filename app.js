const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');
const { argv } = require('yargs');

const arvg = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ciudad de la que se desea obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    try {
        const lugarFunc = await lugar.getLugarLatLon(direccion);
        const climaFunc = await clima.getClima(lugarFunc.latitud, lugarFunc.longitud)
        return `El clima de ${direccion} es de ${climaFunc}`
    } catch (error) {
        return `No se pudo determinar el clima  de ${direccion} : ${error}`
    }





    //el clima de tal lugar es de ...
    //no se pudo determinar el cilma de ....
}


getInfo(argv.direccion).then(response => console.log(response)).catch(err => console.log(`Error : ${err}`));




/*
lugar.getLugarLatLon(arvg.direccion).then(response => {
    clima.getClima(response.latitud, response.lontidud).then(temp => console.log(temp))
}).catch(err => console.log(err))
*/