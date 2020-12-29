const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const UploadController = require('./app/controllers/UploadController');

const routes = new Router();

routes.post('/uploads', multer(multerConfig).single('file'), UploadController.store);
routes.get('/uploads',  UploadController.index);
routes.delete('/uploads/:id', UploadController.destroy);


module.exports = routes;