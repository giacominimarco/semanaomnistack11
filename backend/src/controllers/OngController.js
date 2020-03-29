const crypto = require('crypto'); //gerar um texto aleatório
const connection = require('../database/connection');

module.exports = {
    // ASYNC => define uma função asincrona
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    // Criando as ONGS 
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // gerar 4 algarismos aleatóriamente
        await connection('ongs').insert({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        })
        return response.json({id}); // passando o id para o usuário
    }
};