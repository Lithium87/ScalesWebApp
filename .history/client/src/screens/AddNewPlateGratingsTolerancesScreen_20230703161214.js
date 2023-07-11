import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PlateGratingsTolerancesForm
  from '../components/PlateGratingsTolerancesForm';
import 'react-toastify/dist/ReactToastify.css';
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
  const [validationMessages, setValidationMessages] = useState ([]);

  const dispatch = useDispatch ();

  const newPlateGratingsTolerances = useSelector (
    state => state.newPlateGratingsTolerances
  );
  const {loading, error} = newPlateGratingsTolerances;

  const validateForm = () => {
    const {
      plateGridName,
      cardNumber,
      nominal,
      nominalMin1,
      nominalMin2,
      nominalMax1,
      nominalMax2,
    } = data;

    setValidationMessages ([]);
    let messages = [];

    if (!plateGridName) {
      messages.push ('Името на плоча / решетка е задължително!');
    }
    if (plateGridName.length < 3) {
      messages.push (
        'Името на плоча / решетка трябва да бъде дълго поне три символа!'
      );
    }
    if (!cardNumber) {
      messages.push ('Полето номер на карта е задължително!');
    }
    if (cardNumber <= 0) {
      messages.push ('Номерът на карта трябва да бъде цяло положително число!');
    }
    if (!nominal) {
      messages.push ('Номиналната стойност е задължителна!');
    }
    if (nominal <= 0) {
      messages.push (
        'Номиналната стойност трябва да бъде цяло положително число!'
      );
    }
    if (!nominalMin1 || !nominalMin2 || !nominalMax1 || !nominalMax2) {
      messages.push (
        'Отклонението от номиналната стойност трябва да бъде посочено!'
      );
    }
    if (
      nominalMin1 <= 0 ||
      nominalMin2 <= 0 ||
      nominalMax1 <= 0 ||
      nominalMax2 <= 0
    ) {
      messages.push (
        'Отклонението от номиналната стойнойст трябва да бъде цяло положително число!'
      );
    }

    setValidationMessages (messages);
  };

  const handleSubmit = e => {
    e.preventDefault ();

    validateForm ();

    if (validationMessages.length > 0) {
      return;
    }

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

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

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

export default AddNewPlateGratingsTolerancesScreen;
