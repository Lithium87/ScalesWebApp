import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listOperatorById,
  updateOperatorById,
} from '../redux/actions/operatorActions';
import {
  OPERATOR_BY_ID_UPDATE_RESET,
} from '../redux/constants/operatorConstants';

const EditOperatorsScreen = () => {
  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
  });

  const dispatch = useDispatch ();

  const history = useHistory ();

  const {id} = useParams ();

  const operatorById = useSelector (state => state.operatorById);
  const {loading, error, operatorById: operator} = operatorById;

  const operatorByIdUpdate = useSelector (state => state.operatorByIdUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = operatorByIdUpdate;

  useEffect (
    () => {
      dispatch (listOperatorById (id));
    },
    [dispatch, id]
  );

  useEffect (
    () => {
      if (operator) {
        setData ({
          id: operator.id,
          operatorName: operator.operatorName,
          operatorCardNumber: operator.operatorCardNumber,
          zvenoName: operator.zvenoName,
        });
      }
    },
    [operator]
  );

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();
    dispatch (updateOperatorById (data));

    if (successUpdate) {
      dispatch ({type: OPERATOR_BY_ID_UPDATE_RESET});
      history.push ('/settings/operators');
    }
  };

  return (
    <React.Fragment>
      <Link
        to="/settings/operators"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с оператори
      </Link>

      <FormContainer>
        <h3>Редактиране на оператори</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="operatorName">
                    <Form.Label>Име на оператор</Form.Label>
                    <Form.Control
                      name="operatorName"
                      type="text"
                      placeholder="Име на оператор"
                      value={data.operatorName || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="operatorCardNumber">
                    <Form.Label>Карта №</Form.Label>
                    <Form.Control
                      name="operatorCardNumber"
                      type="number"
                      placeholder="Карта №"
                      value={data.operatorCardNumber || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="zvenoName">
                    <Form.Label>Звено</Form.Label>
                    <Form.Control
                      name="zvenoName"
                      type="text"
                      placeholder="Звено"
                      value={data.zvenoName || ''}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button
                      className="shadow rounded btn btn-secondary btn-sm m-3"
                      onClick={handleSubmit}
                    >
                      Редактирай
                    </Button>
                  </Form.Group>
                </Form>}
      </FormContainer>
    </React.Fragment>
  );
};

export default EditOperatorsScreen;
