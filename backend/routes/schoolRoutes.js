const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Routes for CRUD operations on schools
router.get('/', schoolController.getAllSchools);
router.get('/:id', schoolController.getSchoolById);
router.post('/', schoolController.createSchool);
router.put('/:id', schoolController.updateSchool);
router.delete('/:id', schoolController.deleteSchool);

module.exports = router;
