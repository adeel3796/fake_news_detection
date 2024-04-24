const models = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');ss
dotenv.config();
const Register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new models.Users({ name, email, password: hashedPassword });
		await user.save();
		res.status(201).json('User registered successfully');
	} catch (err) {
		res.status(500).json({ error: err });
	}
};
const Login = async (req, res) => {
	try {
		const { email, password } = req.body;
	
		const user = await models.Users.findOne({ email }).lean();
		if (!user) {
			return res.status(404).json('User not found');
		}
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return res.status(401).json('Invalid password');
		}
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
		
		res.status(200).json({ token,user });
	} catch (err) {
		console.log(err)
		res.status(500).json('Error logging in');
	}
};

const UserController = {
	Login: Login,
	Register: Register,
};

module.exports = UserController;

