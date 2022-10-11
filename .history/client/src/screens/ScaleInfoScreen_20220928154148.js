import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Message from '../components/Message';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';
import MeasurementPerScaleTable from '../components/MeasurementPerScaleTable';
import {
  listMeasurementsPerScale,
  listFilteredMeasurementsPerScale,
} from '../redux/actions/measurementsActions';
import {listOperators} from '../redux/actions/operatorActions';

const ScaleInfoScreen = () => {
  const [checkedMaterial, setCheckedMaterial] = useState (false);
  const [checkedOperator, setCheckedOperator] = useState (false);
  const [filters, setFilters] = useState ({
    fromDate: '',
    toDate: '',
    material: '',
    operator: '',
  });
  const {fromDate, toDate, material, operator} = filters;

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

  const filteredMeasurements = useSelector (
    state => state.listFilteredMeasurementsPerScale
  );

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
    setFilters (prevState => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));

    console.log (filters);
    console.log (filters.fromDate);
    console.log (measurements);
  };

  const handleChangeMaterials = e => {
    setCheckedMaterial (e.target.value);
    console.log (e.target.value);
  };

  const handleChangeOperators = e => {
    setCheckedOperator (e.target.value);
    console.log (e.target.value);
  };

  const onChange = e => {
    setFilters (prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
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
      <SearchForm
        handleFilters={handleFilters}
        onChange={onChange}
        handleChangeMaterials={handleChangeMaterials}
        handleChangeOperators={handleChangeOperators}
        fromDate={fromDate}
        toDate={toDate}
        material={material}
        operator={operator}
        checkedMaterial={checkedMaterial}
        checkedOperator={checkedOperator}
        measurementsPerScale={measurementsPerScale}
        operators={operators}
      />

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
