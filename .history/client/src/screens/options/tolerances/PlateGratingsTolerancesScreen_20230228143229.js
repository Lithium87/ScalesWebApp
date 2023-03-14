import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table, Form} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getAllPlateGratingsTolerances,
  listPlateGratingsTolerancesById,
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
                    <th>Номинал</th>
                    <th>Номинал (-)</th>
                    <th>Номинал (--)</th>
                    <th>Номинал (+)</th>
                    <th>Номинал (++)</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {tolerances &&
                    tolerances.map ((tolerance, i) => (
                      <tr key={tolerance.id}>
                        <td>{i + 1}</td>
                        <td>{tolerance.plateGridName}</td>
                        <td>{tolerance.cardNumber}</td>
                        <td>{tolerance.nominal}</td>
                        <td>{tolerance.nominalMin1}</td>
                        <td>{tolerance.nominalMin2}</td>
                        <td>{tolerance.nominalMax1}</td>
                        <td>{tolerance.nominalMax2}</td>
                        <td>
                          <LinkContainer
                            to={`../settings/plate_gratings_tolerances/${tolerance.id}`}
                          >
                            <Button className="shadow rounded btn btn-secondary btn-sm m3">
                              Редактирай
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>}
    </React.Fragment>
  );
};

export default PlateGratingsTolerancesScreen;