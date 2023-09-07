import React, {useState} from 'react';

const ValidatePlateGratingsTolerances = ({data}) => {
  const [validationMessages, setValidationMessages] = useState ([]);

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

  return (
    <div style={{color: 'red', fontWeight: 'bold'}}>
      {validationMessages.length > 0 &&
        <span>Моля попълнете формата както следва:</span>}
      <br />
      <ul>
        {validationMessages.map (vm => <li key={vm}>{vm}</li>)}
      </ul>
    </div>
  );
};

export default ValidatePlateGratingsTolerances;
