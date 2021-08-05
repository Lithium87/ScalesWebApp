const db = require('../server/db/database');

exports.getAllMeasurements = (req, res) => {
  let sql = `SELECT scale_id, grid_id id, grid_name name
    operator_name, measurement_time, measurement_date, weight
    FROM Measurements`;

  let params = [];

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({error: err.message});
    res.json({
      message: 'success',
      data: rows,
    });
  });
};

exports.getMeasurementsPerScale = (req, res) => {
  let sql = `SELECT measurement_id, scale_id, grid_name, operator_name,
    measurement_time, measurement_date,
    weight, density, mixer, byrkalo, penetration, status
    FROM Measurements
    WHERE scale_id = ?`;

  let params = [req.params.scale_id];

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({error: err.message});
    res.json({
      message: 'success',
      data: rows,
    });
  });
};

exports.filterMeasurements = (req, res) => {
  let fromDate = req.body.filters.fromDate;
  let toDate = req.body.filters.toDate;
  let material = req.body.filters.material;
  let operator = req.body.filters.operator;

  let data = {
    fromDate,
    toDate,
    material,
    operator,
  };

  let sql = `SELECT measurement_id, scale_id, grid_name, operator_name,
    measurement_time, measurement_date,
    weight, density, mixer, byrkalo, penetration, status
    FROM Measurements
    WHERE scale_id = ?, grid_name = ?, operator_name = ?,
    measurement_date BETWEEN ? AND ?`;

  let params = [
    req.params.scale_id,
    data.grid_name,
    data.operator_name,
    data.fromDate,
    data.toDate,
  ];

  db.all(sql, params, (err, rows) => {
      if(err) return res.status(400).json({error: err.message});
      res.json({
          message: success,
          data: rows
      })
  })
};
