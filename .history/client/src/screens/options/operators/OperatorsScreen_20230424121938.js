import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  listOperators,
  createOperator,
} from '../../../redux/actions/operatorActions';
import {
  CREATE_OPERATOR_RESET,
} from '../../../redux/constants/operatorConstants';

const OperatorsScreen = () => {
  const dispatch = useDispatch ();

  const history = useHistory ();

  const operatorsList = useSelector (state => state.operatorsList);
  const {loading, error, operators} = operatorsList;

  const operatorCreate = useSelector (state => state.operatorCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    operator: createdOperator,
  } = operatorCreate;

  // useEffect (
  //   () => {
  //     dispatch (listOperators ());
  //   },
  //   [dispatch]
  // );

  useEffect (
    () => {
      dispatch ({type: CREATE_OPERATOR_RESET});

      if (successCreate) {
        history.push (`../settings/operators/${createdOperator.id}`);
      } else {
        dispatch (listOperators ());
      }
    },
    [dispatch, successCreate, history, createdOperator]
  );

  console.log (operators);

  const createOperatorHandler = () => {
    dispatch (createOperator ());
  };

  return (
    <React.Fragment>
      <h3>Оператори</h3>

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading
        ? <Loader />
        : error
            ? <Message variant="danger">{error}</Message>
            : <Table
                striped
                bordered
                hover
                responsive
                className="table-sm"
                id="operators"
                style={{background: 'white'}}
              >
                <thead>
                  <tr>
                    <th>Оператор №</th>
                    <th>Име на оператор</th>
                    <th>Карта №</th>
                    <th>Звено</th>
                  </tr>
                </thead>
                <tbody>
                  {operators &&
                    operators.map ((operator, i) => (
                      <tr key={operator.id}>
                        <td>{i + 1}</td>
                        <td>{operator.operatorName}</td>
                        <td>{operator.operatorCardNumber}</td>
                        <td>{operator.zvenoName}</td>
                        <td>
                          <LinkContainer
                            to={`../settings/operators/${operator.id}`}
                          >
                            <Button className="shadow rounded btn btn-secondary btn-sm m3">
                              Редактирай
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>}

      <Button
        className="shadow rounded btn btn-secondary btn-sm m3"
        onClick={createOperatorHandler}
      >
        Добави оператор
      </Button>

      {/* <LinkContainer to={`../settings/operators/addNew`}>
        <Button className="shadow rounded btn btn-secondary btn-sm m3">
          Добави нов оператор
        </Button>
      </LinkContainer> */}
    </React.Fragment>
  );
};

export default OperatorsScreen;
