const mongoose = require('mongoose');

const mongodbconfig = 'mongodb+srv://Adimin:Adimin@cluster0.ysnxl.mongodb.net/annotations?retryWrites=true&w=majority&appName=Cluster0';


const connection = mongoose.connect(mongodbconfig)
    .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = connection;
