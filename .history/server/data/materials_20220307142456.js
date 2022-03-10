const {v4: uuidv4} = require ('uuid');

const materials = [
  {
    materialId: uuidv4 (),
    materialName: 'Плочи',
    cardNo: 111,
  },
  {
    materialId: uuidv4 (),
    materialName: 'Плочи (с четец на карти)',
    cardNo: 112,
  },
  {
    materialId: uuidv4,
    materialName: 'Решетки',
    cardNo: 113,
  },
  {
    materialName: 'Оловна паста',
    cardNo: 114,
  },
];
