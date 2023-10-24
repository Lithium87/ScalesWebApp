import React, {useState, useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Loader from '../../../components/Loader';
import Message from '../../../components/Message';
import {
  getAllPlateGratingsTolerances,
} from '../../../redux/actions/tolerancesActions';

const PlateGratingsTolerancesScreen = () => {
  const [selectedRows, setSelectedRows] = useState ([]);
  const [data, setData] = useState ([]);

  const dispatch = useDispatch ();

  const allPlateGratingsTolerances = useSelector (
    state => state.allPlateGratingsTolerances
  );
  const {
    loading,
    error,
    allPlateGratingsTolerances: tolerances,
  } = allPlateGratingsTolerances;

  useEffect (
    () => {
      dispatch (getAllPlateGratingsTolerances ());
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
    plateGridName,
    cardNumber,
    nominal,
    nominalMin1,
    nominalMin2,
    nominalMax1,
    nominalMax2
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
          plateGridName,
          cardNumber,
          nominal,
          nominalMin1,
          nominalMin2,
          nominalMax1,
          nominalMax2,
        };
      }
      return row;
    });
    setData (newData);
  };

  const loadSelected = () => {
    const newData = data.filter (row => selectedRows.includes (row.id));
    setData (newData);
    console.log (newData);
    setSelectedRows ([]);
  };

  const loadAll = () => {
    setData (tolerances);

    <Table
      striped
      bordered
      hover
      responsive
      className="table-sm"
      id="pgTolerances"
      style={{background: 'white'}}
    >
      <thead>
        <tr>
          <th>Допуск №</th>
          <th>Име на плоча / решетка</th>
          <th>Карта №</th>
          <th>Номинал</th>
          <th>Номинал (-)</th>
          <th>Номинал (--)</th>
          <th>Номинал (+)</th>
          <th>Номинал (++)</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map ((tolerance, i) => (
            <tr key={tolerance.id}>
              <td>{i + 1}</td>
              <td>{tolerance.plateGridName}</td>
              <td>{tolerance.cardNumber}</td>
              <td>{tolerance.nominal}</td>
              <td>{tolerance.nominalMin1}</td>
              <td>{tolerance.nominalMin2}</td>
              <td>{tolerance.nominalMax1}</td>
              <td>{tolerance.nominalMax2}</td>
              <td>
                <LinkContainer
                  to={`../settings/plate_gratings_tolerances/${tolerance.id}`}
                >
                  <Button className="shadow rounded btn btn-secondary btn-sm m-3">
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
                      tolerance.plateGridName,
                      tolerance.cardNumber,
                      tolerance.nominal,
                      tolerance.nominalMin1,
                      tolerance.nominalMin2,
                      tolerance.nominalMax1,
                      tolerance.nominalMax2
                    )}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  };

  return (
    <React.Fragment>
      <h3>Допуски на плочи / решетки</h3>

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
                id="pgTolerances"
                style={{background: 'white'}}
              >
                <thead>
                  <tr>
                    <th>Допуск №</th>
                    <th>Име на плоча / решетка</th>
                    <th>Карта №</th>
                    <th>Номинал</th>
                    <th>Номинал (-)</th>
                    <th>Номинал (--)</th>
                    <th>Номинал (+)</th>
                    <th>Номинал (++)</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map ((tolerance, i) => (
                      <tr key={tolerance.id}>
                        <td>{i + 1}</td>
                        <td>{tolerance.plateGridName}</td>
                        <td>{tolerance.cardNumber}</td>
                        <td>{tolerance.nominal}</td>
                        <td>{tolerance.nominalMin1}</td>
                        <td>{tolerance.nominalMin2}</td>
                        <td>{tolerance.nominalMax1}</td>
                        <td>{tolerance.nominalMax2}</td>
                        <td>
                          <LinkContainer
                            to={`../settings/plate_gratings_tolerances/${tolerance.id}`}
                          >
                            <Button className="shadow rounded btn btn-secondary btn-sm m-3">
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
                                tolerance.plateGridName,
                                tolerance.cardNumber,
                                tolerance.nominal,
                                tolerance.nominalMin1,
                                tolerance.nominalMin2,
                                tolerance.nominalMax1,
                                tolerance.nominalMax2
                              )}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>}

      <LinkContainer
        to={`../settings/plate_gratings_tolerances/undefined/addNewTolerances`}
      >
        <Button className="shadow rounded btn btn-secondary btn-sm m-3">
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

export default PlateGratingsTolerancesScreen;
