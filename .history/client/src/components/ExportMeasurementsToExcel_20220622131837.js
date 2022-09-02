import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet = [
  {
    title: 'ИЗМЕРВАНЕ №',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'МАТЕРИАЛ ИМЕ',
    dataIndex: 'materialType',
    key: 'materialType',
  },
  {
    title: 'ИМЕ НА ОПЕРАТОР',
    dataIndex: 'operatorName',
    key: 'operatorName',
  },
  {
    title: 'ВРЕМЕ',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'ДАТА',
    dataIndex: 'createdAt',
    key: 'createAt',
  },
  {
    title: 'ПЛЪТНОСТ [G/CM3]',
    dataIndex: 'density',
    key: 'density',
  },
  {
    title: 'СМЕСИТЕЛ №',
    dataIndex: 'mixer',
    key: 'mixer',
  },
  {
    title: 'БЪРКАЛО',
    dataIndex: 'byrkalo',
    key: 'byrkalo',
  },
  {
    title: 'ПЕНЕТРАЦИЯ',
    dataIndex: 'penetration',
    key: 'penetration',
  },
];

const ExportMeasurementsToExcel = () => {
  return (
    <ExcelFile
      element={
        <button className="btn btn-outline-secondary btn-sm m-3">
          Експорт в Excel
        </button>
      }
    >
      <ExcelSheet data={dataSet} name="Измервания за везна">
        <ExcelColumn label="Измерване №" value="id" />
        <ExcelColumn label="Материал име" value="materialType" />
        <ExcelColumn label="Име на оператор" value="operatorName" />
        <ExcelColumn label="Време" value="createdAt" />
        <ExcelColumn label="Дата" value="createdAt" />
        <ExcelColumn label="Плътност [g/cm3]" value="density" />
        <ExcelColumn label="Смесител №" value="mixer" />
        <ExcelColumn label="Бъркало" value="byrkalo" />
        <ExcelColumn label="Пенетрация" value="penetration" />
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportMeasurementsToExcel;
