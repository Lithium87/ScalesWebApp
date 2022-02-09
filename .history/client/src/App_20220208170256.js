import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>

      <Route exact path="/" component={HomeScreen} />

    </Router>
  );
};

export default App;
