const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	role:{
		type:String
	},

	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	password: {
		type: String,
	}
});

module.exports = { UsersSchema };
