import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';
import {listZvena} from '../redux/actions/zvenaActions';

const OperatorForm = ({onSubmit, onChange, data}) => {
  const dispatch = useDispatch ();

  const zvenaList = useSelector (state => state.zvenaList);

  useEffect (
    () => {
      dispatch (listZvena ());
    },
    [dispatch]
  );

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
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="operatorName">
            <Form.Label>Име на оператор</Form.Label>
            <Form.Control
              name="operatorName"
              type="text"
              placeholder="Име на оператор"
              value={data.operatorName || ''}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="operatorCardNumber">
            <Form.Label>Карта №</Form.Label>
            <Form.Control
              name="operatorCardNumber"
              type="number"
              placeholder="Карта №"
              value={data.operatorCardNumber || 0}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="zvenoName">
            <Form.Label>Звено</Form.Label>
            <Form.Control
              as="select"
              name="zvenoName"
              value={data.zvenoName || ''}
              onChange={onChange}
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
              onClick={onSubmit}
            />
          </Form.Group>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default OperatorForm;
