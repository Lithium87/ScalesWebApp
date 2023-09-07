import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PlateGratingsTolerancesForm
  from '../components/PlateGratingsTolerancesForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {validatePlateGratingsTolerancesForm} from '../utils/formValidation';
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

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();

    setErrors (validatePlateGratingsTolerancesForm (data));
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
