import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Button, Table} from 'react-bootstrap';

const PlateGratingsTolerancesTable = ({
  data,
  selectedRows,
  handleRowSelection,
}) => {
  return (
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
          <th />
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
    </Table>
  );
};

export default PlateGratingsTolerancesTable;
