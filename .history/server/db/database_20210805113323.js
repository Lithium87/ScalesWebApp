const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./server/db/Scales.db', err => {
    if(err) console.error(err.message);
    console.log('Connected to Scales DB');
});

module.exports = database;