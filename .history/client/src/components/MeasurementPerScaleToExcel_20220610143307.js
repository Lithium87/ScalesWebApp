import React from 'react';
import {Button} from 'react-bootstrap';
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

  return (
    <ExcelFile
      element={
        <Button className="btn btn-outline-secondary btn-sm m-3">
          Експорт в Excel
        </Button>
      }
    >
      <ExcelSheet data={dataSet} name="Измервания за везна">
        <ExcelColumn label="Измерване №" value="id" />
        <ExcelColumn label="Име на материал" value="materialType" />
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

export default MeasurementPerScaleToExcel;
