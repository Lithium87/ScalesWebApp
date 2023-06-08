import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';
import {
  listOperatorById,
  updateOperatorById,
  createOperator,
} from '../redux/actions/operatorActions';
import {listZvena} from '../redux/actions/zvenaActions';

const OperatorForm = () => {
  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
    zvenoId: 0,
  });
  const [editable, setEditable] = useState (false);

  const dispatch = useDispatch ();

  const history = useHistory ();

  const {id} = useParams ();

  const operatorById = useSelector (state => state.operatorById);
  const {operatorById: operator} = operatorById;

  const zvenaList = useSelector (state => state.zvenaList);

  const operatorByIdUpdate = useSelector (state => state.operatorByIdUpdate);

  useEffect (
    () => {
      dispatch (listOperatorById (id));

      dispatch (listZvena ());
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
          zvenoName: zvenaList.zveno.zvenoName,
          zvenoId: zvenaList.zveno.id,
        });
        setEditable (true);
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

    if (editable) {
      dispatch (updateOperatorById (data));
    } else {
      dispatch (createOperator (data));
    }

    setData ({
      operatorName: '',
      operatorCardNumber: 0,
      zvenoName: '',
      zvenoId: 0,
    });
  };

  return (
    <React.Fragment>
      <Link
        to="/settings/operators"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно в таблицата с оператори
      </Link>

      <FormContainer>
        <h3>Редактиране / добавяне на оператор</h3>
        <Form onSubmit={handleSubmit}>
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
            />
          </Form.Group>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default OperatorForm;
