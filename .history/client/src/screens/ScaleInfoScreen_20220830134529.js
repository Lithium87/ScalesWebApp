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
import {listMeasurementsPerScale} from '../redux/actions/measurementsActions';
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

  const operatorsList = useSelector (state => state.operatorsList);
  const {operators} = operatorsList;

  useEffect (
    () => {
      dispatch (listMeasurementsPerScale (id));

      dispatch (listOperators ());
    },
    [dispatch, id]
  );

  const handleFilters = () => {};

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

  const changeDateFormat = inputDate => {
    const splitDate = inputDate.split ('-');

    if (splitDate.count === 0) {
      return null;
    }

    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2];

    return month + '/' + day + '/' + year;
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
            : <Table
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
                    <th>Дата (mm/dd/yyyy)</th>
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
                        <td>
                          {changeTimeFormat (
                            measurement.createdAt.split ('T')[1]
                          )}
                        </td>
                        <td>
                          {measurement.createdAt.split ('T')[0]}
                        </td>
                        <td>{measurement.density}</td>
                        <td>{measurement.mixer}</td>
                        <td>{measurement.byrkalo}</td>
                        <td>{measurement.penetration}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>}

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
