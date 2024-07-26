const mongoose = require('mongoose');

// Definição do esquema do usuário
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConfirmation: {
    type: String,
    required: true
  }
});

// Criação do modelo
const User = mongoose.model('User', userSchema);

module.exports = User;