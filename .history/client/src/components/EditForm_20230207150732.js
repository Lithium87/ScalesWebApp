import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import {
  getPlateGratingsTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditForm = () => {
  const dispatch = useDispatch ();

  const {id} = useParams ();

  const plateGratingsTolerancesById = useSelector (
    state => state.plateGratingsTolerancesById
  );
  const {
    loading,
    error,
    plateGratingsTolerancesById: tolerancesById,
  } = plateGratingsTolerancesById;

  useEffect (
    () => {
      dispatch (getPlateGratingsTolerancesById (id));
    },
    [dispatch, id]
  );

  return <div>EditForm</div>;
};

export default EditForm;
