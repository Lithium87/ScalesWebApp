import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import Message from './Message';
import Loader from './Loader';
import {listMeasurementsPerScale} from '../redux/actions/measurementsActions';

const MeasurementsTable = () => {
  const dispatch = useDispatch ();

  const measurementsPerScale = useSelector (
    state => state.measurementsPerScale
  );
  const {loading, error, measurements} = measurementsPerScale;

  useEffect (
    () => {
      dispatch (listMeasurementsPerScale ());
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <h1>Measurements</h1>
      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">{error}</Message>
            : <Table striped bordered hover responsive className="table-sm">
                <thead>
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
                </thead>
                <tbody>
                  {measurements &&
                    measurements.map (measurement => (
                      <tr key={measurement.id}>
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
                    ))}
                </tbody>
              </Table>}
    </React.Fragment>
  );
};

export default MeasurementsTable;
