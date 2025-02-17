// const captainController = require('../controllers/captain.controller');
// const express = require('express');
// const router = express.Router();
// const { body } = require("express-validator");
// const authMiddleware = require('../middlewares/auth.middleware');


// router.post('/register', [
//     body('email').isEmail().withMessage('Invalid Email'),
//     body('fullname.firstname').isLength({ min:3 }).withMessage('First Name must be of at least 3 characters long'),
//     body('password').isLength({ min: 6 }).withMessage('Password must be of at least 6 characters long'),
//     body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be of length at least 3'),
//     body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate number must be of length at least 3'),
//     body('vehicle.capacity').isLength({ min: 1 }).withMessage('Vehicle capacity must be of length at least 1'),
//     body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
// ],
//     captainController.registerCaptain
// )


// router.post('/login', [
//     body('email').isEmail().withMessage('Invalid Email'),
//     body('password').isLength({ min:6 }).withMessage('Password must be of at least 6 character long'),
// ],
//     captainController.loginCaptain
// )


// router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

// router.get('/logout', captainController.logoutCaptain);


// module.exports = router;

const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);


module.exports = router;