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

  const handleSubmit = e => {
    e.preventDefault ();

    if (
      !data.leadPasteName ||
      !data.cardNumber ||
      !data.nominalDensity ||
      !data.nominalDensityMin1 ||
      !data.nominalDensityMin2 ||
      !data.nominalDensityMax1 ||
      !data.nominalDensityMax2
    ) {
      alert ('Всички полета са задължителни!');
      return;
    }

    dispatch (createNewLeadPasteTolerances (data));

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
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewLeadPasteTolerancesScreen;
