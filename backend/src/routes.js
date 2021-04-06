const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const userController = require('./controllers/userController')
const eventController = require('./controllers/eventController')

const routes = express.Router();
const upload = multer(multerConfig);

//rotas usuario
routes.post('/usuario/create', userController.criar)
routes.post('/usuario/login', userController.autenticar)

routes.get('/usuario/search/:id', userController.buscar)
routes.get('/usuario', userController.index)

routes.put('/usuario/foto/:id', upload.single('foto'), userController.foto)
routes.put('/usuario/adm/:id', userController.adm)
routes.put('/usuario/update/:id', userController.atualizar)


//rotas evento
routes.post('/evento/create', eventController.criar)

routes.get('/evento', eventController.index)
routes.get('/evento/search/:id', eventController.buscar)

routes.put('/evento/update/:id', eventController.atualizar)
routes.put('/evento/like/:id', eventController.likeMore)
routes.put('/evento/unlike/:id', eventController.likeLess)

routes.delete('/evento/delete/:id', eventController.deletar)

module.exports = routes