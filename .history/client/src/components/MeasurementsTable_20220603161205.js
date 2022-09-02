import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import Message from './Message';
import Loader from './Loader';
import {getMeasurementsPerScale} from '../redux/actions/measurementsActions';
import {getAllOperators} from '../redux/actions/operatorActions';

const MeasurementsTable = () => {
  const dispatch = useDispatch ();

  const measurementsPerScale = useSelector (
    state => state.measurementsPerScale
  );
  const {loading, error, measurements} = measurementsPerScale;

  const operatorsList = useSelector (state => state.operatorsList);
  const {
    loading: loadingOperators,
    error: errorOperators,
    operators,
  } = operatorsList;

  return <div>MeasurementsTable</div>;
};

export default MeasurementsTable;
