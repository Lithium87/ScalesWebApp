import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listLeadPasteTolerancesById,
  updateLeadPasteTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditLeadPasteTolerancesScreen = () => {
  return <div>EditLeadPasteTolerancesScreen</div>;
};

export default EditLeadPasteTolerancesScreen;
