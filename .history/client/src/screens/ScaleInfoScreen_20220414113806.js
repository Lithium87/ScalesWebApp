import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';
import {listMeasurementsPerScale} from '../actions/measurementsActions';

const ScaleInfoScreen = () => {
  const [fromDate, setFromDate] = useState ('');
  const [toDate, setToDate] = useState ('');
  const [materialValue, setMaterialValue] = useState ('');
  const [operatorValue, setOperatorValue] = useState ('');
  const [checkedMaterial, setCheckedMaterial] = useState (false);
  const [checkedOperator, setCheckedOperator] = useState (false);

  const handleFilters = () => {};

  const changeMaterialValue = () => {};

  const handleChangeMaterials = () => {};

  const changeOperatorValue = () => {};

  const handleChangeOperators = () => {};

  return (
    <SearchForm
      handleFilters={handleFilters}
      changeMaterialValue={changeMaterialValue}
      handleChangeMaterials={handleChangeMaterials}
      changeOperatorValue={changeOperatorValue}
      handleChangeOperators={handleChangeOperators}
      materialValue={materialValue}
      operatorValue={operatorValue}
      checkedMaterial={checkedMaterial}
      checkedOperator={checkedOperator}
    />
  );
};

export default ScaleInfoScreen;
