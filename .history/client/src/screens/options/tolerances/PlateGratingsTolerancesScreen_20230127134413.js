import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getAllPlateGratingsTolerances,
} from '../../../redux/actions/tolerancesActions';

const PlateGratingsTolerancesScreen = () => {
  const dispatch = useDispatch ();

  const allPlateGratingsTolerances = useSelector (
    state => state.allPlateGratingsTolerances
  );
  const {loading, error, tolerances} = allPlateGratingsTolerances;

  useEffect (
    () => {
      dispatch (getAllPlateGratingsTolerances ());
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <h3>Допуски на плочи / решетки</h3>

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
                id="pgTolerances"
                style={{background: 'white'}}
              >
                <thead>
                  <th>Допуск №</th>
                  <th>Име на плоча / решетка</th>
                  <th>Карта №</th>
                  <th>Номинал (-)</th>
                  <th>Номинал (+)</th>
                  <th>Номинал (--)</th>
                  <th>Номинал (++)</th>
                </thead>
                <tbody>
                  {tolerances &&
                    tolerances.map ((tolerance, i) => (
                      <tr key={tolerance.id}>
                        <td>{i + 1}</td>
                        <td>{tolerance.plateGridName}</td>
                        <td>{tolerance.cardNumber}</td>
                        <td>{tolerance.nominalMin1}</td>
                        <td>{tolerance.nominalMax1}</td>
                        <td>{tolerance.nominalMin2}</td>
                        <td>{tolerance.nominalMax2}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>}
    </React.Fragment>
  );
};

export default PlateGratingsTolerancesScreen;
