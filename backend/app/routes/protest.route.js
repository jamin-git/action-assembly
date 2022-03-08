const Protest = require('../models/protests.model');

const protestController = require('../controllers/protests.controller');

module.exports = (app) => {
    
    //Used to Create a new protest
    app.post('/protest/createProtest', protestController.createProtest);

    //Used to retrieve all exisiting protests
    app.get('/protest/findAll', protestController.findAll);

    // //Used to retrieve a single Protest with protestName
    app.get('/protest/findOne/:protestName', protestController.findOne);
    
    // //Used to edit a single Protest with protestName
    // app.put('/protest/:protestName', protestController.update);
    
}