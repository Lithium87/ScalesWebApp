import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
        FOOTER
      </div>
    </Router>
  );
};

export default App;