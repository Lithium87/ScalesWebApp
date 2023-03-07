import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import EditForm from '../../../components/EditForm';
import {
  getAllPlateGratingsTolerances,
  getPlateGratingsTolerancesById,
} from '../../../redux/actions/tolerancesActions';

const PlateGratingsTolerancesScreen = () => {
  const dispatch = useDispatch ();

  const {id} = useParams ();

  const allPlateGratingsTolerances = useSelector (
    state => state.allPlateGratingsTolerances
  );
  const {
    loading,
    error,
    allPlateGratingsTolerances: tolerances,
  } = allPlateGratingsTolerances;

  const plateGratingsTolerancesById = useSelector (
    state => state.plateGratingsTolerancesById
  );
  const {
    plateGratingsTolerancesById: tolerancesById,
  } = plateGratingsTolerancesById;

  useEffect (
    () => {
      dispatch (getAllPlateGratingsTolerances ());

      dispatch (getPlateGratingsTolerancesById (id));
    },
    [dispatch, id]
  );

  const displayEditForm = e => {
    <EditForm tolerances={tolerancesById} />;
  };

  console.log (tolerancesById);

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
                          <Button
                            onClick={displayEditForm}
                            className="shadow rounded btn btn-secondary btn-sm m3"
                          >
                            Редактирай
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>}
    </React.Fragment>
  );
};

export default PlateGratingsTolerancesScreen;
