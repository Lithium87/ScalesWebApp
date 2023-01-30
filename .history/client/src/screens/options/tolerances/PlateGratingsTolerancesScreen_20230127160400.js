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
  const {
    loading,
    error,
    allPlateGratingsTolerances: tolerances,
  } = allPlateGratingsTolerances;

  useEffect (
    () => {
      dispatch (getAllPlateGratingsTolerances ());
    },
    [dispatch]
  );

  console.log (tolerances);

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
                  <tr>
                    <th>Допуск №</th>
                    <th>Име на плоча / решетка</th>
                    <th>Карта №</th>
                    <th>Номинал (-)</th>
                    <th>Номинал (--)</th>
                    <th>Номинал (+)</th>
                    <th>Номинал (++)</th>
                  </tr>
                </thead>
              </Table>}
    </React.Fragment>
  );
};

export default PlateGratingsTolerancesScreen;
