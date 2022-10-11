import React from 'react';
import {Table} from 'react-bootstrap';

const MeasurementPerScaleTable = ({measurements, changeTimeFormat}) => {
  return (
    <Table
      striped
      bordered
      hover
      responsive
      className="table-sm"
      id="measurements"
      style={{background: 'white'}}
    >
      <thead>
        <tr>
          <th>Измерване №</th>
          <th>Материал име</th>
          <th>Име на оператор</th>
          <th>Тегло</th>
          <th>Време</th>
          <th>Дата (yyyy/mm/dd)</th>
          <th>Плътност [g/cm3]</th>
          <th>Смесител №</th>
          <th>Бъркало</th>
          <th>Пенетрация</th>
        </tr>
      </thead>
      <tbody>
        {measurements &&
          measurements.map ((measurement, i) => (
            <tr key={measurement.id}>
              <td>{i + 1}</td>
              <td>{measurement.materialType}</td>
              <td>{measurement.operatorName}</td>
              <td>{measurement.weight}</td>
              <td>{changeTimeFormat (measurement.createdAt.split ('T'))[1]}</td>
              <td>{measurement.createdAt.split ('T')[0]}</td>
              <td>{measurement.density}</td>
              <td>{measurement.mixer}</td>
              <td>{measurement.byrkalo}</td>
              <td>{measurement.penetration}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MeasurementPerScaleTable;
