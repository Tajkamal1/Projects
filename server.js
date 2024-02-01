const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import controllers
const checkEmailController = require('./src/controllers/auth/checkEmailController');
const resetPasswordController = require('./src/controllers/auth/resetPasswordController');
const loginController = require('./src/controllers/auth/loginController');
const signupController = require('./src/controllers/auth/signupController');

// Import models
const SignUp = require('./src/models/signUpModel');
const LoginData = require('./src/models/loginDataModel');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://taj:taj@cluster0.wzantar.mongodb.net/Login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Check if the email exists in the SignUp collection
app.post('/api/checkEmail', checkEmailController);

// Additional route for handling password reset
app.post('/api/resetPassword', resetPasswordController);

// Login route
app.post('/api/login', loginController);

// Signup route
app.post('/api/signup', signupController);

app.get('/', (req, res) => {
  res.send('Hello, your server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
