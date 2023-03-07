import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listPlateGratingsTolerancesById,
  updatePlateGratingsTolerancesById,
} from '../redux/actions/tolerancesActions';
import {
  PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_RESET,
} from '../redux/constants/tolerancesConstants';
import {validate} from 'uuid';

const EditPlateGratingsTolerancesScreen = ({history}) => {
  const [plateGridName, setPlateGridName] = useState ('');
  const [cardNumber, setCardNumber] = useState (0);
  const [nominal, setNominal] = useState (0);
  const [nominalMin1, setNominalMin1] = useState (0);
  const [nominalMin2, setNominalMin2] = useState (0);
  const [nominalMax1, setNominalMax1] = useState (0);
  const [nominalMax2, setNominalMax2] = useState (0);

  const dispatch = useDispatch ();

  const {id} = useParams ();

  const plateGratingsTolerancesById = useSelector (
    state => state.plateGratingsTolerancesById
  );
  const {
    loading,
    error,
    plateGratingsTolerancesById: tolerancesById,
  } = plateGratingsTolerancesById;

  const plateGratingsTolerancesByIdUpdate = useSelector (
    state => state.plateGratingsTolerancesByIdUpdate
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = plateGratingsTolerancesByIdUpdate;

  useEffect (
    () => {
      if (successUpdate) {
        dispatch ({type: PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_RESET});
      } else {
        dispatch (listPlateGratingsTolerancesById (id));

        setPlateGridName (tolerancesById.plateGridName);
        setCardNumber (tolerancesById.cardNumber);
        setNominal (tolerancesById.nominal);
        setNominalMin1 (tolerancesById.nominalMin1);
        setNominalMin2 (tolerancesById.nominalMin2);
        setNominalMax1 (tolerancesById.nominalMax1);
        setNominalMax2 (tolerancesById.nominalMax2);
      }
    },
    [dispatch, history, id, successUpdate, tolerancesById]
  );

  const submitHandler = e => {
    e.preventDefault ();
  };

  console.log (tolerancesById);

  return (
    <React.Fragment>
      <Link
        to="/settings/plate_gratings_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>
      <h3>Редактиране на допуски</h3>
      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">{error}</Message>
            : <Form omSubmit={submitHandler}>
                <Form.Goup controlId="plateGridName">
                  <Form.Label>Име на плоча / решетка</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Име на плоча / решетка"
                    value={plateGridName}
                    onChange={e => setPlateGridName (e.target.value)}
                  />
                </Form.Goup>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Карта №</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Карта №"
                    value={cardNumber}
                    onChange={e => setCardNumber (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="nominal">
                  <Form.Label>Номинал</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Номинал"
                    value={nominal}
                    onChange={e => setNominal (e.target.value)}
                  />
                </Form.Group>
              </Form>}
    </React.Fragment>
  );
};

export default EditPlateGratingsTolerancesScreen;
