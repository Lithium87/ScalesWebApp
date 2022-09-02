import React from 'react';
import {Table} from 'antd';

const ScaleMeasurementTable = ({columns, dataSource}) => {
  return (
    <div className="table_wrapper">
      <Table column={columns} dataSource={dataSource} />
    </div>
  );
};

export default ScaleMeasurementTable;
