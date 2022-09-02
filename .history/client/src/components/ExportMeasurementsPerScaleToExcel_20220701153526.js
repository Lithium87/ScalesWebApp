import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ExportMeasurementsPerScaleToExcel = ({measurementsPerScale}) => {
  return (
    <div>
      <ReactHTMLTableToExcel
        id="table-xls-button"
        className="download-table-xls-button"
        table="Измервания"
        filename="Measurements Per Scale"
        sheet="measurements"
        buttonText="Excel файл"
      />
      <table id="table-to-xls">
        <tr>
          <th>Измерване №</th>
          <th>Материал име</th>
          <th>Име на оператор</th>
          <th>Време</th>
          <th>Дата</th>
          <th>Плътност [g/cm3]</th>
          <th>Смесител №</th>
          <th>Бъркало</th>
          <th>Пенетрация</th>
        </tr>
        {measurementsPerScale.map (measurement => (
          <tr key={measurement.id}>
            {measurement.id}
            {measurement.materialType}
            {measurement.operatorName}
            {measurement.createdAt}
            {measurement.createdAt}
            {measurement.density}
            {measurement.mixer}
            {measurement.byrkalo}
            {measurement.penetration}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ExportMeasurementsPerScaleToExcel;
