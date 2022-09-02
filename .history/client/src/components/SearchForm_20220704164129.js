import React from 'react';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';

const SearchForm = ({
  material,
  checkedMaterial,
  handleChangeMaterials,
  operator,
  checkedOperator,
  handleChangeOperators,
  fromDate,
  toDate,
  onChange,
  handleFilters,
  measurementsPerScale,
  operators,
}) => {
  return (
    <React.Fragment>

      <FormContainer>
        <h2>Търсене по:</h2>
        <Form onSubmit={handleFilters} className="form-container">
          <Form.Group>
            <Form.Label htmlFor="fromDate">От дата</Form.Label>
            <Form.Control
              type="date"
              size="sm"
              id="fromDate"
              value={fromDate}
              onChange={onChange}
              className="form-item"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="toDate">До дата</Form.Label>
            <Form.Control
              type="date"
              size="sm"
              id="toDate"
              value={toDate}
              onChange={onChange}
              className="form-item"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="material">Материал: </Form.Label>
            <Form.Select
              size="sm"
              id="material"
              value={material}
              onChange={onChange}
              className="form-item"
              disabled={checkedMaterial ? true : false}
            >
              <option />
              {measurementsPerScale.measurementsPerScale &&
                measurementsPerScale.measurementsPerScale.map (mps => (
                  <option key={mps.id} value={mps.materialType}>
                    {mps.materialType}
                  </option>
                ))}
            </Form.Select>

            <Form.Check
              type="checkbox"
              id="materialCheck"
              onChange={handleChangeMaterials}
              label="За всички материали"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="operator">Оператор: </Form.Label>
            <Form.Select
              size="sm"
              id="operator"
              value={operator}
              onChange={onChange}
              className="form-item"
              disabled={checkedOperator ? true : false}
            >
              <option />
              {operators &&
                operators.map (operator => (
                  <option key={operator.id} value={operator.operatorName}>
                    {operator.operatorName}
                  </option>
                ))}
            </Form.Select>

            <Form.Check
              type="checkbox"
              id="operatorCheck"
              onChange={handleChangeOperators}
              label="За всички оператори"
            />
          </Form.Group>

          <Button
            type="submit"
            className="shadow-sm btn btn-secondary btn-sm"
            onClick={handleFilters}
          >
            Филтрирай
          </Button>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default SearchForm;
