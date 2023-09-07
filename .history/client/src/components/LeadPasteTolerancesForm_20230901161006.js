import React from 'react';
import {Button, Form} from 'react-bootstrap';

function LeadPasteTolerancesForm({data, errors, onSubmit, onChange, btnLabel}) {
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
          style={{border: errors.leadPasteName ? '1px solid red' : null}}
        />
        {errors.leadPasteName
          ? <p style={{color: 'red'}}>
              Името на оловна паста е задължително и трябва да бъде дълго поне пет символа!
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

      <Form.Group controlId="nominalDensity">
        <Form.Label>Номинална плътност</Form.Label>
        <Form.Control
          name="nominalDensity"
          type="number"
          placeholder="Номинална плътност"
          value={data.nominalDensity || 0.0}
          onChange={onChange}
          style={{border: errors.nominalDensity ? '1px solid red' : null}}
        />
        {errors.nominalDensity
          ? <p style={{color: 'red'}}>
              Номиналната плътност трябва да бъде посочена и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalDensityMin1">
        <Form.Label>Номинална плътност (-)</Form.Label>
        <Form.Control
          name="nominalDensityMin1"
          type="number"
          placeholder="Номинална плътност (-)"
          value={data.nominalDensityMin1 || 0.0}
          onChange={onChange}
          style={{border: errors.nominalDensityMin1 ? '1px solid red' : null}}
        />
        {errors.nominalDensityMin1
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalDensityMin2">
        <Form.Label>Номинална плътност (--)</Form.Label>
        <Form.Control
          name="nominalDensityMin2"
          type="number"
          placeholder="Номинална плътност (--)"
          value={data.nominalDensityMin2 || 0.0}
          onChange={onChange}
          style={{border: errors.nominalDensityMin2 ? '1px solid red' : null}}
        />
        {errors.nominalDensityMin2
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalDensityMax1">
        <Form.Label>Номинална плътност (+)</Form.Label>
        <Form.Control
          name="nominalDensityMax1"
          type="number"
          placeholder="Номинална плътност (+)"
          value={data.nominalDensityMax1 || 0.0}
          onChange={onChange}
          style={{border: errors.nominalDensityMax1 ? '1px solid red' : null}}
        />
        {errors.nominalDensityMax1
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!
            </p>
          : null}
      </Form.Group>

      <Form.Group controlId="nominalDensityMax2">
        <Form.Label>Номинална плътност (++)</Form.Label>
        <Form.Control
          name="nominalDensityMax2"
          type="number"
          placeholder="Номинална плътност (++)"
          value={data.nominalDensityMax2 || 0.0}
          onChange={onChange}
          style={{border: errors.nominalDensityMax2 ? '1px solid red' : null}}
        />
        {errors.nominalDensityMax2
          ? <p style={{color: 'red'}}>
              Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!
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
}

export default LeadPasteTolerancesForm;
