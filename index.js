const express = require('express');
const path = require('path');
const serverless = require("serverless-http");
const router = express.Router();

//set up the Express app
const app = express();

//Parse incoming req data
app.use(express.json());

// Routes
router.get( "/", (req, res) => {
    res.json({data: "Hi Checking Route"});
});

router.get( "/example1", (req, res) => {
    res.json({data: "Hi Checking Route__1"});
});

// 404 Route
router.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname + '/404.html'));
});


//listen
app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);