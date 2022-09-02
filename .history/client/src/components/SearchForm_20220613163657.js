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
            <Form.Control
              as="select"
              id="material"
              defaultValue={materialValue}
              onChange={changeMaterialValue}
              style={{maxHeight: '25px'}}
              disabled={checkedMaterial ? 'disabled' : ''}
            >
              {measurementsPerScale.measurementsPerScale
                ? measurementsPerScale.measurementsPerScale.map (
                    measurement => (
                      <option
                        key={measurement.id}
                        value={measurement.materialType}
                      >
                        {measurement.materialType}
                      </option>
                    )
                  )
                : null}
            </Form.Control>

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
              {operators &&
                operators.map (operator => (
                  <React.Fragment key={operator.id}>
                    <option>--Оператор--</option>
                    <option value={operator.operatorName}>
                      {operator.operatorName}
                    </option>
                  </React.Fragment>
                ))}
            </Form.Select>
            {/* <Form.Control
              as="select"
              id="operator"
              defaultValue={operatorValue}
              onChange={changeOperatorValue}
              style={{maxHeight: '25px'}}
              disabled={checkedOperator ? 'disabled' : ''}
            >
              {operators
                ? operators.map (operator => (
                    <option
                      key={operator.operatorName}
                      value={operator.operatorName}
                    >
                      {operator.operatorName}
                    </option>
                  ))
                : null}
            </Form.Control> */}

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
