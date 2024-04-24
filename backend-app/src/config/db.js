const mongoose = require('mongoose');
const config = require('./config');

const {
	server: { mongoHost, mongoPort, db },
} = config;

const mongo_url = `mongodb://${mongoHost}:${mongoPort}/${db}`;
console.log(mongo_url, db);

//Making MongoDB Connection using mongoose
exports.connect = () => {
	mongoose
		.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			console.log('mongo database chal gya ee shera');
		})
		.catch((error) => {
			console.log('Mongo connection failed. exiting now...');
			console.error(error);
			process.exit(1);
		});
};
