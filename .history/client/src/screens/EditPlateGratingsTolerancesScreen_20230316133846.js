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

  const [tolerancesData, setTolerancesData] = useState ({
    plateGridName: tolerancesById.plateGridName,
    cardNumber: tolerancesById.cardNumber,
    nominal: tolerancesById.nominal,
    nominalMin1: tolerancesById.nominalMin1,
    nominalMin2: tolerancesById.nominalMin2,
    nominalMax1: tolerancesById.nominalMax1,
    nominalMax2: tolerancesById.nominalMax2,
  });

  const handleChange = e => {
    setTolerancesData (prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (
      updatePlateGratingsTolerancesById ({
        tolerancesData,
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
                      value={tolerancesData.plateGridName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Карта №"
                      value={tolerancesData.cardNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominal">
                    <Form.Label>Номинал</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал"
                      value={tolerancesData.nominal}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin1">
                    <Form.Label>Номинал (-)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (-)"
                      value={tolerancesData.nominalMin1}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin2">
                    <Form.Label>Номинал (--)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (--)"
                      value={tolerancesData.nominalMin2}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax1">
                    <Form.Label>Номинал (+)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (+)"
                      value={tolerancesData.nominalMax1}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax2">
                    <Form.Label>Номинал (++)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинал (++)"
                      value={tolerancesData.nominalMax2}
                      onChange={handleChange}
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
