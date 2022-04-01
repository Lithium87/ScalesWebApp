import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';

const SearchForm = ({
  submitHandler,
  materialValue,
  changeMaterialValue,
  checkedMaterial,
  measurementsPerScale,
  handleChangeMaterials,
  operatorValue,
  changeOperatorValue,
  checkedOperators,
}) => {
  return (
    <FormContainer>
      <h2>Търсене по:</h2>
      <Form onSubmit={submitHandler}>
        <Form.Label htmlFor="fromDate">От дата</Form.Label>
        <Form.Control
          type="date"
          id="fromDate"
          defaultValue="От дата"
          title="Choose your date"
        />

        <Form.Label htmlFor="toDate">До дата</Form.Label>
        <Form.Control
          type="date"
          id="toDate"
          defaultValue="До дата"
          title="Choose your date"
        />

        <div>
          <Form.Label htmlFor="material">Материал: </Form.Label>
          <Form.Control
            type="select"
            id="material"
            defaultValue={materialValue}
            onChange={changeMaterialValue}
            style={{width: '200px', margin: '5px'}}
            disabled={checkedMaterial ? 'disabled' : ''}
          >
            {measurementsPerScale
              ? measurementsPerScale.map (mps => (
                  <option key={mps.id} value={mps.materialName}>
                    {mps.materialName}
                  </option>
                ))
              : null}
          </Form.Control>

          <Form.Check
            type="checkbox"
            id="material"
            onChange={handleChangeMaterials}
            label="За всички материали"
          />
        </div>

        <div>
          <Form.Label htmlFor="operator">Оператор: </Form.Label>
          <Form.Control
            type="select"
            id="operator"
            defaultValue={operatorValue}
            onChange={changeOperatorValue}
            style={{width: '200px', margin: '5px'}}
            disabled={checkedOperators}
          >
            options
          </Form.Control>
        </div>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
