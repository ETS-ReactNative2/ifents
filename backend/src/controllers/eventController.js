const connection = require('../database/connection');
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret';

module.exports = {
    async index(req, res) {
        const eventos = await connection('evento').select('*');
        const eventoss = eventos.map(evento => {
            return {
                ...evento
            }
        });
        return res.json(eventoss)
    },

    async buscar(req, res) {
        const evento = await connection('evento').select('*').where('id', req.params.id);
        return res.json(evento);
    },

    async criar(req, res) {
        const {
            nome,
            local,
            contato,
            tipo,
            data_inicio,
            data_termino,
            hora_inicio,
            hora_termino
        } = req.body

        const userData = {
            nome,
            local,
            contato,
            tipo,
            data_inicio,
            data_termino,
            hora_inicio,
            hora_termino
        }

        const evento = await connection('evento').select('*').where('nome', req.body.nome).first().then(
            async evento => {
                if (evento) {
                    return res.status(400).json({ error: 'Evento já existente' })
                } else {
                    await connection('evento').insert(userData)
                    return res.json({ message: 'Evento criado com sucesso.' })
                }
            })
    },

    async atualizar(req, res) {
        const userData = {
            nome: req.body.nome,
            local: req.body.local,
            contato: req.body.contato,
            tipo: req.body.tipo,
            data_inicio: req.body.data_inicio,
            data_termino: req.body.data_termino,
            hora_inicio: req.body.hora_inicio,
            hora_termino: req.body.hora_termino
        };

        const evento = await connection('evento').update({ nome: userData.nome, local: userData.local, contato: userData.contato, tipo: userData.tipo, data_inicio: userData.data_inicio, data_termino: userData.data_termino, hora_inicio: userData.hora_inicio, hora_termino: userData.hora_termino, })
            .where('id', req.params.id).then(async evento => {
                if (evento === 0) {
                    return res.status(400).json({ error: 'Não foi possível atualizar.' })
                } else {
                    await connection('evento').update(userData).where('id', req.params.id)
                    return res.json({ message: 'Evento atualizado com sucesso.' })
                }
            })
    },

    async deletar(req, res) {
        const evento = await connection('evento').select('*').where('id', req.params.id).first().then(
            async evento => {
                if (evento) {
                    await connection('evento').where('id', req.params.id).del();
                    return res.json({ messagem: 'Evento deletado com sucesso.' });
                } else {
                    return res.status(400).json({ error: 'Evento não existente' });
                }
            })
    },
<<<<<<< HEAD

    async likeMore(req, res) {
        const evento = await connection('evento').select('*').where('id', req.params.id).first().then(
            async evento => {
                if (evento) {
                    const newLikes = evento.likes === null ? 1 : Number(evento.likes) + 1
                    await connection('evento').where('id', req.params.id).update({ likes: newLikes });
                    return res.json({ messagem: 'Evento curtido com sucesso.' });
                } else {
                    return res.status(400).json({ error: 'Evento não existente' });
                }
            })
    },

    async likeLess(req, res) {
        const evento = await connection('evento').select('*').where('id', req.params.id).first().then(
            async evento => {
                if (evento) {
                    const newLikes = evento.likes === null ? 1 : Number(evento.likes) - 1
                    await connection('evento').where('id', req.params.id).update({ likes: newLikes });
                    return res.json({ messagem: 'Evento descurtido com sucesso.' });
                } else {
                    return res.status(400).json({ error: 'Evento não existente' });
                }
            })
    },
=======
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
}