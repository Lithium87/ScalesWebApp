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
  const [validationMessages, setValidationMessages] = useState ([]);

  const dispatch = useDispatch ();

  const zvenaList = useSelector (state => state.zvenaList);

  useEffect (
    () => {
      dispatch (listZvena ());
    },
    [dispatch]
  );

  const validateForm = () => {
    const {operatorName, operatorCardNumber, zvenoName} = data;

    setValidationMessages ([]);
    let messages = [];

    if (!operatorName) {
      messages.push ('Полето име на оператор е задължително!');
    }
    if (!operatorCardNumber) {
      messages.push ('Полето номер на карта е задължително!');
    }
    if (operatorCardNumber <= 0) {
      messages.push ('Номерът на карта трябва да бъде цяло положително число!');
    }
    if (!zvenoName) {
      messages.push ('Звеното трябва да бъде посочено!');
    }

    setValidationMessages (messages);
  };

  const createOperatorHandler = e => {
    e.preventDefault ();

    validateForm ();

    if (!validationMessages) {
      dispatch (createOperator (data));
    }

    setData ({
      operatorName: '',
      operatorCardNumber: 0,
      zvenoName: '',
      zvenoId: 0,
    });
  };

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
        />
        <br />
        <div style={{color: 'red', fontWeight: 'bold'}}>
          {validationMessages.length > 0 &&
            <span>Моля попълнете формата както следва:</span>}
          <ul>
            {validationMessages.map (vm => <li key={vm}>{vm}</li>)}
          </ul>
        </div>
      </FormContainer>
    </React.Fragment>
  );
};

export default AddNewOperatorScreen;
