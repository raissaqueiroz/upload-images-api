const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

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

const allowedOrigins = [
    'http://localhost:3000',
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg =
                'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';

            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
}));

app.use(routes);

app.listen(3333);