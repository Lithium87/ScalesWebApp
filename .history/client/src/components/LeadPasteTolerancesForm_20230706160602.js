import React from 'react';
import {Button, Form} from 'react-bootstrap';

function LeadPasteTolerancesForm({data, onSubmit, onChange, btnLabel}) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="leadPasteName">
        <Form.Label>Име на оловна паста</Form.Label>
        <Form.Control
          name="leadPasteName"
          type="text"
          placeholder="Име на оловна паста"
          value={data.leadPasteName || ''}
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

      <Form.Group controlId="nominalDensity">
        <Form.Label>Номинална плътност</Form.Label>
        <Form.Control
          name="nominalDensity"
          type="number"
          placeholder="Номинална плътност"
          value={data.nominalDensity || 0.0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalDensityMin1">
        <Form.Label>Номинална плътност (-)</Form.Label>
        <Form.Control
          name="nominalDensityMin1"
          type="number"
          placeholder="Номинална плътност (-)"
          value={data.nominalDensityMin1 || 0.0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalDensityMin2">
        <Form.Label>Номинална плътност (--)</Form.Label>
        <Form.Control
          name="nominalDensityMin2"
          type="number"
          placeholder="Номинална плътност (--)"
          value={data.nominalDensityMin2 || 0.0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalDensityMax1">
        <Form.Label>Номинална плътност (+)</Form.Label>
        <Form.Control
          name="nominalDensityMax1"
          type="number"
          placeholder="Номинална плътност (+)"
          value={data.nominalDensityMax1 || 0.0}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group controlId="nominalDensityMax2">
        <Form.Label>Номинална плътност (++)</Form.Label>
        <Form.Control
          name="nominalDensityMax2"
          type="number"
          placeholder="Номинална плътност (++)"
          value={data.nominalDensityMax2 || 0.0}
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
}

export default LeadPasteTolerancesForm;
