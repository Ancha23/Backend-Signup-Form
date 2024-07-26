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
        const users = await User.find({ name: { $regex: new RegExp(nome, "i") } });
  
        if (users.length === 0) {
          return res.status(404).json({ message: 'Nenhum usuário encontrado com esse nome.' });
        }
  

        res.status(200).json({
          message: 'Usuário encontrado com sucesso!',
          users: users.map(user => ({
            id: user._id,
            name: user.name,
            email: user.email
          }))
        });
    } else if (email) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Utilizador  não encontrado' });
      }
      res.status(200).json(user);
    } else {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'Utilizador não encontrado' });
      }
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
    const { name, email, password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) {
        return res.status(400).json({ error: 'As senhas não coincidem.' });
    }

    try {
        const newUser = new User({
            name,
            email,
            password,
            passwordConfirmation
        });

        await newUser.save();

        res.status(201).json({
            message: 'Usuário criado com sucesso!',
            user: {
                id: newUser._id, 
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
      
        res.status(500).json({ error: 'Erro ao criar o usuário: ' + error.message });
    }
};
  const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'O Utilizador nao foi encontrado!' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'O Password introduzido e invalido' });
        }

        res.status(200).json({ message: 'Login bem-sucedido', user: { id: user._id, email: user.email } });
    } catch (error) {
       
        res.status(500).json({ message: 'Erro ao processar o login', error: error.message });
    }
};

module.exports = { getAllUsers, getUser, createUser, loginUser };
