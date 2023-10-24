import React, {useState, useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getAllLeadPasteTolerances,
} from '../../../redux/actions/tolerancesActions';

const LeadPasteTolerancesScreen = () => {
  const [selectedRows, setSelectedRows] = useState ([]);
  const [data, setData] = useState ([]);

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

  useEffect (
    () => {
      if (tolerances) {
        setData (tolerances);
      }
    },
    [tolerances]
  );

  const handleRowSelection = (
    rowId,
    leadPasteName,
    cardNumber,
    nominalDensity,
    nominalDensityMin1,
    nominalDensityMin2,
    nominalDensityMax1,
    nominalDensityMax2
  ) => {
    if (selectedRows.includes (rowId)) {
      setSelectedRows (selectedRows.filter (id => id !== rowId));
    } else {
      setSelectedRows ([...selectedRows, rowId]);
    }

    const newData = data.map (row => {
      if (row.id === rowId) {
        return {
          ...row,
          leadPasteName,
          cardNumber,
          nominalDensity,
          nominalDensityMin1,
          nominalDensityMin2,
          nominalDensityMax1,
          nominalDensityMax2,
        };
      }
      return row;
    });
    setData (newData);
  };

  const loadSelected = () => {};

  const loadAll = () => {};

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
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes (tolerance.id)}
                            onChange={() =>
                              handleRowSelection (
                                tolerance.id,
                                tolerance.leadPasteName,
                                tolerance.cardNumber,
                                tolerance.nominalDensity,
                                tolerance.nominalDensityMin1,
                                tolerance.nominalDensityMin2,
                                tolerance.nominalDensityMax1,
                                tolerance.nominalDensityMax2
                              )}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>}

      <LinkContainer
        to={`../settings/lead_paste_tolerances/undefined/addNewTolerances`}
      >
        <Button className="shadow rounded btn btn-secondary btn-sm m3">
          Добави нови допуски
        </Button>
      </LinkContainer>

      <Button
        className="shadow rounded btn btn-secondary btn-sm m-3"
        onClick={loadSelected}
      >
        Зареди избраните допуски
      </Button>

      <Button
        className="shadow rounded btn btn-secondary btn-sm m-3"
        onClick={loadAll}
      >
        Зареди всички
      </Button>
    </React.Fragment>
  );
};

export default LeadPasteTolerancesScreen;
