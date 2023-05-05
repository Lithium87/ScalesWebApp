import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {createOperator} from '../redux/actions/operatorActions';
import {CREATE_OPERATOR_RESET} from '../redux/constants/operatorConstants';
import {listZvena} from '../redux/actions/zvenaActions';

const AddNewOperatorScreen = () => {
  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
  });

  const dispatch = useDispatch ();

  const history = useHistory ();

  const zvenaList = useSelector (state => state.zvenaList);

  useEffect (
    () => {
      dispatch (listZvena ());
    },
    [dispatch]
  );

  console.log (zvenaList.zvena);

  const createOperatorHandler = e => {
    e.preventDefault ();

    dispatch (createOperator (data));

    if (success) {
      dispatch ({type: CREATE_OPERATOR_RESET});
      history.push ('/settings/operators');
    }
    console.log (data);
  };

  const operatorCreate = useSelector (state => state.operatorCreate);
  const {loading, error, success, operator: createdOperator} = operatorCreate;

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
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
        <h3>Добавяне на нов оператор</h3>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={createOperatorHandler}>
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
              {zvenaList.zvena &&
                zvenaList.zvena.map (zveno => (
                  <option key={zveno.id} value={zveno.zvenoName}>
                    {zveno.zvenoName}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>

          {/* <Form.Group controlId="zvenoName">
            <Form.Label>Звено</Form.Label>
            <Form.Control
              name="zvenoName"
              type="text"
              placeholder="Звено"
              value={data.zvenoName || ''}
              onChange={handleChange}
            />
          </Form.Group> */}

          <Form.Group>
            <Button
              type="submit"
              className="shadow rounded btn btn-secondary btn-sm m-3"
              onClick={createOperatorHandler}
            >
              Добави
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewOperatorScreen;
