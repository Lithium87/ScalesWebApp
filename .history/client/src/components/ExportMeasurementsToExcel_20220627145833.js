import React, {useRef} from 'react';
import {useDownloadExcel} from 'react-export-table-to-excel';

const ExportMeasurementsToExcel = () => {
  const tableRef = useRef (null);

  const {onDownload} = useDownloadExcel ({
    currentTableRef: tableRef.current,
    filename: 'Measurements Per Scale',
    sheet: 'Measurements',
  });

  return (
    <div>
      <button onClick={onDownload}>Export excel</button>

      <table ref={tableRef}>
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
      </table>
    </div>
  );
};

export default ExportMeasurementsToExcel;
