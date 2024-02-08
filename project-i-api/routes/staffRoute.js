// routes/staffRoutes.js
const express = require('express');
const staffController = require('../controllers/staffControllers');

const router = express.Router();

router.post('/create-staff', staffController.createStaff);
router.get('/get-staff', staffController.getStaff);
router.post('/search', staffController.searchStaff);

module.exports = router;
