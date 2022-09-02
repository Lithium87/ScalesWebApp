import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ExportMeasurementsPerScaleToExcel = ({measurementsPerScale}) => {
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <table className="table table-striped" id="measurements">
          <thead>
            <tr>
              <td>Измерване №</td>
              <td>Материал име</td>
              <td>Име на оператор</td>
              <td>Време</td>
              <td>Дата</td>
              <td>Плътност [g/cm3]</td>
              <td>Смесител №</td>
              <td>Бъркало</td>
              <td>Пенетрация</td>
            </tr>
          </thead>
          <tbody>
            {measurementsPerScale.measurementsPerScale.map (
              (measurement, index) => (
                <tr key={index}>
                  <td>{measurement.id}</td>
                  <td>{measurement.materialType}</td>
                  <td>{measurement.operatorName}</td>
                  <td>{measurement.createdAt}</td>
                  <td>{measurement.createdAt}</td>
                  <td>{measurement.density}</td>
                  <td>{measurement.mixer}</td>
                  <td>{measurement.byrkalo}</td>
                  <td>{measurement.penetration}</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <ReactHTMLTableToExcel
          className="btn btn-info"
          table="measurements"
          filename="Measurements Excel file"
          sheet="Sheet"
          buttonText="Изтегли в Excel"
        />

      </div>
    </section>
  );
};

export default ExportMeasurementsPerScaleToExcel;
