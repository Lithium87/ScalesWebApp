import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import Message from './Message';
import Loader from './Loader';
import {listMeasurementsPerScale} from '../redux/actions/measurementsActions';

const MeasurementsTable = () => {
  const dispatch = useDispatch ();

  const {id} = useParams ();

  const measurementsPerScale = useSelector (
    state => state.measurementsPerScale
  );
  const {loading, error, measurements} = measurementsPerScale;

  useEffect (
    () => {
      dispatch (listMeasurementsPerScale (id));
    },
    [dispatch, id]
  );

  return (
    <React.Fragment>
      console.log(measurements);
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
                        {console.log (measurement)}
                      </tr>
                    ))}
                </tbody>
              </Table>}
    </React.Fragment>
  );
};

export default MeasurementsTable;
