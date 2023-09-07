import React from 'react';
import {Button, Form} from 'react-bootstrap';

const PlateGratingsTolerancesForm = ({
  data,
  errors,
  onSubmit,
  onChange,
  btnLabel,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="plateGridName">
        <Form.Label>Име на плоча / решетка</Form.Label>
        <Form.Control
          name="plateGridName"
          type="text"
          placeholder="Име на плоча / решетка"
          value={data.plateGridName || ''}
          onChange={onChange}
          style={{border: errors.plateGridName ? '1px solid red' : null}}
        />
        {errors.plateGridName
          ? <p style={{color: 'red'}}>
              Името на плоча / решетка е задължително и трябва да бъде дълго поне три символа!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="cardNumber">
        <Form.Label>Карта №</Form.Label>
        <Form.Control
          name="cardNumber"
          type="number"
          placeholder="Карта №"
          value={data.cardNumber || 0}
          onChange={onChange}
          style={{border: errors.cardNumber ? '1px solid red' : null}}
        />
        {errors.cardNumber
          ? <p style={{color: 'red'}}>
              Полето номер на карта е задължително и трябва да бъде цяло положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominal">
        <Form.Label>Номинал</Form.Label>
        <Form.Control
          name="nominal"
          type="number"
          placeholder="Номинал"
          value={data.nominal || 0}
          onChange={onChange}
          style={{border: errors.nominal ? '1px solid red' : null}}
        />
        {errors.nominal
          ? <p style={{color: 'red'}}>
              Номиналната стойност трябва да бъде посочена трябва да бъде цяло положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalMin1">
        <Form.Label>Номинал (-)</Form.Label>
        <Form.Control
          name="nominalMin1"
          type="number"
          placeholder="Номинал (-)"
          value={data.nominalMin1 || 0}
          onChange={onChange}
          style={{border: errors.nominalMin1 ? '1px solid red' : null}}
        />
        {errors.nominalMin1
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalMin2">
        <Form.Label>Номинал (--)</Form.Label>
        <Form.Control
          name="nominalMin2"
          type="number"
          placeholder="Номинал (--)"
          value={data.nominalMin2 || 0}
          onChange={onChange}
          style={{border: errors.nominalMin2 ? '1px solid red' : null}}
        />
        {errors.nominalMin2
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalMax1">
        <Form.Label>Номинал (+)</Form.Label>
        <Form.Control
          name="nominalMax1"
          type="number"
          placeholder="Номинал (+)"
          value={data.nominalMax1 || 0}
          onChange={onChange}
          style={{border: errors.nominalMax1 ? '1px solid red' : null}}
        />
        {errors.nominalMax1
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalMax2">
        <Form.Label>Номинал (++)</Form.Label>
        <Form.Control
          name="nominalMax2"
          type="number"
          placeholder="Номинал (++)"
          value={data.nominalMax2 || 0}
          onChange={onChange}
          style={{border: errors.nominalMax2 ? '1px solid red' : null}}
        />
        {errors.nominalMax2
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group>
        <Button
          className="shadow rounded btn btn-secondary btn-sm m-3"
          onClick={onSubmit}
        >
          {btnLabel}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default PlateGratingsTolerancesForm;
