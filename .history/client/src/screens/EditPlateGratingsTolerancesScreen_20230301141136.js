import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import {
  listPlateGratingsTolerancesById,
  updatePlateGratingsTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditPlateGratingsTolerancesScreen = () => {
  return <div>EditPlateGratingsTolerancesScreen</div>;
};

export default EditPlateGratingsTolerancesScreen;
