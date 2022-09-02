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
          <div className="row">
            <Form.Group className="form-item">
              <Form.Label htmlFor="fromDate">От дата</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                id="fromDate"
                value={fromDate}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="form-item">
              <Form.Label htmlFor="fromDate">От дата</Form.Label>
              <Form.Control
                type="date"
                size="sm"
                id="fromDate"
                value={fromDate}
                onChange={onChange}
              />
            </Form.Group>
          </div>

          <Form.Group className="form-item">
            <Form.Label htmlFor="material">Материал: </Form.Label>
            <Form.Select
              size="sm"
              id="material"
              value={material}
              onChange={onChange}
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

          <Form.Group className="form-item">
            <Form.Label htmlFor="operator">Оператор: </Form.Label>
            <Form.Select
              size="sm"
              id="operator"
              value={operator}
              onChange={onChange}
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
            className="btn btn-outline-secondary btn-sm"
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
