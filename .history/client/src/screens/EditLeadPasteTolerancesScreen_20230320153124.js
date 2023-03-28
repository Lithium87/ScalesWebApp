import React, {useState, useEffect, useCallback} from 'react';
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
  const [tolerancesData, setTolerancesData] = useState ({
    leadPasteName: '',
    cardNumber: '',
    nominalDensity: '',
    nominalDensityMin1: '',
    nominalDensityMin2: '',
    nominalDensityMax1: '',
    nominalDensityMax2: '',
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
      listLeadPasteTolerancesById (id);
    },
    [dispatch, id]
  );

  useEffect (
    () => {
      if (tolerancesById) {
        setTolerancesData ({
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
    setTolerancesData (prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (
      updateLeadPasteTolerancesById ({
        tolerancesData,
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
                      value={tolerancesData.leadPasteName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Карта №"
                      value={tolerancesData.cardNumber}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensity">
                    <Form.Label>Номинална плътност</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност"
                      value={tolerancesData.nominalDensity}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMin1">
                    <Form.Label>Номинална плътност (-)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (-)"
                      value={tolerancesData.nominalDensityMin1}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMin2">
                    <Form.Label>Номинална плътност (--)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (--)"
                      value={tolerancesData.nominalDensityMin2}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMax1">
                    <Form.Label>Номинална плътност (+)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (+)"
                      value={tolerancesData.nominalDensityMax1}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="nominalDensityMax2">
                    <Form.Label>Номинална плътност (++)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Номинална плътност (++)"
                      value={tolerancesData.nominalDensityMax2}
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