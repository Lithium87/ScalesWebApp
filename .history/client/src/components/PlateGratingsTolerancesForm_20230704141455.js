import React from 'react';
import {Button, Form} from 'react-bootstrap';

const PlateGratingsTolerancesForm = ({data, onSubmit, onChange, btnLabel}) => {
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
        />
      </Form.Group>

      <Form.Group controlId="cardNumber">
        <Form.Label>Карта №</Form.Label>
        <Form.Control
          name="cardNumber"
          type="number"
          placeholder="Карта №"
          value={data.cardNumber || 0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominal">
        <Form.Label>Номинал</Form.Label>
        <Form.Control
          name="nominal"
          type="number"
          placeholder="Номинал"
          value={data.nominal || 0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalMin1">
        <Form.Label>Номинал (-)</Form.Label>
        <Form.Control
          name="nominalMin1"
          type="number"
          placeholder="Номинал (-)"
          value={data.nominalMin1 || 0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalMin2">
        <Form.Label>Номинал (--)</Form.Label>
        <Form.Control
          name="nominalMin2"
          type="number"
          placeholder="Номинал (--)"
          value={data.nominalMin2 || 0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalMax1">
        <Form.Label>Номинал (+)</Form.Label>
        <Form.Control
          name="nominalMax1"
          type="number"
          placeholder="Номинал (+)"
          value={data.nominalMax1 || 0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalMax2">
        <Form.Label>Номинал (++)</Form.Label>
        <Form.Control
          name="nominalMax2"
          type="number"
          placeholder="Номинал (++)"
          value={data.nominalMax2 || 0}
          onChange={onChange}
        />
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
