'use strict'

var express = require('express');
var projectController = require('../controllers/project');

var router = express.Router();

//middleware
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.get('/home', projectController.home);
router.get('/test', projectController.test);
router.post('/save-project',projectController.saveProject);
router.get('/project/:id?',projectController.getProject);
router.get('/projects',projectController.getProjects);
router.put('/project/:id',projectController.updateProject);
router.delete('/project/:id',projectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware,projectController.uploadImage);
router.get('/get-image/:image',projectController.getImageFile);

module.exports = router;
