import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import FormContainer from './FormContainer';

const SearchForm = ({submitHandler}) => {
  return (
    <FormContainer>
      <h2>Търсене по:</h2>
      <Form onSubmit={submitHandler}>
        <Form.Label htmlFor="exampleColorInput">Date picker</Form.Label>
        <Form.Control
          type="date"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
        />
      </Form>
    </FormContainer>
  );
};

export default SearchForm;
