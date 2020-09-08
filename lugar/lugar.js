const axios = require('axios');

const getLugarLatLng = async (city) => {
	const apiKey = '85f7be4eb1fa066e09b234592e239c39';
	const encodedUrl = encodeURI(city);
	// console.log(encodedUrl);

	try {
		const resp = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${apiKey}&units=metric`
		);

		const data = resp.data;
		const direccion = data.name;
		const temp = data.main.temp;
		const lat = data.coord.lat;
		const lng = data.coord.lon;
		return {
			direccion,
			temp,
			lat,
			lng,
		};
	} catch (error) {
		throw new Error('City not found ERROR 404');
	}

	// if (resp.data.message) {
	// 	return;
	// } else {

	// }
};

module.exports = {
	getLugarLatLng,
};
