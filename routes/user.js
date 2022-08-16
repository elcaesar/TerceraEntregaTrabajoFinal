const express = require("express");

const usersController = require("../controllers/user");

const router = express.Router();

router.get("/", usersController.getUsers);  // list users
router.post("/", usersController.saveUser); // add user
router.post('/login', 
    passport.authenticate('login', {failureRedirect:'/api/usuarios/fLogin'}), 
    userController.loginPost)
    
router.post('/signup', 
    passport.authenticate('register', {failureRedirect:'/api/usuarios/fRegister'}), 
    userController.signupPost)
    
router.get('/fRegister', userController.signupError)
router.get('/fLogin', userController.loginError)
router.get('/failLogin', userController.failLoginDisplay)
router.get('/failSignup', userController.failSignupDisplay)
router.post('/userUpdate', userController.userUpdate)
router.post('/userImageUpload', userController.userImageUpload)


module.exports = router;
