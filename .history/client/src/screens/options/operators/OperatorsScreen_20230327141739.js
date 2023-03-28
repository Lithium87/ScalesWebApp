import React, {useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {listOperators} from '../../../redux/actions/operatorActions';

const OperatorsScreen = () => {
  const dispatch = useDispatch ();

  const operatorsList = useSelector (state => state.operatprsList);
  const {loading, error, operatorsList: operators} = operatorsList;

  useEffect (
    () => {
      dispatch (listOperators ());
    },
    [dispatch]
  );

  console.log (operators);

  return <div>OperatorsScreen</div>;
};

export default OperatorsScreen;
