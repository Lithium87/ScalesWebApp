import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      HEADER
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>
      Footer
    </Router>
  );
};

export default App;
