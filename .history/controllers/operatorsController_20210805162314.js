const db = require('../server/db/database');

exports.getAllOperators = (req, res) => {
    let sql = `SELECT operator_id id, zveno_id zveno, operator_name name
    FROM Operators`;

    let params = [];

    db.all(sql, params, (err, rows) => {
        if(err) return res.status(400).json({error: err.message});
        res.json({
            message: 'success',
            data: rows
        })
    })
}