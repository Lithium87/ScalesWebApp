import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import {Loader} from '../../../components/Loader';
import {Message} from '../../../components/Message';
import {
  allPlateGratingsTolerances,
} from '../../../redux/actions/tolerancesActions';

const PlateGratingsTolerancesScreen = () => {
  const dispatch = useDispatch ();

  const allPlateGratingsTolerances = useSelector (
    state => state.allPlateGratingsTolerances
  );
  const {loading, error, tolerances} = allPlateGratingsTolerances;

  useEffect (() => {
    dispatch (allPlateGratingsTolerances ());
  });

  return (
    <div>
      <h1>PlateGratingsTolerancesScreen</h1>
    </div>
  );
};

export default PlateGratingsTolerancesScreen;
