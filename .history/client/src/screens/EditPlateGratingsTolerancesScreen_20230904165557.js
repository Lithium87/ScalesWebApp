import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PlateGratingsTolerancesForm
  from '../components/PlateGratingsTolerancesForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {validatePlateGratingsTolerancesForm} from '../utils/formValidation';
import {
  listPlateGratingsTolerancesById,
  updatePlateGratingsTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditPlateGratingsTolerancesScreen = () => {
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

  const {id} = useParams ();

  const plateGratingsTolerancesById = useSelector (
    state => state.plateGratingsTolerancesById
  );
  const {
    loading,
    error,
    plateGratingsTolerancesById: tolerancesById,
  } = plateGratingsTolerancesById;

  const plateGratingsTolerancesByIdUpdate = useSelector (
    state => state.plateGratingsTolerancesByIdUpdate
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
  } = plateGratingsTolerancesByIdUpdate;

  useEffect (
    () => {
      dispatch (listPlateGratingsTolerancesById (id));
    },
    [dispatch, id]
  );

  useEffect (
    () => {
      if (tolerancesById) {
        setData ({
          id: tolerancesById.id,
          plateGridName: tolerancesById.plateGridName,
          cardNumber: tolerancesById.cardNumber,
          nominal: tolerancesById.nominal,
          nominalMin1: tolerancesById.nominalMin1,
          nominalMin2: tolerancesById.nominalMin2,
          nominalMax1: tolerancesById.nominalMax1,
          nominalMax2: tolerancesById.nominalMax2,
        });
      }
    },
    [tolerancesById]
  );

  const handleChange = e => {
    console.log (e.target.name);
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault ();

    setErrors (validatePlateGratingsTolerancesForm (data));
    setSubmitting (true);
  };

  const finishSubmit = () => {
    dispatch (updatePlateGratingsTolerancesById (data));

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
        <h3>Редактиране на допуски плочи / решетки</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <PlateGratingsTolerancesForm
                  data={data}
                  onSubmit={submitHandler}
                  onChange={handleChange}
                  btnLabel="Редактирай"
                  errors={errors}
                />}
      </FormContainer>

    </React.Fragment>
  );
};

export default EditPlateGratingsTolerancesScreen;
