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
  const {operator} = useSelector (state => state.operatorById);

  const [data, setData] = useState ({
    operatorName: '',
    operatorCardNumber: 0,
    zvenoName: '',
  });
  const [editMode, setEditMode] = useState (false);
  const [inputError, setInputError] = useState ('');

  let history = useHistory ();
  let dispatch = useDispatch ();

  const {id} = useParams ();

  useEffect (
    () => {
      setData (operator);
    },
    [operator, editMode]
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

  console.log ('ID: ', id);

  const handleChange = e => {
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();
    if (!data.operatorName || !data.operatorCardNumber || !data.zvenoName) {
      setInputError ('Всички полета са задължителни.');
    } else {
      if (editMode) {
        dispatch (updateOperatorById (operator));
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
        to="settings/operators"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с оператори
      </Link>

      <FormContainer>
        <h3>{!editMode ? 'Добави оператор' : 'Редактирай оператор'}</h3>
        {inputError && <h3 style={{color: 'red'}}>{inputError}</h3>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="operatorName">
            <Form.Label>Име на оператор</Form.Label>
            <Form.Control
              name="operatorName"
              type="text"
              placeholder="Име на оператор"
              defaultValue={editMode ? data.operatorName : ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="operatorCardNumber">
            <Form.Label>Карта №</Form.Label>
            <Form.Control
              name="operatorCardNumber"
              type="number"
              placeholder="Карта №"
              defaultValue={editMode ? data.operatorCardNumber : ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="zvenoName">
            <Form.Label>Звено</Form.Label>
            <Form.Control
              name="zvenoName"
              type="text"
              placeholder="Звено"
              defaultValue={editMode ? data.zvenoName : ''}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Button
              type="submit"
              className="shadow rounded btn btn-secondary btn-sm m-3"
              onClick={handleSubmit}
            >
              {!editMode ? 'Добави оператор' : 'Редактирай оператор'}
            </Button>
          </Form.Group>
        </Form>
      </FormContainer>
    </React.Fragment>
  );
};

export default AddEditOperatorScreen;
