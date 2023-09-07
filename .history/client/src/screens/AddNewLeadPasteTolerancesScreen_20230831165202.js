import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LeadPasteTolerancesForm from '../components/LeadPasteTolerancesForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
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

  const validateForm = inputData => {
    let errors = {};

    if (!inputData.leadPasteName || inputData.leadPasteName.length < 5) {
      errors.leadPasteName =
        'Името на оловна паста е задължително и трябва да бъде дълго поне пет символа!';
    }
    if (!inputData.cardNumber || inputData.cardNumber <= 0) {
      errors.cardNumber =
        'Полето номер на карта е задължително и трябва да бъде цяло положително число!';
    }
    if (!inputData.nominalDensity || inputData.nominalDensity <= 0.0) {
      errors.nominalDensity =
        'Номиналната плътност трябва да бъде посочена и трябва да бъде положително число!';
    }
    if (
      !inputData.nominalDensityMin1 ||
      !inputData.nominalDensityMin2 ||
      !inputData.nominalDensityMax1 ||
      !inputData.nominalDensityMax2 ||
      inputData.nominalDensityMin1 <= 0.0 ||
      inputData.nominalDensityMin2 <= 0.0 ||
      inputData.nominalDensityMax1 <= 0.0 ||
      inputData.nominalDensityMax2 <= 0.0
    ) {
      errors.nominalDensityMin1 =
        'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!';
      errors.nominalDensityMin2 =
        'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде цяло положително число!';
      errors.nominalDensityMax1 =
        'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде цяло положително число!';
      errors.nominalDensityMax2 =
        'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде цяло положително число!';
    }

    return errors;
  };

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();

    setErrors (validateForm (data));
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
