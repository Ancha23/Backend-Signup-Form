const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.query;

    if (nome) {
      // Exemplo de busca por nome usando expressão regular (case insensitive)
      const users = await User.find({ name: { $regex: new RegExp(nome, "i") } });
      res.status(200).json(users);
    } else if (email) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      res.status(200).json(user);
    } else {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, contacto, dataNascimento, endereco, notas } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      contacto,
      dataNascimento,
      endereco,
      notas
    });

    await newUser.save();
    res.status(201).json({ message: 'Cliente cadastrado com sucesso!', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  // Implementação do login se necessário
  res.status(501).json({ message: 'Funcionalidade de login não implementada' });
};

module.exports = { getAllUsers, getUser, createUser, loginUser };
