import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listLeadPasteTolerancesById,
  updateLeadPasteTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditLeadPasteTolerancesScreen = () => {
  const [leadPasteName, setLeadPasteName] = useState ('');
  const [cardNumber, setCardNumber] = useState (0);
  const [nominalDensity, setNominalDensity] = useState (0);
  const [nominalDensityMin1, setNominalDensityMin1] = useState (0);
  const [nominalDensityMin2, setNominalDensityMin2] = useState (0);
  const [nominalDensityMax1, setNominalDensityMax1] = useState (0);
  const [nominalDensityMax2, setNominalDensityMax2] = useState (0);

  const dispatch = useDispatch ();

  const history = useHistory ();

  const {id} = useParams ();

  const leadPasteTolerancesById = useSelector (
    state => state.leadPasteTolerancesById
  );
  const {
    loading,
    error,
    leadPasteTolerancesById: tolerancesById,
  } = leadPasteTolerancesById;

  useEffect (
    () => {
      dispatch (listLeadPasteTolerancesById (id));
    },
    [dispatch, id]
  );

  console.log (tolerancesById);

  return (
    <React.Fragment>
      <Link
        to="/settings/lead_paste_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>
    </React.Fragment>
  );
};

export default EditLeadPasteTolerancesScreen;
