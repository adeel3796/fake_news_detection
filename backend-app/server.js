// app.js
const express = require('express');
const { connect } = require('./src/config/db');
const userRoutes = require('./src/routes/user_routes');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Add this line

const app = express();

app.use(cors());
// Connect to MongoDB
connect();

app.use(express.json());

// Routes
app.use('/api/user', userRoutes);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Replace with your Gmail email
    pass: 'your_email_password', // Replace with your Gmail password
  },
});

app.post('/api/user/register', async (req, res) => {
  try {
	  const {
		firstName,
		lastName,
		email,
		password,
		check,
	  } = req.body;
  
	  // Validate input data
	  if (!firstName || !lastName || !email || !password) {
		return res.status(400).json({ error: 'All fields are required' });
	  }
  
	  // Hash password (using bcrypt for example)
	  const hashedPassword = await bcrypt.hash(password, 10);
  
	  // Create user object
	  const user = {
		firstName,
		lastName,
		email,
		password: hashedPassword,
		check,
	  };
	  const mailOptions = {
		from: 'your_email@gmail.com', // Replace with your Gmail email
		to: 'Shoaibsardar@gmail.com', // Replace with your target email
		subject: 'New Contact Us Message',
		text: `You received a new message from ${formData.name} (${formData.email}): ${formData.message}`,
	  };
  
	  transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
		  console.error('Error sending email:', error);
		} else {
		  console.log('Email sent:', info.response);
		}
	  });
  
	  return res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
	  console.error('Error in user registration:', error);
	  // Send error response
	  return res.status(500).json({ error: 'Internal Server Error' });
	}
  });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
