const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const scaleRouter = require('../routes/scaleRoutes');
const measurementsRouter = require('../routes/measurementsRoutes');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.use('/api/scales', scaleRouter);
app.use('/api/measurements', measurementsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})