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

const EditPlateGratingsTolerancesScreen = () => {
  const [data, setData] = useState ({
    plateGridName: '',
    cardNumber: 0,
    nominal: 0,
    nominalMin1: 0,
    nominalMin2: 0,
    nominalMax1: 0,
    nominalMax2: 0,
  });

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
  } = plateGratingsTolerancesByIdUpdate;

  useEffect (
    () => {
      dispatch (listPlateGratingsTolerancesById (id));
    },
    [dispatch, id]
  );

  useEffect (
    () => {
      if (tolerancesById) {
        setData ({
          id: tolerancesById.id,
          plateGridName: tolerancesById.plateGridName,
          cardNumber: tolerancesById.cardNumber,
          nominal: tolerancesById.nominal,
          nominalMin1: tolerancesById.nominalMin1,
          nominalMin2: tolerancesById.nominalMin2,
          nominalMax1: tolerancesById.nominalMax1,
          nominalMax2: tolerancesById.nominalMax2,
        });
      }
    },
    [tolerancesById]
  );

  const handleChange = e => {
    console.log (e.target.name);
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault ();

    if (
      !data.plateGridName ||
      !data.cardNumber ||
      !data.nominal ||
      !data.nominalMin1 ||
      !data.nominalMin2 ||
      !data.nominalMax1 ||
      !data.nominalMax2
    ) {
      alert ('Всички полета са задължителни!');
      return;
    }

    dispatch (updatePlateGratingsTolerancesById (data));

    setData ({
      plateGridName: '',
      cardNumber: 0,
      nominal: 0,
      nominalMin1: 0,
      nominalMin2: 0,
      nominalMax1: 0,
      nominalMax2: 0,
    });

    history.push ('/settings/plate_gratings_tolerances');
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
                      name="plateGridName"
                      type="text"
                      placeholder="Име на плоча / решетка"
                      value={data.plateGridName || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      name="cardNumber"
                      type="number"
                      placeholder="Карта №"
                      value={data.cardNumber || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominal">
                    <Form.Label>Номинал</Form.Label>
                    <Form.Control
                      name="nominal"
                      type="number"
                      placeholder="Номинал"
                      value={data.nominal || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin1">
                    <Form.Label>Номинал (-)</Form.Label>
                    <Form.Control
                      name="nominalMin1"
                      type="number"
                      placeholder="Номинал (-)"
                      value={data.nominalMin1 || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMin2">
                    <Form.Label>Номинал (--)</Form.Label>
                    <Form.Control
                      name="nominalMin2"
                      type="number"
                      placeholder="Номинал (--)"
                      value={data.nominalMin2 || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax1">
                    <Form.Label>Номинал (+)</Form.Label>
                    <Form.Control
                      name="nominalMax1"
                      type="number"
                      placeholder="Номинал (+)"
                      value={data.nominalMax1 || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalMax2">
                    <Form.Label>Номинал (++)</Form.Label>
                    <Form.Control
                      name="nominalMax2"
                      type="number"
                      placeholder="Номинал (++)"
                      value={data.nominalMax2 || 0}
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
