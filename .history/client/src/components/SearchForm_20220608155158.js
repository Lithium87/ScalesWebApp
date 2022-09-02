import React from 'react';
import {DatePicker, Space, Checkbox} from 'antd';

const SearchForm = ({handleFilters}) => {
  return (
    <div>
      <form className="form-container" onSubmit={handleFilters}>
        <h2>Търсене по:</h2>

        <div>
          <Space direction="vertical">
            <DatePicker
              placeholder="От дата"
              className="date_picker"
              id="fromDate"
            />

            <DatePicker
              placeholder="До дата"
              className="date_picker"
              id="toDate"
            />
          </Space>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
