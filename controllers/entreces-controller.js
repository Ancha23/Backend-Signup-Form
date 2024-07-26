const getAllUsers = (req, res) => {
    res.status(200).json({ message: "Ver todos os clientes da loja" });
  };
  
  const getUser = (req, res) => {
    const { id } = req.params; 
    const { nome, email } = req.query; 
    
    if (nome) {
        res.status(200).json({
            message: `Buscar cliente por nome: ${nome}`,
        });
    } else if (email) {
        res.status(200).json({
            message: `Buscar cliente por email: ${email}`,
        });
    } else {
        res.status(200).json({
            message: `Ver um cliente específico com ID: ${id}`,
        });
    }
};
  
  const createUser = (req, res) => {
    const { name, email, contacto, dataNascimento, endereco, notas} = req.body
     res.status(200).json({
         message: "Cliente cadastrado com sucesso!", 
         data: {
            name,
            email,
            dataNascimento,
            contacto,
            endereco,
            notas,
        }
    });
  };
  const loginUser = (req, res) => {
    const { name, email, contacto, dataNascimento, endereco, notas} = req.body
     res.status(200).json({
         message: "Cliente cadastrado com sucesso!", 
         data: {
            name,
            email,
            dataNascimento,
            contacto,
            endereco,
            notas,
        }
    });
  };
  
  
  module.exports = { getAllUsers, getUser, loginUser, createUser };
   