import React from 'react';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';

const SearchForm = ({
  materialValue,
  changeMaterialValue,
  checkedMaterial,
  handleChangeMaterials,
  operatorValue,
  changeOperatorValue,
  checkedOperator,
  handleChangeOperators,
  handleFilters,
  measurementsPerScale,
  operators,
}) => {
  return (
    <React.Fragment>
      <FormContainer>
        <h2>Търсене по:</h2>
        <Form onSubmit={handleFilters} className="form-container">
          <div className="form-item">
            <Form.Label htmlFor="fromDate">От дата</Form.Label>
            <Form.Control
              type="date"
              id="fromDate"
              defaultValue="От дата"
              title="Choose your date"
              style={{
                maxHeight: '25px',
              }}
            />
          </div>

          <div className="form-item">
            <Form.Label htmlFor="toDate">До дата</Form.Label>
            <Form.Control
              type="date"
              id="toDate"
              defaultValue="До дата"
              title="Choose your date"
              style={{
                maxHeight: '25px',
              }}
            />
          </div>

          <div className="form-item">
            <Form.Label htmlFor="material">Материал: </Form.Label>
            <Form.Select
              size="sm"
              value={materialValue}
              onChange={changeMaterialValue}
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
              id="material"
              onChange={handleChangeMaterials}
              label="За всички материали"
            />
          </div>

          <div className="form-item">
            <Form.Label htmlFor="operator">Оператор: </Form.Label>
            <Form.Select
              size="sm"
              value={operatorValue}
              onChange={changeOperatorValue}
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
              id="operator"
              onChange={handleChangeOperators}
              label="За всички оператори"
            />
          </div>

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
