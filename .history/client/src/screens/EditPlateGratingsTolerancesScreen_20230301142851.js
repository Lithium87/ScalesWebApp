import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {
  listPlateGratingsTolerancesById,
  updatePlateGratingsTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditPlateGratingsTolerancesScreen = () => {
  const [plateGridName, setPlateGridName] = useState ('');
  const [cardNumber, setCardNumber] = useState (0);
  const [nominal, setNominal] = useState (0);
  const [nominalMin1, setNominalMin1] = useState (0);
  const [nominalMin2, setNominalMin2] = useState (0);
  const [nominalMax1, setNominalMax1] = useState (0);
  const [nominalMax2, setNominalMax2] = useState (0);

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
