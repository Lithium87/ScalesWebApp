import React, {useState} from 'react';
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
  const [validationMessages, setValidationMessages] = useState ([]);

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

  const validateForm = () => {
    const {
      leadPasteName,
      cardNumber,
      nominalDensity,
      nominalDensityMin1,
      nominalDensityMin2,
      nominalDensityMax1,
      nominalDensityMax2,
    } = data;

    setValidationMessages ([]);
    let messages = [];

    if (!leadPasteName) {
      messages.push ('Името на оловна паста е задължително!');
    }
    if (leadPasteName.length < 5) {
      messages.push ('Името на оловна паста трябва да бъде поне пет символа!');
    }
    if (!cardNumber) {
      messages.push ('Полето номер на карта е задължително!');
    }
    if (cardNumber <= 0) {
      messages.push ('Номерът на карта трябва да е цяло положително число!');
    }
    if (!nominalDensity) {
      messages.push ('Номиналната плътност трябва да бъде посочена!');
    }
    if (nominalDensity <= 0.0) {
      messages.push ('Номиналната плътност трябва положително число!');
    }
    if (
      !nominalDensityMin1 ||
      !nominalDensityMin2 ||
      !nominalDensityMax1 ||
      !nominalDensityMax2
    ) {
      messages.push (
        'Отклонението от номиналната плътност трябва да бъде посочено!'
      );
    }
    if (
      nominalDensityMin1 <= 0.0 ||
      nominalDensityMin2 <= 0.0 ||
      nominalDensityMax1 <= 0.0 ||
      nominalDensityMax2 <= 0.0
    ) {
      messages.push (
        'Отклонението от номиналната плътност трябва да бъде положително число!'
      );
    }

    setValidationMessages (messages);
  };

  const handleSubmit = e => {
    e.preventDefault ();

    validateForm ();

    if (!validationMessages) {
      dispatch (createNewLeadPasteTolerances (data));
    }

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

export default AddNewLeadPasteTolerancesScreen;
