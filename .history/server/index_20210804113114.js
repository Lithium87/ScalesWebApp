const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

let db = new sqlite3.Database('./db/Scales.db', err => {
    if(err) console.error(err.message);
    console.log('Connected to Scales DB');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})