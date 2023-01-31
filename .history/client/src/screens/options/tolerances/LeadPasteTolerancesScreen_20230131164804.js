import React, {useEffect} from 'react';
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

  console.log (tolerances);
  console.log (typeof tolerances);

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
                          <Button className="shadow rounded btn btn-secondary btn-sm m-3">
                            Редактирай
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>}
    </React.Fragment>
  );
};

export default LeadPasteTolerancesScreen;
