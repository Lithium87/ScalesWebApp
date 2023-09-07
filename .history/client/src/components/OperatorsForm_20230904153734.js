import React from 'react';
import {Button, Form} from 'react-bootstrap';

const OperatorsForm = ({
  data,
  errors,
  zvenaList,
  onSubmit,
  onChange,
  btnLabel,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="operatorName">
        <Form.Label>Име на оператор</Form.Label>
        <Form.Control
          name="operatorName"
          type="text"
          placeholder="Име на оператор"
          value={data.operatorName || ''}
          onChange={onChange}
          style={{border: errors.operatorName ? '1px solid red' : null}}
        />
        {errors.operatorName
          ? <p style={{color: 'red'}}>Името на оператор е задължително!</p>
          : null}
      </Form.Group>

      <Form.Group controlId="operatorCardNumber">
        <Form.Label>Карта №</Form.Label>
        <Form.Control
          name="operatorCardNumber"
          type="number"
          placeholder="Карта №"
          value={data.operatorCardNumber || 0}
          onChange={onChange}
          style={{border: errors.operatorCardNumber ? '1px solid red' : null}}
        />
        {errors.operatorCardNumber
          ? <p style={{color: 'red'}}>
              Полето номер на карта е задължително и трябва да бъде цяло положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="zvenoName">
        <Form.Label>Звено</Form.Label>
        <Form.Control
          as="select"
          name="zvenoName"
          value={data.zvenoName || ''}
          onChange={onChange}
          style={{border: errors.zvenoName ? '1px solid red' : null}}
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
        >
          {btnLabel}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default OperatorsForm;
