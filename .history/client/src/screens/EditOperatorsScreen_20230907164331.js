import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import OperatorsForm from '../components/OperatorsForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {validateOperatorsForm} from '../utils/formValidation';
import {
  listOperatorById,
  updateOperatorById,
} from '../redux/actions/operatorActions';
import {listZvena} from '../redux/actions/zvenaActions';

const EditOperatorsScreen = () => {
  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
    zvenoId: null,
  });
  const [errors, setErrors] = useState ({});
  const [submitting, setSubmitting] = useState (false);

  const dispatch = useDispatch ();

  const {id} = useParams ();

  const operatorById = useSelector (state => state.operatorById);
  const {loading, error, operatorById: operator} = operatorById;

  const zvenaList = useSelector (state => state.zvenaList);

  const operatorByIdUpdate = useSelector (state => state.operatorByIdUpdate);
  const {loading: loadingUpdate, error: errorUpdate} = operatorByIdUpdate;

  useEffect (
    () => {
      dispatch (listOperatorById (id));

      dispatch (listZvena ());
    },
    [dispatch, id]
  );

  useEffect (
    () => {
      if (operator) {
        setData ({
          id: operator.id,
          operatorName: operator.operatorName,
          operatorCardNumber: operator.operatorCardNumber,
          zvenoName: zvenaList.zvena.zvenoName,
          zvenoId: zvenaList.zvena.zvenoId,
        });
      }
    },
    [operator, zvenaList]
  );

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();

    setErrors (validateOperatorsForm (data));
    setSubmitting (true);
  };

  const finishSubmit = () => {
    dispatch (updateOperatorById (data));

    setData ({
      operatorName: '',
      operatorCardNumber: 0,
      zvenoName: '',
      zvenoId: null,
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
        to="/settings/operators"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с оператори
      </Link>

      <FormContainer>
        <h3>Редактиране на оператори</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <OperatorsForm
                  data={data}
                  zvenaList={zvenaList}
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                  btnLabel="Редактирай"
                  errors={errors}
                />}
      </FormContainer>
    </React.Fragment>
  );
};

export default EditOperatorsScreen;
