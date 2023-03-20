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
import {
  LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_RESET,
} from '../redux/constants/tolerancesConstants';

const EditLeadPasteTolerancesScreen = () => {
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

  const [leadPasteName, setLeadPasteName] = useState (
    tolerancesById.leadPasteName
  );
  const [cardNumber, setCardNumber] = useState (tolerancesById.cardNumber);
  const [nominalDensity, setNominalDensity] = useState (
    tolerancesById.nominalDensity
  );
  const [nominalDensityMin1, setNominalDensityMin1] = useState (
    tolerancesById.nominalDensityMin1
  );
  const [nominalDensityMin2, setNominalDensityMin2] = useState (
    tolerancesById.nominalDensityMin2
  );
  const [nominalDensityMax1, setNominalDensityMax1] = useState (
    tolerancesById.nominalDensityMax1
  );
  const [nominalDensityMax2, setNominalDensityMax2] = useState (
    tolerancesById.nominalDensityMax2
  );

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (
      updateLeadPasteTolerancesById ({
        id,
        leadPasteName,
        cardNumber,
        nominalDensity,
        nominalDensityMin1,
        nominalDensityMin2,
        nominalDensityMax1,
        nominalDensityMax2,
      })
    );

    if (successUpdate) {
      dispatch ({type: LEAD_PASTE_TOLERANCES_BY_ID_UPDATE_RESET});
      history.push ('/settings/lead_paste_tolerances');
    }
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
                      value={leadPasteName}
                      onChange={e => setLeadPasteName (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Карта №"
                      value={cardNumber}
                      onChange={e => setCardNumber (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensity">
                    <Form.Label>Номинална плътност</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност"
                      value={nominalDensity}
                      onChange={e => setNominalDensity (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMin1">
                    <Form.Label>Номинална плътност (-)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (-)"
                      value={nominalDensityMin1}
                      onChange={e => setNominalDensityMin1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMin2">
                    <Form.Label>Номинална плътност (--)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (--)"
                      value={nominalDensityMin2}
                      onChange={e => setNominalDensityMin2 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMax1">
                    <Form.Label>Номинална плътност (+)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (+)"
                      value={nominalDensityMax1}
                      onChange={e => setNominalDensityMax1 (e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMax2">
                    <Form.Label>Номинална плътност (++)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (++)"
                      value={nominalDensityMax2}
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
