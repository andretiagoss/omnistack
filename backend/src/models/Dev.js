const { Schema, model } = require('mongoose');

// Criação da estrutura da classe Dev.
const DevSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String, //por não ser obrigatorio pode passar o tipo direto.
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
}, {
    timestamps: true //cria automaticamente as colunas createdAt e updateAt 
});

// exporta o model para disponibilizar pra quem precisar usar
module.exports = model('Dev', DevSchema);