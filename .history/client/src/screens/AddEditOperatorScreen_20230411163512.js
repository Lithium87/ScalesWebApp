import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {
  listOperatorById,
  updateOperatorById,
  createNewOperator,
} from '../redux/actions/operatorActions';

const AddEditOperatorScreen = () => {
  return <div>AddEditOperatorScreen</div>;
};

export default AddEditOperatorScreen;
