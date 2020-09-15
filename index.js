const express = require('express');
const path = require('path');

//set up the Express app
const app = express();

//Parse incoming req data
app.use(express.json());

// Routes
app.get( "/", (req, res) => {
    res.json({data: "Hi Checking Route"});
});
app.get( "/example1", (req, res) => {
    res.json({data: "Hi Checking Route__1"});
});

// 404 Route
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

//listen
const PORT = 3000;
app.listen(PORT, console.log(` Server is running at ${PORT}`));
