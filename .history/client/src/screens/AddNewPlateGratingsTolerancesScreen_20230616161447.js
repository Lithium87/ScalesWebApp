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

  const dispatch = useDispatch ();

  const newPlateGratingsTolerances = useSelector (
    state => state.newPlateGratingsTolerances
  );
  const {loading, error} = newPlateGratingsTolerances;

  const handleSubmit = e => {
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
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewPlateGratingsTolerancesScreen;
