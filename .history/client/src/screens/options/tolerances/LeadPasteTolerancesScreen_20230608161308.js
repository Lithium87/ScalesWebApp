import React, {useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getAllLeadPasteTolerances,
} from '../../../redux/actions/tolerancesActions';

const LeadPasteTolerancesScreen = () => {
  const dispatch = useDispatch ();

  const allLeadPasteTolerances = useSelector (
    state => state.allLeadPasteTolerances
  );
  const {
    loading,
    error,
    allLeadPasteTolerances: tolerances,
  } = allLeadPasteTolerances;

  useEffect (
    () => {
      dispatch (getAllLeadPasteTolerances ());
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <h3>Допуски оловна паста</h3>

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
                id="lpTolerances"
                style={{background: 'white'}}
              >
                <thead>
                  <tr>
                    <th>Допуск №</th>
                    <th>Име на оловна паста</th>
                    <th>Карта №</th>
                    <th>Номинална плътност</th>
                    <th>Номинална плътност (-)</th>
                    <th>Номинална плътност (--)</th>
                    <th>Номинална плътност (+)</th>
                    <th>Номинална плътност (++)</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {tolerances &&
                    tolerances.map ((tolerance, i) => (
                      <tr key={tolerance.id}>
                        <td>{i + 1}</td>
                        <td>{tolerance.leadPasteName}</td>
                        <td>{tolerance.cardNumber}</td>
                        <td>{tolerance.nominalDensity}</td>
                        <td>{tolerance.nominalDensityMin1}</td>
                        <td>{tolerance.nominalDensityMin2}</td>
                        <td>{tolerance.nominalDensityMax1}</td>
                        <td>{tolerance.nominalDensityMax2}</td>
                        <td>
                          <LinkContainer
                            to={`../settings/lead_paste_tolerances/${tolerance.id}`}
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

      <LinkContainer
        to={`../settings/lead_paste_tollerances/undefined/addNewTolerances`}
      >
        <Button className="shadow rounded btn btn-secondary btn-sm m3">
          Добави нови допуски
        </Button>
      </LinkContainer>
    </React.Fragment>
  );
};

export default LeadPasteTolerancesScreen;
