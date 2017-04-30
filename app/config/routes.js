var express = require('express');
var router = express.Router();
var serveViewController = require('../controllers/serveView.js');
var userController = require('../controllers/users.js');
var courseController = require('../controllers/courses.js');
var moduleController = require('../controllers/modules.js');


router.route('/')
	.get(serveViewController.index);
	
// Interact with users
router.route('/api/users')
	.get(userController.index)
  .post(userController.create);

router.route('/api/users/:id')
  .get(userController.show)
  .put(userController.update)
  .delete(userController.delete);

// Interact with courses
router.route('/api/courses')
  .get(courseController.index)
  .post(courseController.create);

router.route('/api/modules')
  .post(moduleController.create)
  .get(moduleController.index);
  

// 
router.route('/api/courses/:courseType')
  .get(courseController.show);

module.exports = router;