const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min:3 }).withMessage('First Name must be of at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be of at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be of length at least 3'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate number must be of length at least 3'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Vehicle capacity must be of length at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],
    captainController.registerCaptain
)



module.exports = router;