// The tutorial I am following can be found here https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
// I have only set up the basics for now, I will work on adding MongoDB later

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const argv = require('minimist')(process.argv.slice(2));

// create express app
const app = express();
const subpath = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse requests of content-type - application/json
// app.use(bodyParser());
app.use("/v1", subpath);

app.use(function(req, res, next) {
    res.header('Content-Type', 'text/plain');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Configuring the database
const dbConfig = require('./config/databaseconfig.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//Get the default connection
var db = mongoose.connection;

// I made my own routine to test things out
app.get('/test', (req, res) => {
    res.json({"message": "If you are seeing this then the test was successful :)"});
});

/* Add in my routes here */
// Require routes
// require('./app/routes/SOMETHING.routes.js')(app);

require('./app/routes/signin.route.js')(app);
require('./app/routes/protest.route.js')(app);

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
