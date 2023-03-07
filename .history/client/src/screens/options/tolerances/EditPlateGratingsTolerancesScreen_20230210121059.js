import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getPlateGratingsTolerancesById,
} from '../../../redux/actions/tolerancesActions';

const EditPlateGratingsTolerancesScreen = () => {
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

  return <div>EditPlateGratingsTolerancesScreen</div>;
};

export default EditPlateGratingsTolerancesScreen;
