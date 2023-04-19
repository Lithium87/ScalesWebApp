import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listOperatorById,
  updateOperatorById,
  createNewOperator,
} from '../redux/actions/operatorActions';

const AddEditOperatorScreen = () => {
  const {operator} = useSelector (state => state.listOperatorById);

  const [data, setData] = useState ({
    operatorName: operator.operatorName || '',
    operatorCardNumber: operator.operatorCardNumber || 0,
    zvenoName: operator.zvenoName || '',
  });
  const [editMode, setEditMode] = useState (false);
  const [inputError, setInputError] = useState ('');

  const dispatch = useDispatch ();
  const history = useHistory ();

  const {operatorName, operatorCardNumber, zvenoName} = data;

  const {id} = useParams ();

  useEffect (
    () => {
      setData (operator);
    },
    [editMode, operator]
  );

  useEffect (
    () => {
      if (id) {
        setEditMode (true);
        dispatch (listOperatorById (id));
      }
    },
    [dispatch, id]
  );

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.value]: e.target.name,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();
    if (!operatorName || !operatorCardNumber || !zvenoName) {
      setInputError ('Всички полета са задължителни!');
    } else {
      if (editMode) {
        dispatch (updateOperatorById (data));
      } else {
        dispatch (createNewOperator (data));
      }

      history.push ('/settings/operators');
      setInputError ('');
    }
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
        {!editMode ? 'Добави оператор' : 'Редактирай оператор'}
        {inputError && <h3 style={{color: 'Red'}}>{inputError}</h3>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="operatorName">
            <Form.Label>Име на оператор</Form.Label>
            <Form.Control
              name="operatorName"
              type="text"
              placeholder="Име на оператор"
              defaultValue={editMode ? operator.operatorName : operatorName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="operatorCardNumber">
            <Form.Label>Карта №</Form.Label>
            <Form.Control
              name="operatorCardNumber"
              type="number"
              placeholder="Карта №"
              defaultValue={
                editMode ? operator.operatorCardNumber : operatorCardNumber
              }
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="zvenoName">
            <Form.Label>Звено</Form.Label>
            <Form.Control
              name="zvenoName"
              type="text"
              placeholder="zveno"
              defaultValue={editMode ? operator.zvenoName : zvenoName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Button
              type="submit"
              className="shadow rounded btn btn-secondary btn-sm m-3"
              onClick={handleSubmit}
            >
              {editMode ? 'Редактирай' : 'Добави нов'}
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default AddEditOperatorScreen;
