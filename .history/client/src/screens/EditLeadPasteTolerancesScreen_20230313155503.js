import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listLeadPasteTolerancesById,
  updateLeadPasteTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditLeadPasteTolerancesScreen = () => {
  const [leadPasteName, setLeadPasteName] = useState ('');
  const [cardNumber, setCardNumber] = useState (0);
  const [nominalDensity, setNominalDensity] = useState (0);
  const [nominalDensityMin1, setNominalDensityMin1] = useState (0);
  const [nominalDensityMin2, setNominalDensityMin2] = useState (0);
  const [nominalDensityMax1, setNominalDensityMax1] = useState (0);
  const [nominalDensityMax2, setNominalDensityMax2] = useState (0);

  const dispatch = useDispatch ();

  const history = useHistory ();

  const {id} = useParams ();

  const leadPasteTolerancesById = useSelector (
    state => state.leadPasteTolerancesById
  );
  const {
    loading,
    error,
    leadPasteTolerancesById: tolerancesById,
  } = leadPasteTolerancesById;

  const leadPasteTolerancesByIdUpdate = useSelector (
    state => state.leadPasteTolerancesByIdUpdate
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = leadPasteTolerancesByIdUpdate;

  useEffect (
    () => {
      dispatch (listLeadPasteTolerancesById (id));
    },
    [dispatch, id]
  );

  console.log (tolerancesById);

  const submitHandler = e => {
    e.preventDefault ();
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
        <h3>Редактиране на допуски на оловна паста</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <Form onSubmit={submitHandler}>
                  <Form.Group controlId="leadPasteName">
                    <Form.Label>Име на оловна паста</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Име на оловна паста"
                      value={tolerancesById.leadPasteName}
                      onChange={e => setLeadPasteName (e.target.value)}
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

                  <Form.Group controlId="nominalDensity">
                    <Form.Label>Номинална плътност</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност"
                      value={tolerancesById.nominalDensity}
                      onChange={e => setNominalDensity (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMin1">
                    <Form.Label>Номинална плътност (-)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (-)"
                      value={tolerancesById.nominalDensityMin1}
                      onChange={e => setNominalDensityMin1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMin2">
                    <Form.Label>Номинална плътност (--)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (--)"
                      value={tolerancesById.nominalDensityMin2}
                      onChange={e => setNominalDensityMin2 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMax1">
                    <Form.Label>Номинална плътност (+)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (+)"
                      value={tolerancesById.nominalDensityMax1}
                      onChange={e => setNominalDensityMax1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMax2">
                    <Form.Label>Номинална плътност (++)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (++)"
                      value={tolerancesById.nominalDensityMax2}
                      onChange={e => setNominalDensityMax2 (e.target.value)}
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

export default EditLeadPasteTolerancesScreen;
