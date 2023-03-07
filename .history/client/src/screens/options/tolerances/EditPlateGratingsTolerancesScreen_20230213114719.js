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

  useEffect (
    () => {
      getPlateGratingsTolerancesById (id);
    },
    [dispatch, id]
  );

  const submitHandler = e => {};

  return (
    <React.Fragment>
      <h3>Редактиране на допуски</h3>

      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">{error}</Message>
            : <Form onSubmit={submitHandler} />}
    </React.Fragment>
  );
};

export default EditPlateGratingsTolerancesScreen;
