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

  const [plateGridName, setPlateGridName] = useState (
    tolerancesById.plateGridName
  );
  const [cardNumber, setCardNumber] = useState (tolerancesById.cardNumber);
  const [nominal, setNominal] = useState (tolerancesById.nominal);
  const [nominalMin1, setNominalMin1] = useState (tolerancesById.nominalMin1);
  const [nominalMin2, setNominalMin2] = useState (tolerancesById.nominalMin2);
  const [nominalMax1, setNominalMax1] = useState (tolerancesById.nominalMax1);
  const [nominalMax2, setNominalMax2] = useState (tolerancesById.nominalMax2);

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
                      placeholder={plateGridName}
                      value={plateGridName}
                      onChange={e => setPlateGridName (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={cardNumber}
                      value={cardNumber}
                      onChange={e => setCardNumber (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominal">
                    <Form.Label>Номинал</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={nominal}
                      value={nominal}
                      onChange={e => setNominal (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin1">
                    <Form.Label>Номинал (-)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={nominalMin1}
                      value={nominalMin1}
                      onChange={e => setNominalMin1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin2">
                    <Form.Label>Номинал (--)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={nominalMin2}
                      value={nominalMin2}
                      onChange={e => setNominalMin2 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax1">
                    <Form.Label>Номинал (+)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={nominalMax1}
                      value={nominalMax1}
                      onChange={e => setNominalMax1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax2">
                    <Form.Label>Номинал (++)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={nominalMax2}
                      value={nominalMax2}
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