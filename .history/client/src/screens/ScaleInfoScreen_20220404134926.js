import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Table} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';
import {listOperators} from '../actions/operatorActions';
import {listMeasurementsPerScale} from '../actions/measurementsActions';

const ScaleInfoScreen = () => {
  return (
    <React.Fragment>
      <div>scaleInfo</div>
    </React.Fragment>
  );
};

export default ScaleInfoScreen;
