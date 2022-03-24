import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import SingleScale from '../components/SingleScale';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {listScales} from '../actions/scalesActions';

const HomeScreen = () => {
  const dispatch = useDispatch ();

  const scalesList = useSelector (state => state.scalesList);
  const {loading, error, scales} = scalesList;

  useEffect (
    () => {
      dispatch (listScales ());
    },
    [dispatch]
  );

  return <div>scales</div>;
};

export default HomeScreen;