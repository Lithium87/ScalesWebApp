import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import SingleScale from '../components/SingleScale';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {listScales} from '../actions/scalesActions';

const HomeScreen = () => {
  const dispatch = useDispatch ();

  const listScales = useSelector (state => state.listScales);
  const {loading, error, scales} = listScales;

  console.log (scales);

  useEffect (
    () => {
      dispatch (listScales ());
    },
    [dispatch, listScales]
  );

  return <div>scales</div>;
};

export default HomeScreen;
