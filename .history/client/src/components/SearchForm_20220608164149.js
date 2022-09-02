import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';
import Loader from './Loader';
import Message from './Message';
import {listOperators} from '../redux/actions/operatorActions';
import {listMeasurementsPerScale} from '../redux/actions/measurementsActions';

const SearchForm = ({
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

                  <div className="form-item">
                    <Form.Label htmlFor="operator">Оператор: </Form.Label>
                    <Form.Control
                      as="select"
                      id="operator"
                      defaultValue={operatorValue}
                      onChange={changeOperatorValue}
                      style={{maxHeight: '25px'}}
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
                    className="btn btn-sm"
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
