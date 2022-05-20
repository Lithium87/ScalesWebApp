﻿import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';
import Loader from './Loader';
import Message from './Message';
import {listOperators} from '../redux/actions/operatorActions';
import {listMeasurementsPerScale} from '../redux/actions/measurementsActions';

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
  const dispatch = useDispatch ();

  const {id} = useParams ();

  const measurementsPerScale = useSelector (
    state => state.measurementsPerScale
  );
  const {
    loading,
    error,
    measurementsPerScale: measurements,
  } = measurementsPerScale;

  const operatorsList = useSelector (state => state.operatorsList);
  const {operators} = operatorsList;

  useEffect (
    () => {
      dispatch (listMeasurementsPerScale (id));

      dispatch (listOperators ());
    },
    [dispatch, id]
  );

  return (
    <React.Fragment>
      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">
                This scale has no measurements!
              </Message>
            : <FormContainer>
                <h1>Търсене по:</h1>
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
                      {measurements
                        ? measurements.map (measurement => (
                            <option
                              key={measurement.id}
                              value={measurement.materialName}
                            >
                              {measurement.materialName}
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
                      disabled={checkedOperators ? 'disabled' : ''}
                    >
                      {operators
                        ? operators.map (operator => (
                            <option
                              key={operator.id}
                              value={operator.operatorName}
                            >
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

                  <Button
                    type="submit"
                    className="btn-block"
                    onClick={handleFilters}
                  >
                    Филтрирай
                  </Button>
                </Form>
              </FormContainer>}
    </React.Fragment>
  );
};

export default SearchForm;
