import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LeadPasteTolerancesForm from '../components/LeadPasteTolerancesForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {validateLeadPasteTolerancesForm} from '../utils/formValidation';
import {createNewLeadPasteTolerances} from '../redux/actions/tolerancesActions';

const AddNewLeadPasteTolerancesScreen = () => {
  const [data, setData] = useState ({
    leadPasteName: '',
    cardNumber: 0,
    nominalDensity: 0.0,
    nominalDensityMin1: 0.0,
    nominalDensityMin2: 0.0,
    nominalDensityMax1: 0.0,
    nominalDensityMax2: 0.0,
  });
  const [errors, setErrors] = useState ({});
  const [submitting, setSubmitting] = useState (false);

  const dispatch = useDispatch ();

  const newLeadPasteTolerances = useSelector (
    state => state.newLeadPasteTolerances
  );
  const {loading, error} = newLeadPasteTolerances;

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();

    setErrors (validateLeadPasteTolerancesForm (data));
    setSubmitting (true);
  };

  const finishSubmit = () => {
    dispatch (createNewLeadPasteTolerances (data));

    setData ({
      leadPasteName: '',
      cardNumber: 0,
      nominalDensity: 0.0,
      nominalDensityMin1: 0.0,
      nominalDensityMin2: 0.0,
      nominalDensityMax1: 0.0,
      nominalDensityMax2: 0.0,
    });
  };

  useEffect (
    () => {
      if (Object.keys (errors).length === 0 && submitting) {
        finishSubmit ();
      }
    },
    [errors]
  );

  return (
    <React.Fragment>
      <Link
        to="/settings/lead_paste_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>

      <FormContainer>
        <h3>Добавяне на допуски на оловна паста</h3>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <LeadPasteTolerancesForm
          data={data}
          onSubmit={handleSubmit}
          onChange={handleChange}
          btnLabel="Добави"
          errors={errors}
        />
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewLeadPasteTolerancesScreen;
