var express = require('express');
var router = express.Router();
var information = require("../controllers/informationController.js");

// Get all 
router.get('/', function(req, res) {
  information.list(req, res);
});

// Get single  by id
router.get('/show/:id', function(req, res) {
  information.show(req, res);
});

// Create 
router.get('/create', function(req, res) {
  information.create(req, res);
});

// Save 
router.post('/save', function(req, res) {
  information.save(req, res);
});

// Edit 
router.get('/edit/:id', function(req, res) {
  information.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  information.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  information.delete(req, res);
});

module.exports = router;
