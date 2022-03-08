const Protest = require('../models/protests.model')

// Create and Save a new protest
exports.createProtest = (req, res) => {
    // Validate request
    if(!req.body.protestName || !req.body.description || !req.body.address || !req.body.hashtag || !req.body.date) {
        return res.status(400).send({
            message: "Protest content can not be empty"
        });
    }

    // Create a protest
    const protest = new Protest({
        protestName: req.body.protestName, 
        description: req.body.description,
        address: req.body.address,
        hashtag: req.body.hashtag.split('#'),
        date: req.body.date
    });

    // Save Protest in the database
    protest.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the protests."
        });
    });
};

// Retrieve and return all protests from the database.
exports.findAll = (req, res) => {
    Protest.find()
    .then(protests => {
        res.send(protests);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving protests."
        });
    });
};

// Retrieve a protest by its name
exports.findOne = (req, res) => {
    Protest.findOne({protestName: req.params.protestName})
    .then(protest => {
        res.status(200).send(protest);
    }).catch(err => {
        res.status(500).send({
            message: err.message || `Some error occurred while retrieving protest of name ${req.params.protestName}.`
        });
    })
}
// const createProtest = (req, res, next) => {
    
//     const { body } = req;
//     const protestName = body.protestName;
//     const description = body.description;
//     const hashtag = body.hashtag;
//     const date = body.date;
//     const address = body.address;

//     // Checking for errors in entering information
//     if (!protestName) {
//         return res.status(500).send({success:false, error: "ProtestName cannot be blank"
//         });
//     if (!description) {
//         return res.status(500).send({success:false, error: "Description cannot be blank"
//         });
//     if (!hashtag) {
//         return res.status(500).send({success:false, error: "Hashtag cannot be blank"
//         });
//     if (!date) {
//         return res.status(500).send({success:false, error: "Date cannot be blank"
//         });
//     if (!address) {
//         return res.status(500).send({success:false, error: "Address cannot be blank"
//         });
//     }

//     protestName = protestName.toLowerCase();

//     // Verify that protestName does not already exist
//     Protest.find({
//         protestName: protestName
//     }, (err, previousProtests) => {
//         if (err) {
//             return res.status(500).send({
//                 success:false, 
//                 error: "Server Error: Issue in checking previous protestName"           
//             });
//         } else if (previousProtests.length > 0) {
//             return res.status(400).send({
//                 success:false, error: "protestName already exists"
//             });
//         }

//         //  Create a new protest
//         const newProtest = new Protest();
//         newProtest.protestName = protestName;
//         newProtest.description = description;
//         newProtest.hashtag = hashtag;
//         newProtest.date = date;
//         newProtest.address = address;
        
//         newProtest.save((err, protest) => {
//             if (err) {
//                 return res.status(500).send({
//                     success:false, 
//                     error: "Error: Cannot save this protest"
//                 });
//             }
//             return res.status(201).send({
//                 success:true, 
//                 message: "Successfully create a new Protest"
//             });
//         });
//     });
// }

// const getProtest = (req, res, next) => {
//     const { body } = req;
//     const protestName = body.protestName;

// }


// Export the controller methods
// module.exports = {
//     createProtest
// }