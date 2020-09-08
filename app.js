const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('yargs').option({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad para obtener el clima',
		demand: true,
	},
}).argv;

// getLugarLatLng(argv.direccion)
// 	.then((resp) => {
// 		console.log(resp);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const getInfo = async (direccion) => {
	try {
		const info = await getLugarLatLng(direccion);
		return `El clima de ${info.direccion} es de ${info.temp}°C`;
	} catch (error) {
		console.log(error);
	}
};

getInfo(argv.direccion).then((resp) => {
	console.log(resp);
});

// console.log(argv.direccion);
