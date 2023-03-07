import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getPlateGratingsTolerancesById,
} from '../../../redux/actions/tolerancesActions';

const EditPlateGratingsTolerancesScreen = () => {
  const dispatch = useDispatch ();

  const plateGratingsTolerancesById = useSelector (
    state => state.plateGratingsTolerancesById
  );
  const {
    loading,
    error,
    plateGratingsTolerancesById: tolerancesById,
  } = plateGratingsTolerancesById;

  const [plateGratingsName, setPlateGratingsName] = useState ('');
  const [cardNumber, setCardNumber] = useState (0);
  const [nominal, setNominal] = useState (100);
  const [nominalMin1, setNominalMin1] = useState (0);
  const [nominalMin2, setNominalMin2] = useState (0);
  const [nominalMax1, setNominalMax1] = useState (0);
  const [nominalMax2, setNominalMax2] = useState (0);

  const {id} = useParams ();

  useEffect (
    () => {
      getPlateGratingsTolerancesById (id);
    },
    [dispatch, id]
  );

  const submitHandler = e => {
    e.preventDefault ();
    console.log (tolerancesById);
  };

  return (
    <React.Fragment>
      <h3>Редактиране на допуски</h3>

      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">{error}</Message>
            : <Form onSubmit={submitHandler}>
                <Form.Group controlId="plateGratingsName">
                  <Form.Label>Име на плоча / решетка</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Име на плоча / решетка"
                    value={plateGratingsName}
                    onChange={e => setPlateGratingsName (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Карта №</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Въведете № на карта"
                    value={cardNumber}
                    onChange={e => setCardNumber (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="nominal">
                  <Form.Label>Номинал</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Въведете номинал"
                    value={nominal}
                    onChange={e => setNominal (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="nominalMin1">
                  <Form.Label>Номинал (-)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Въведете номинал (-)"
                    value={nominalMin1}
                    onChange={e => setNominalMin1 (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="nominalMin2">
                  <Form.Label>Номинал (--)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Въведете номинал (--)"
                    value={nominalMin2}
                    onChange={e => setNominalMin2 (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="nominalMax1">
                  <Form.Label>Номинал (+)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Въведете номинал (+)"
                    value={nominalMax1}
                    onChange={e => setNominalMax1 (e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="nominalMax2">
                  <Form.Label>Номинал (++)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Въведете номинал (++)"
                    value={nominalMax2}
                    onChange={e => setNominalMax2 (e.target.value)}
                  />
                </Form.Group>
                <Button onClick={submitHandler}>Редактирай</Button>
              </Form>}
    </React.Fragment>
  );
};

export default EditPlateGratingsTolerancesScreen;
