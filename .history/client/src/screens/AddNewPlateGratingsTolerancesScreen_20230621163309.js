import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
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
  const [validationMessages, setValidationMessages] = useState ([]);

  const dispatch = useDispatch ();

  const newPlateGratingsTolerances = useSelector (
    state => state.newPlateGratingsTolerances
  );
  const {loading, error} = newPlateGratingsTolerances;

  const validateForm = () => {
    const {
      plateGridName,
      cardNumber,
      nominal,
      nominalMin1,
      nominalMin2,
      nominalMax1,
      nominalMax2,
    } = data;

    setValidationMessages ([]);
    let messages = [];

    if (!plateGridName) {
      messages.push ('Името на плоча / решетка е задължително!');
    }
    if (plateGridName.length < 3) {
      messages.push (
        'Името на плоча / решетка трябва да бъде дълго поне три символа!'
      );
    }
    if (!cardNumber) {
      messages.push ('Полето номер на карта е задължително!');
    }
    if (cardNumber <= 0) {
      messages.push ('Номерът на карта трябва да бъде цяло положително число!');
    }
    if (!nominal) {
      messages.push ('Номиналната стойност е задължителна!');
    }
    if (nominal <= 0) {
      messages.push (
        'Номиналната стойност трябва да бъде цяло положително число!'
      );
    }
    if (!nominalMin1 || !nominalMin2 || !nominalMax1 || !nominalMax2) {
      messages.push (
        'Отклонението от номиналната стойност трябва да бъде посочено!'
      );
    }
    if (
      nominalMin1 <= 0 ||
      nominalMin2 <= 0 ||
      nominalMax1 <= 0 ||
      nominalMax2 <= 0
    ) {
      messages.push (
        'Отклонението от номиналната стойност трябва да бъде цяло положително число!'
      );
    }

    setValidationMessages (messages);
  };

  const handleSubmit = e => {
    validateForm ();

    if (validationMessages.length > 0) {
      e.preventDefault ();
    }

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
        <br />
        <div style={{color: 'red', fontWeight: 'bold'}}>
          {validationMessages.length > 0 &&
            <span>Моля попълнете формата както следва:</span>}
          <ul>
            {validationMessages.map (vm => <li key={vm}>{vm}</li>)}
          </ul>
        </div>
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewPlateGratingsTolerancesScreen;
