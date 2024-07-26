const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Base de dados conectada: ${connect.connection.host}`);
    } catch (error) {
        console.error('Erro ao conectar à base de dados:', error);
        process.exit(1); // Encerrar o processo com código de erro
    }
};

module.exports = connectDB;
