const express = require('express');// Import express
const router = express.Router() // Make router
const articleController = require('../controllers/articleController'); // Import article Controller
const articleValidator = require('../validators/articleValidator'); // Import article Validator

// IF ACCESSING localhost:3000/article/create WE WILL GO TO CREATE article ENDPOINT
router.post('/create', articleValidator.create, articleController.create);

// IF ACCESSING localhost:3000/article/update WE WILL GO TO UPDATE article ALREADY EXIST ENDPOINT
router.put('/update/:_id', articleValidator.update, articleController.update);

// IF ACCESSING localhost:3000/article/getAll WE WILL GO TO GET ALL article ENDPOINT
router.get('/getAll',  articleController.getAll);

// IF ACCESSING localhost:3000/article/getOne WE WILL GO TO GET ONE article ENDPOINT
router.get('/getOne/:_id', articleValidator.getOne, articleController.getOne);

// IF ACCESSING localhost:3000/article/delete WE WILL GO TO DELETE ONE article ENDPOINT
router.delete('/delete/:_id',articleValidator.delete, articleController.delete);

module.exports = router;