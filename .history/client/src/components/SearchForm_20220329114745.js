import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';

const SearchForm = ({submitHandler}) => {
  return (
    <FormContainer>
      <h2>Търсене по:</h2>
      <Form onSubmit={submitHandler}>
        <Form.Label htmlFor="fromDate">От дата</Form.Label>
        <Form.Control
          type="date"
          id="fromDate"
          defaultValue="От дата"
          title="Choose your date"
        />

        <Form.Label htmlFor="fromDate">От дата</Form.Label>
        <Form.Control
          type="date"
          id="fromDate"
          defaultValue="От дата"
          title="Choose your date"
        />
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
