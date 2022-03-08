const User = require('../models/users.model')

const userController = require('../controllers/users.controller');

module.exports = (app) => {
    // Used to Register an account
    app.post('/account/register', userController.registerAccount);

    // Used to login to an account
    app.post('/account/login', userController.login);

    // Used to update the user's protests by adding a protest
    app.post('/account/addprotest', userController.addProtest);

    // Used to update the user's protests by removing a protest
    app.post('/account/removeprotest', userController.removeProtest);

    // Used to get a user based on email
    app.get('/user/:email', userController.getUserByEmail);
};