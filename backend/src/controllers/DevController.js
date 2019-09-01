const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        // desistruturação para obter o user do headers
        const { user } = req.headers;

        // obtem a instancia do usuario logado no banco de dados.
        const loggedDev = await Dev.findById(user);

        // efetua um filtro no banco de dados com os seguintes filtros.
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } }, //obtem todos os usuários que o ID não seja igual ao ID do usuario logado. (ne = not equal)
                { _id: { $nin: loggedDev.likes } }, //obtem todos usuários que o ID não esteja na lista de usuários que o usuário logado deu like. (nin = not in)  
                { _id: { $nin: loggedDev.dislikes } } //obtem todos usuários que o ID não esteja na lista de usuários que o usuário logado deu dislike.
            ]
        })

        return res.json(users);
    },

    async store(req, res){

        //desistruturação do objeto body para obter a propriedade username.
        const { username } = req.body;
        console.log('username: ' + username);

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        //desistruturação do objeto data para obter as propriedades.
        const { name, bio, avatar_url: avatar} = response.data;

        //criação do documento e persistência na base de dados mongoDB, passando as propriedades obtidas.
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};