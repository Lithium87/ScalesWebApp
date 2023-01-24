import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Message from '../components/Message';
import Loader from '../components/Loader';
import MeasurementPerScaleTable from '../components/MeasurementPerScaleTable';
import {
  listMeasurementsPerScale,
  listFilteredMeasurementsPerScale,
} from '../redux/actions/measurementsActions';
import {listOperators} from '../redux/actions/operatorActions';

const ScaleInfoScreen = () => {
  const [checkedMaterial, setCheckedMaterial] = useState (false);
  const [checkedOperator, setCheckedOperator] = useState (false);
  const [fromDate, setFromDate] = useState (new Date ());
  const [toDate, setToDate] = useState (new Date ());
  const [material, setMaterial] = useState ('');
  const [operator, setOperator] = useState ('');

  let filters = {
    fromDate,
    toDate,
    material,
    operator,
  };

  const dispatch = useDispatch ();

  const {id} = useParams ();

  const measurementsPerScale = useSelector (
    state => state.measurementsPerScale
  );
  const {
    loading,
    error,
    measurementsPerScale: measurements,
  } = measurementsPerScale;

  const filteredMeasurementsPerScale = useSelector (
    state => state.filteredMeasurementsPerScale
  );
  const {
    loading: loadingFiltered,
    error: errorFiltered,
    filteredMeasurementsPerScale: filteredPerScale,
  } = filteredMeasurementsPerScale;

  const operatorsList = useSelector (state => state.operatorsList);
  const {operators} = operatorsList;

  useEffect (
    () => {
      dispatch (listMeasurementsPerScale (id));

      dispatch (listOperators ());
    },
    [dispatch, id]
  );

  const handleFilters = event => {
    event.preventDefault ();

    if (measurements) {
      dispatch (listFilteredMeasurementsPerScale (id, filters));
      <MeasurementPerScaleTable
        measurements={filteredMeasurementsPerScale}
        changeTimeFormat={changeTimeFormat}
      />;
    }

    console.log (filters);
  };

  const handleChangeMaterials = e => {
    setCheckedMaterial (e.target.checked);
    setMaterial ('');
  };

  const handleChangeOperators = e => {
    setCheckedOperator (e.target.checked);
    setOperator ('');
  };

  const changeTimeFormat = inputTime => {
    const splitTime = inputTime.split ('.')[0];

    if (splitTime.count === 0) {
      return null;
    }

    return splitTime;
  };

  const refetchData = () => {
    dispatch (listMeasurementsPerScale (id));
  };

  const downloadPDF = () => {
    const orientation = 'landscape';

    const doc = new jsPDF (orientation);

    const tableColumn = [
      'Измерване №',
      'Материал име',
      'Име на оператор',
      'Тегло',
      'Време',
      'Дата',
      'Плътност [g/cm3]',
      'Смесител №',
      'Бъркало',
      'Penetration',
    ];

    const tableRows = [];

    measurements.forEach ((measurement, i) => {
      const data = [
        i + 1,
        measurement.materialType,
        measurement.operatorName,
        measurement.weight,
        measurement.createdAt,
        measurement.createdAt,
        measurement.density,
        measurement.mixer,
        measurement.byrkalo,
        measurement.penetration,
      ];

      tableRows.push (data);
    });

    doc.autoTable (tableColumn, tableRows, {startY: 20});

    // title and margin-top + margin-left
    doc.text ('Measurements per scale', 14, 15);

    doc.save ('MeasurementsPerScale.pdf');
  };

  return (
    <React.Fragment>
      <h3 className="searchTitle">Търсене по: </h3>

      <div className="searchForm">
        <div className="searchFormItem">
          <label htmlFor="fromDate">От дата: </label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={e => setFromDate (e.target.value)}
          />
        </div>
        <div className="searchFormItem">
          <label htmlFor="toDate">До дата: </label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={e => setToDate (e.target.value)}
          />
        </div>
        <div className="searchFormItem">
          <label htmlFor="material">Материал: </label>
          <select
            id="material"
            value={material}
            onChange={e => setMaterial (e.target.value)}
            disabled={checkedMaterial ? true : false}
          >
            <option>--Избери материал--</option>
            {measurementsPerScale.measurementsPerScale &&
              measurementsPerScale.measurementsPerScale.map (mps => (
                <option key={mps.id} value={mps.materialType}>
                  {mps.materialType}
                </option>
              ))}
          </select>
        </div>
        <div className="searchFormItem">
          <input
            type="checkbox"
            id="materialCheck"
            onChange={handleChangeMaterials}
            label="За всички материали"
          />
          <label htmlFor="materialCheck">За всички материали</label>
        </div>
        <div className="searchFormItem">
          <label htmlFor="operator">Оператор: </label>
          <select
            id="operator"
            value={operator}
            onChange={e => setOperator (e.target.value)}
            disabled={checkedOperator ? true : false}
          >
            <option>--Избери оператор--</option>
            {operators &&
              operators.map (operator => (
                <option key={operator.id} value={operator.operatorName}>
                  {operator.operatorName}
                </option>
              ))}
          </select>
        </div>
        <div className="searchFormItem">
          <input
            type="checkbox"
            id="operatorCheck"
            onChange={handleChangeOperators}
            label="За всички оператори"
          />
          <label htmlFor="operatorCheck">За всички оператори</label>
        </div>
        <button
          type="submit"
          className="shadow rounded btn btn-secondary btn-sm"
          onClick={handleFilters}
        >
          Филтрирай
        </button>
      </div>

      <hr />

      <h2>Measurements</h2>
      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">{error}</Message>
            : <MeasurementPerScaleTable
                measurements={measurements}
                changeTimeFormat={changeTimeFormat}
              />}

      <hr />

      <Button
        className="shadow rounded btn btn-secondary btn-sm m-3"
        onClick={refetchData}
      >
        Нови данни
      </Button>

      <ReactHTMLTableToExcel
        className="shadow rounded btn btn-secondary btn-sm m-3"
        table="measurements"
        filename="Measurements Per Scale"
        sheet="Sheet"
        buttonText="Изтегли в Excel"
      />

      <Button
        className="shadow rounded btn btn-secondary btn-sm m-3"
        onClick={downloadPDF}
      >
        PDF файл
      </Button>
    </React.Fragment>
  );
};

export default ScaleInfoScreen;
