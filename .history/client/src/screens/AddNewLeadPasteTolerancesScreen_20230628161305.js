import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {createNewLeadPasteTolerances} from '../redux/actions/tolerancesActions';

const AddNewLeadPasteTolerancesScreen = () => {
  const [data, setData] = useState ({
    leadPasteName: '',
    cardNumber: 0,
    nominalDensity: 0.0,
    nominalDensityMin1: 0.0,
    nominalDensityMin2: 0.0,
    nominalDensityMax1: 0.0,
    nominalDensityMax2: 0.0,
  });
  const [validationMessages, setValidationMessages] = useState ([]);

  const dispatch = useDispatch ();

  const newLeadPasteTolerances = useSelector (
    state => state.newLeadPasteTolerances
  );
  const {loading, error} = newLeadPasteTolerances;

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const {
      leadPasteName,
      cardNumber,
      nominalDensity,
      nominalDensityMin1,
      nominalDensityMin2,
      nominalDensityMax1,
      nominalDensityMax2,
    } = data;

    setValidationMessages ([]);
    let messages = [];

    if (!leadPasteName) {
      messages.push ('Името на оловната паста е задължително!');
    }
    if (leadPasteName.length < 5) {
      messages.push (
        'Името на оловната паста трябва да бъде дълго поне пет символа!'
      );
    }
    if (!cardNumber) {
      messages.push ('Полето номер на карта е задължително!');
    }
    if (cardNumber <= 0) {
      messages.push ('Номерът на карта трябва да бъде цяло положително число!');
    }
    if (!nominalDensity) {
      messages.push ('Номиналната плътност трябва да бъде посочена!');
    }
    if (nominalDensity <= 0) {
      messages.push (
        'Номиналната плътност трябва да бъде цяло положително число!'
      );
    }
    if (
      !nominalDensityMin1 ||
      !nominalDensityMin2 ||
      !nominalDensityMax1 ||
      !nominalDensityMax2
    ) {
      messages.push (
        'Отклонението от номиналната плутност трябва да бъде посочено!'
      );
    }
    if (
      nominalDensityMin1 <= 0 ||
      nominalDensityMin2 <= 0 ||
      nominalDensityMax1 <= 0 ||
      nominalDensityMax2 <= 0
    ) {
      messages.push (
        'Отклонението от номиналната плътност трябва да бъде посочено!'
      );
    }

    setValidationMessages (messages);
  };

  const handleSubmit = e => {
    e.preventDefault ();

    validateForm ();

    if (!validationMessages) {
      dispatch (createNewLeadPasteTolerances (data));
    }

    setData ({
      leadPasteName: '',
      cardNumber: 0,
      nominalDensity: 0.0,
      nominalDensityMin1: 0.0,
      nominalDensityMin2: 0.0,
      nominalDensityMax1: 0.0,
      nominalDensityMax2: 0.0,
    });
  };

  return (
    <React.Fragment>
      <Link
        to="/settings/lead_paste_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>

      <FormContainer>
        <h3>Добавяне на допуски на оловна паста</h3>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="leadPasteName">
            <Form.Label>Име на оловна паста</Form.Label>
            <Form.Control
              name="leadPasteName"
              type="text"
              placeholder="Име на оловна паста"
              value={data.leadPasteName || ''}
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

          <Form.Group controlId="nominalDensity">
            <Form.Label>Номинална плътност</Form.Label>
            <Form.Control
              name="nominalDensity"
              type="number"
              placeholder="Номинална плътност"
              value={data.nominalDensity || 0.0}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="nominalDensityMin1">
            <Form.Label>Номинална плътност (-)</Form.Label>
            <Form.Control
              name="nominalDensityMin1"
              type="number"
              placeholder="Номинална плътност (-)"
              value={data.nominalDensityMin1 || 0.0}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="nominalDensityMin2">
            <Form.Label>Номинална плътност (--)</Form.Label>
            <Form.Control
              name="nominalDensityMin2"
              type="number"
              placeholder="Номинална плътност (--)"
              value={data.nominalDensityMin2 || 0.0}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="nominalDensityMax1">
            <Form.Label>Номинална плътност (+)</Form.Label>
            <Form.Control
              name="nominalDensityMax1"
              type="number"
              placeholder="Номинална плътност (+)"
              value={data.nominalDensityMax1 || 0.0}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="nominalDensityMax2">
            <Form.Label>Номинална плътност (++)</Form.Label>
            <Form.Control
              name="nominalDensityMax2"
              type="number"
              placeholder="Номинална плътност (++)"
              value={data.nominalDensityMax2 || 0.0}
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

export default AddNewLeadPasteTolerancesScreen;
