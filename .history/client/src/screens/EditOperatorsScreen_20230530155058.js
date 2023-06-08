import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listOperatorById,
  updateOperatorById,
} from '../redux/actions/operatorActions';
import {listZvena} from '../redux/actions/zvenaActions';

const EditOperatorsScreen = () => {
  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
    zvenoId: 0,
  });

  const dispatch = useDispatch ();

  const {id} = useParams ();

  const operatorById = useSelector (state => state.operatorById);
  const {loading, error, operatorById: operator} = operatorById;

  const zvenaList = useSelector (state => state.zvenaList);

  const operatorByIdUpdate = useSelector (state => state.operatorByIdUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = operatorByIdUpdate;

  useEffect (
    () => {
      dispatch (listOperatorById (id));

      dispatch (listZvena ());
    },
    [dispatch, id]
  );

  console.log (listZvena);

  useEffect (
    () => {
      if (operator) {
        setData ({
          id: operator.id,
          operatorName: operator.operatorName,
          operatorCardNumber: operator.operatorCardNumber,
          zvenoName: zvenaList.zvena.zvenoName,
          zvenoId: operator.zvenoId,
        });
      }
    },
    [operator, zvenaList]
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

    setData ({
      operatorName: '',
      operatorCardNumber: 0,
      zvenoName: '',
      zvenoId: 0,
    });

    console.log (data);
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
                      as="select"
                      name="zvenoName"
                      value={data.zvenoName || ''}
                      onChange={handleChange}
                    >
                      <option>--Избери звено--</option>
                      {zvenaList.zvena &&
                        zvenaList.zvena.map (zveno => (
                          <option key={zveno.id} value={zveno.zvenoName}>
                            {zveno.zvenoName}
                          </option>
                        ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button
                      type="submit"
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
