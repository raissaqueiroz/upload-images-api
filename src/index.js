const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

/**
 * Database Setup
 **/
mongoose.connect('mongodb+srv://adminfreelas:tptU0C9UXaasiRYmdFl7B372JewDWGKf@cluster0-xxgja.mongodb.net/upload-api?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, "..", "tmp", "uploads")));

app.use(routes);

app.listen(3333);