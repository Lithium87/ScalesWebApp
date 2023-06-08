import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import OperatorForm from '../components/OperatorForm';
import {
  listOperatorById,
  updateOperatorById,
} from '../redux/actions/operatorActions';

const EditOperatorsScreen = ({
  data,
  zvenaList,
  handleChange,
  handleSubmit,
  editable,
}) => {
  return (
    <OperatorForm
      data={data}
      zvenaList={zvenaList}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      editable={true}
    />
  );
};

export default EditOperatorsScreen;
