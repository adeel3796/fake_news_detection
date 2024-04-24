const mongoose = require('mongoose');

// Importing the schemas for Admins, Teams, and Users
const { UsersSchema } = require('./User');

// Defining models for the schemas
const models = {
	Users: mongoose.model('users', UsersSchema), // Model for Users collection
};

module.exports = models;
