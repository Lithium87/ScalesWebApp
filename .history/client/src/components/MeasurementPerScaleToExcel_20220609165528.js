import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const MeasurementPerScaleToExcel = () => {
  const dataSet = [
    {
      title: 'Измерване №',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Име на материал',
      dataIndex: 'materialType',
      key: 'materialType',
    },
    {
      title: 'Име на оператор',
      dataIndex: 'operatorName',
      key: 'operatorName',
    },
    {
      title: 'Време',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Дата',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Плътност [g/cm3]',
      dataIndex: 'density',
      key: 'density',
    },
    {
      title: 'Смесител №',
      dataIndex: 'mixer',
      key: 'mixer',
    },
    {
      title: 'Бъркало',
      dataIndex: 'byrkalo',
      key: 'byrkalo',
    },
    {
      title: 'Пенетрация',
      dataIndex: 'penetration',
      key: 'penetration',
    },
  ];

  return <div>MeasurementPerScaleToExcel</div>;
};

export default MeasurementPerScaleToExcel;
