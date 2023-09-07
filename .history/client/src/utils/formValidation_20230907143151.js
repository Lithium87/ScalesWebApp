export const validatePlateGratingsTolerancesForm = inputData => {
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

export const validateLeadPasteTolerancesForm = inputData => {
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
      'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!';
    errors.nominalDensityMax1 =
      'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!';
    errors.nominalDensityMax2 =
      'Отклонението от номиналната плътност трябва да бъде посочено и трябва да бъде положително число!';
  }

  return errors;
};
