const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5) // limite de 5 casos por pagina
            .offset((page - 1) * 5) // ira começar da primeira pagina
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]); // campos desejados
    
        response.header('X-Total-Count', count['count(*)']); // Fazer o total aparecer no Header

        return response.json(incidents);
    },

    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, 
            description, 
            value,
            ong_id,
        });
        return response.json({ id });
    },
    // deletado os incidentes
    async delite(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;
        
        const incident = await connection('incidents')
            .where('id', id) //id do incidente
            .select('ong_id') //id da ong
            .first(); //Retorna um unico elemento no select

        // Retorna um erro caso a ong estiver tentando apagar um insidente que não foi ela que criou
        if (incident.ong_id != ong_id){
            return response.this.status(401).json({ error: 'Operation not permitted.' });
        }
        await connection('incidents').where('id', id).delete(); // efetua o delite
        
        return response.status(204).send(); //retornando o status sem corpo
    }
};