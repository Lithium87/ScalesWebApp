import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  createNewPlateGratingsTolerances,
} from '../redux/actions/tolerancesActions';

const AddNewPlateGratingsTolerancesScreen = () => {
  const [data, setData] = useState ({
    plateGridName: '',
    cardNumber: 0,
    nominal: 0,
    nominalMin1: 0,
    nominalMin2: 0,
    nominalMax1: 0,
    nominalMax2: 0,
  });
  const [isValid, setIsValid] = useState (true);

  const dispatch = useDispatch ();

  const newPlateGratingsTolerances = useSelector (
    state => state.newPlateGratingsTolerances
  );
  const {loading, error} = newPlateGratingsTolerances;

  const validateForm = () => {
    if (!data.plateGridName || data.plateGridName === 0) {
      toast.error ('Името на плоча / решетка е задължително!');
      setIsValid (false);
    }
    if (data.plateGridName.length < 3) {
      toast.error ('Името трябва да е дълго поне 3 символа!');
      setIsValid (false);
    }
    if (!data.cardNumber) {
      toast.error ('Номерът на картата е задължителен!');
      setIsValid (false);
    }
    if (data.cardNumber <= 0) {
      toast.error ('Номерът на картата трябва да бъде цяло положително число!');
      setIsValid (false);
    }
    if (!data.nominal) {
      toast.error ('Номиналът е задължителен!');
      setIsValid (false);
    }
    if (data.nominal <= 0) {
      toast.error ('Номиналът трябва да е цяло положително число!');
      setIsValid (false);
    }
    if (
      !data.nominalMin1 ||
      !data.nominalMin2 ||
      !data.nominalMax1 ||
      !data.nominalMax2
    ) {
      toast.error (
        'Отклоненията от номиналната стойност трябва да бъдат посочени задължително!'
      );
      setIsValid (false);
    }
    if (
      data.nominalMin1 <= 0 ||
      data.nominalMin2 <= 0 ||
      data.nominalMax1 <= 0 ||
      data.nominalMax2 <= 0
    ) {
      toast.error ('Стойноста трябва да бъде цяло положително число!');
      setIsValid (false);
    }

    setIsValid (true);
    return isValid;
  };

  const handleSubmit = e => {
    e.preventDefault ();

    if (isValid) {
      dispatch (createNewPlateGratingsTolerances (data));

      setData ({
        plateGridName: '',
        cardNumber: 0,
        nominal: 0,
        nominalMin1: 0,
        nominalMin2: 0,
        nominalMax1: 0,
        nominalMax2: 0,
      });
    } else {
      validateForm ();
    }
  };

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
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
        <h3>Добавяне на допуски на плочи / решетки</h3>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={handleSubmit}>
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
              onClick={handleSubmit}
            >
              Добави
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  );
};

export default AddNewPlateGratingsTolerancesScreen;
