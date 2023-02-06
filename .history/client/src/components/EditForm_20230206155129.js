import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
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

  console.log (tolerancesById);

  return <div>EditForm</div>;
};

export default EditForm;
