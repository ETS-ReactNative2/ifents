const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

process.env.SECRET_KEY = 'secret';

module.exports = {
    async index(req, res) {
        const usuarios = await connection('usuario').select('*');
        const usuarioss = usuarios.map(usuario => {
            return {
                ...usuario, foto: `http://localhost:3301/uploads/${usuario.foto}`
            }
        });
        return res.json(usuarioss)
    },

    async buscar(req, res) {
        const usuario = await connection('usuario').select('*').where('id', req.params.id);
        return res.json(usuario);
    },

    async criar(req, res) {
        const {
            nome,
            email,
            ra,
            senha
        } = req.body

        const userData = {
            nome,
            email,
            ra,
            senha,
        }

        const usuario = await connection('usuario').select('*').where('ra', req.body.ra).first().then(
            async usuario => {
                if (usuario) {
                    return res.status(400).json({ error: 'Usuário ja existente' })
                } else {
                    const senha = req.body.senha
                    const hash = bcrypt.hashSync(userData.senha, 10);
                    userData.senha = hash;
                    await connection('usuario').insert(userData)
                    return res.json(usuario)
                }
            })
    },

    async autenticar(req, res) {
        const usuario = await connection('usuario').select('*').where('ra', req.body.ra).first()
            .then(usuario => {
                if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
                    let token = jwt.sign(usuario, process.env.SECRET_KEY, {
                        expiresIn: 42075360
                    });
                    res.status(200).json({ token: token, usuario: usuario })
                } else {
                    res.status(400).send('Wrong password')
                }
            })
            .catch(err => {
                res.status(400).send('error:' + err)
            })
    },

    async atualizar(req, res) {
        const userData = {
            email: req.body.email,
            senha: req.body.senha,
        };
        const senha = req.body.senha
        const hash = bcrypt.hashSync(userData.senha, 10);
        userData.senha = hash;

        const usuario = await connection('usuario').update({ email: userData.email, senha: userData.senha })
            .where('id', req.params.id).then(async usuario => {
                if (usuario === 0) {
                    return res.status(400).json({ error: 'Não foi possível atualizar.' })
                } else {
                    await connection('usuario').update(userData).where('id', req.params.id)
                    return res.json({ message: 'Usuario atualizado com sucesso.' })
                }
            })
    },

    async foto(req, res) {
        const { foto } = req.file.filename

        const usuario = await connection('usuario').update({ foto: req.file.filename })
            .where('id', req.params.id).then(async usuario => {
                if (usuario === 0) {
                    return res.status(400).json({ error: 'Não foi possível enviar a foto.' })
                } else {
                    return res.json({ message: 'Foto upada com sucesso' })
                }
            })
    },

    async adm(req, res) {
        const usuario = await connection('usuario').update({ adm: true }).where('id', req.params.id);
        return res.json({ message: 'O usuário passou a ser um Administrador' });
    }
}