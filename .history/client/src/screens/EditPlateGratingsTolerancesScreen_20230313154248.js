import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
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

const EditPlateGratingsTolerancesScreen = () => {
  const [plateGridName, setPlateGridName] = useState ('');
  const [cardNumber, setCardNumber] = useState (0);
  const [nominal, setNominal] = useState (0);
  const [nominalMin1, setNominalMin1] = useState (0);
  const [nominalMin2, setNominalMin2] = useState (0);
  const [nominalMax1, setNominalMax1] = useState (0);
  const [nominalMax2, setNominalMax2] = useState (0);

  const dispatch = useDispatch ();

  const history = useHistory ();

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
      dispatch (listPlateGratingsTolerancesById (id));
    },
    [dispatch, id]
  );

  console.log (tolerancesById);

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (
      updatePlateGratingsTolerancesById ({
        id,
        plateGridName,
        cardNumber,
        nominal,
        nominalMin1,
        nominalMin2,
        nominalMax1,
        nominalMax2,
      })
    );

    if (successUpdate) {
      dispatch ({type: PLATE_GRATINGS_TOLERANCES_BY_ID_UPDATE_RESET});
      history.push ('/settings/plate_gratings_tolerances');
    }
  };

  return (
    <React.Fragment>
      <Link
        to="/settings/plate_gratings_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>

      <FormContainer>
        <h3>Редактиране на допуски плочи / решетки</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <Form onSubmit={submitHandler}>
                  <Form.Group controlId="plateGridName">
                    <Form.Label>Име на плоча / решетка</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Име на плоча / решетка"
                      value={tolerancesById.plateGridName}
                      onChange={e => setPlateGridName (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Карта №"
                      value={tolerancesById.cardNumber}
                      onChange={e => setCardNumber (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominal">
                    <Form.Label>Номинал</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал"
                      value={tolerancesById.nominal}
                      onChange={e => setNominal (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin1">
                    <Form.Label>Номинал (-)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (-)"
                      value={tolerancesById.nominalMin1}
                      onChange={e => setNominalMin1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin2">
                    <Form.Label>Номинал (--)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (--)"
                      value={tolerancesById.nominalMin2}
                      onChange={e => setNominalMin2 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax1">
                    <Form.Label>Номинал (+)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (+)"
                      value={tolerancesById.nominalMax1}
                      onChange={e => setNominalMax1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax2">
                    <Form.Label>Номинал (++)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (++)"
                      value={tolerancesById.nominalMax2}
                      onChange={e => setNominalMax2 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button
                      className="shadow rounded btn btn-secondary btn-sm m-3"
                      onClick={submitHandler}
                    >
                      Редактирай
                    </Button>
                  </Form.Group>
                </Form>}
      </FormContainer>

    </React.Fragment>
  );
};

export default EditPlateGratingsTolerancesScreen;
