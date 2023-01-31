import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getAllLeadPasteTolerances,
} from '../../../redux/actions/tolerancesActions';

const LeadPasteTolerancesScreen = () => {
  const dispatch = useDispatch ();

  const allLeadPasteTolerances = useSelector (
    state => state.allLeadPasteTolerances
  );
  const {
    loading,
    error,
    allLeadPasteTolerances: tolerances,
  } = allLeadPasteTolerances;

  useEffect (
    () => {
      dispatch (getAllLeadPasteTolerances ());
    },
    [dispatch]
  );

  console.log (tolerances);

  return <div>Lead Paste Tolerances Screen</div>;
};

export default LeadPasteTolerancesScreen;
