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

  useEffect (
    () => {
      if (tolerancesById) {
        setData ({
          id: tolerancesById.id,
          leadPasteName: tolerancesById.leadPasteName,
          cardNumber: tolerancesById.cardNumber,
          nominalDensity: tolerancesById.nominalDensity,
          nominalDensityMin1: tolerancesById.nominalDensityMin1,
          nominalDensityMin2: tolerancesById.nominalDensityMin2,
          nominalDensityMax1: tolerancesById.nominalDensityMax1,
          nominalDensityMax2: tolerancesById.nominalDensityMax2,
        });
      }
    },
    [tolerancesById]
  );

  console.log (tolerancesById);

  const handleChange = e => {
    console.log (e.target.name);
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (updateLeadPasteTolerancesById (data));

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
