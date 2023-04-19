import React, {useState, useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  listOperators,
  createNewOperator,
} from '../../../redux/actions/operatorActions';

const OperatorsScreen = () => {
  const dispatch = useDispatch ();

  const operatorsList = useSelector (state => state.operatorsList);
  const {loading, error, operators} = operatorsList;

  useEffect (
    () => {
      dispatch (listOperators ());
    },
    [dispatch]
  );

  console.log (operators);

  return (
    <React.Fragment>
      <h3>Оператори</h3>

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

      <LinkContainer to={`../settings/operators/addNew`}>
        <Button className="shadow rounded btn btn-secondary btn-sm m3">
          Добави нов оператор
        </Button>
      </LinkContainer>
    </React.Fragment>
  );
};

export default OperatorsScreen;
