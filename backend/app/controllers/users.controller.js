const User = require('../models/users.model')
const userSession = require('../models/userSessions.model')

const getUserByEmail = (req, res) => {
    if (!req.params.email) {
        return res.status(400).send({
            success: false,
            message: "No user by that email"
        })
    }

    User.findOne({
        email: req.params.email
    }).then(user => {
        return res.status(200).send(user)
    }).catch(err => {
        return res.status(500).send({
            success: false,
            message: `some error occurred while trying to retrieve user of email ${req.params.email}`
        })
    })
}

const registerAccount = (req, res, next) => {
        
    const { body } = req;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const password = body.password;
    let email = body.email;
    
    // Checking for errors in filling out form
    if (!firstName) {
        return res.send({
            success: false,
            message: 'Error: First name cannot be blank.'
        });
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Error: last name cannot be blank.'
        });
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        });
    }
    
    email = email.toLowerCase();

    // Verify that email does not already exist
    User.find({
        email: email
    }, (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Server Error: Issue in checking previous emails'
            });
        } else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Account already exists'
            });
        }


        // Creating and saving the new user object
        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.protests = [];
        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Server Error: Unable to save account'
                });
            }
            return res.send({
                success: true,
                message: 'Successful Sign Up!'
            });
        });
    });
}

const login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        });
    }

    email.toLowerCase()


    User.findOne({
        email: email,
    }).then(user => {
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Invalid Password'
            });
        } else {
            res.status(200).send({
                success: true,
                fname: user.firstName,
                lname: user.lastName
            })
            // const session = new userSession();
            // session.userId = user._id;
            // session.save((err, doc) => {
            //     if (err) {
            //         return res.send({
            //             success: false,
            //             message: 'Server Error with session'
            //         });
            //     }
            //     return res.send({
            //         success: true,
            //         message: 'Valid Login',
            //         token: doc._id
            //     });
            // });
        }
    }).catch(err => {
        return res.send({
            success: false,
            message: 'Server Error with comparing emails'
        });
    });
}

const addProtest = (req, res, next) => {
    let email = req.body.email;
    let protest = req.body.protest;


    // User.updateOne({
    //     email: email
    // }).then(user => {
    //     user.protests: [protest]
    // })

    User.updateOne({
        email: email,
    }, {
        $push: {
            protests: protest
        }
    }).then(user => {
        return res.send({
            success: true,
            message: 'Success! Check db'
        });
    }).catch(err => {
        return res.send({
            success: false,
            message: 'Error Occurred'
        });
    });
}

const removeProtest = (req, res) => {
    let email = req.body.email;
    let protest = req.body.protest;

    User.updateOne({
        email: email,
    }, {
        $pull: {
            protests: protest
        }
    }).then(user => {
        return res.send({
            success: true,
            message: 'Success! Check db'
        });
    }).catch(err => {
        return res.send({
            success: false,
            message: 'Error Occurred'
        });
    });
}

// Exporting the controller methods
module.exports = {
    registerAccount,
    login,
    addProtest,
    removeProtest,
    getUserByEmail
}