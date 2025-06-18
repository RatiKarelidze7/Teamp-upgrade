const express = require('express');
const cors = require('cors');
const connectMongoDatabase = require('./database/mongodb-connect');
// const http = require('http');

const app = express();
// const server = http.createServer(application);

const PORT = 5005;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    connectMongoDatabase();
});