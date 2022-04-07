import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';
import {listOperators} from '../actions/operatorActions';
import {listMeasurementsPerScale} from '../actions/measurementsActions';

const SearchForm = ({
  submitHandler,
  materialValue,
  changeMaterialValue,
  checkedMaterial,
  handleChangeMaterials,
  operatorValue,
  changeOperatorValue,
  checkedOperators,
  handleChangeOperators,
  handleFilters,
}) => {
  const {scaleId} = useParams ();

  const dispatch = useDispatch ();

  const operatorsList = useSelector (state => state.operatorsList);
  const {operators} = operatorsList;

  const measurementsPerScale = useSelector (
    state => state.measurementsPerScale
  );
  const {scaleMeasurements} = measurementsPerScale;

  useEffect (
    () => {
      if (scaleId) {
        dispatch (listMeasurementsPerScale (scaleId));
      }

      dispatch (listOperators ());
    },
    [dispatch, scaleId]
  );

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
            as="select"
            id="material"
            defaultValue={materialValue}
            onChange={changeMaterialValue}
            style={{width: '200px', margin: '5px'}}
            disabled={checkedMaterial ? 'disabled' : ''}
          >
            {scaleMeasurements
              ? scaleMeasurements.map (mps => (
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
            as="select"
            id="operator"
            defaultValue={operatorValue}
            onChange={changeOperatorValue}
            style={{width: '200px', margin: '5px'}}
            disabled={checkedOperators}
          >
            {operators
              ? operators.map (operator => (
                  <option key={operator.id} value={operator.operatorName}>
                    {operator.operatorName}
                  </option>
                ))
              : null}
          </Form.Control>

          <Form.Check
            type="checkbox"
            id="operator"
            onChange={handleChangeOperators}
            label="За всички оператори"
          />
        </div>

        <Button type="submit" className="btn-block" onClick={handleFilters}>
          Филтрирай
        </Button>
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
