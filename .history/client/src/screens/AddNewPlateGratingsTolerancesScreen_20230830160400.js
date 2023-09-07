import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PlateGratingsTolerancesForm
  from '../components/PlateGratingsTolerancesForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  createNewPlateGratingsTolerances,
} from '../redux/actions/tolerancesActions';

const AddNewPlateGratingsTolerancesScreen = () => {
  const [data, setData] = useState ({
    plateGridName: '',
    cardNumber: 0,
    nominal: 0,
    nominalMin1: 0,
    nominalMin2: 0,
    nominalMax1: 0,
    nominalMax2: 0,
  });
  const [errors, setErrors] = useState ({});
  const [submitting, setSubmitting] = useState (false);

  const dispatch = useDispatch ();

  const newPlateGratingsTolerances = useSelector (
    state => state.newPlateGratingsTolerances
  );
  const {loading, error} = newPlateGratingsTolerances;

  const validateForm = inputData => {
    let errors = {};

    if (!inputData.plateGridName || inputData.plateGridName.length < 3) {
      errors.plateGridName =
        'Името на плоча / решетка е задължително и трябва да бъде дълго поне три символа!';
    }
    if (!inputData.cardNumber || inputData.cardNumber <= 0) {
      errors.cardNumber =
        'Полето номер на карта е задължително и трябва да бъде цяло положително число!';
    }
    if (!inputData.nominal || inputData.nominal <= 0) {
      errors.nominal =
        'Номиналната стойност трябва да бъде посочена трябва да бъде цяло положително число!';
    }
    if (
      !inputData.nominalMin1 ||
      !inputData.nominalMin2 ||
      !inputData.nominalMax1 ||
      !inputData.nominalMax2 ||
      inputData.nominalMin1 <= 0 ||
      inputData.nominalMin2 <= 0 ||
      inputData.nominalMax1 <= 0 ||
      inputData.nominalMax2 <= 0
    ) {
      errors.nominalMin1 =
        'Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!';
      errors.nominalMin2 =
        'Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!';
      errors.nominalMax1 =
        'Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!';
      errors.nominalMax2 =
        'Отклонението от номиналната стойност трябва да бъде посочено и трябва да бъде положително число!';
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
    dispatch (createNewPlateGratingsTolerances (data));

    setData ({
      plateGridName: '',
      cardNumber: 0,
      nominal: 0,
      nominalMin1: 0,
      nominalMin2: 0,
      nominalMax1: 0,
      nominalMax2: 0,
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
        to="/settings/plate_gratings_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>

      <FormContainer>
        <h3>Добавяне на допуски на плочи / решетки</h3>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <PlateGratingsTolerancesForm
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

export default AddNewPlateGratingsTolerancesScreen;
