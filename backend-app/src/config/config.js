const config = {
	server: {
		mongoHost: process.env.MONGO_DB_HOST || '127.0.0.1',
		mongoPort: parseInt(process.env.MONGO_DB_PORT || '27017'),
		db: process.env.MONGO_DB || 'Users',
		port: process.env.PORT || '4000',
		jwtSecretKey: process.env.JWT_SECRET,
		stripeSecret: process.env.STRIPE_SECRET_KEY,
	},
};

module.exports = config;
