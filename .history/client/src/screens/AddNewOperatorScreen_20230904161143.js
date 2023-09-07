import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import OperatorsForm from '../components/OperatorsForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {createOperator} from '../redux/actions/operatorActions';
import {listZvena} from '../redux/actions/zvenaActions';

const AddNewOperatorScreen = () => {
  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
    zvenoId: 0,
  });
  const [errors, setErrors] = useState ({});
  const [submitting, setSubmitting] = useState (false);

  const dispatch = useDispatch ();

  const zvenaList = useSelector (state => state.zvenaList);

  useEffect (
    () => {
      dispatch (listZvena ());
    },
    [dispatch]
  );

  const validateForm = inputData => {
    let errors = {};

    if (!inputData.operatorName) {
      errors.operatorName = 'Името на оператор е задължително!';
    }
    if (!inputData.operatorCardNumber || inputData.operatorCardNumber <= 0) {
      errors.operatorCardNumber =
        'Полето номер на карта е задължително и трябва да бъде цяло положително число!';
    }
    if (!inputData.zvenoName) {
      errors.zvenoName = 'Звеното трябва да бъде посочено!';
    }

    return errors;
  };

  const createOperatorHandler = e => {
    e.preventDefault ();

    setErrors (validateForm (data));
    setSubmitting (true);

    dispatch (createOperator (data));

    setData ({
      operatorName: '',
      operatorCardNumber: 0,
      zvenoName: '',
      zvenoId: 0,
    });
  };

  const finishSubmit = () => {
    dispatch (createOperator (data));

    setData ({
      operatorName: '',
      operatorCardNumber: 0,
      zvenoName: '',
      zvenoId: 0,
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

  const operatorCreate = useSelector (state => state.operatorCreate);
  const {loading, error} = operatorCreate;

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <Link
        to="/settings/operators"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с оператори
      </Link>

      <FormContainer>
        <h3>Добавяне на нов оператор</h3>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <OperatorsForm
          data={data}
          zvenaList={zvenaList}
          onSubmit={createOperatorHandler}
          onChange={handleChange}
          btnLabel="Добави"
          errors={errors}
        />
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewOperatorScreen;
