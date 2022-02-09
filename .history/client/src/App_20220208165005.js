import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </main>
      FOOTER
    </Router>
  );
};

export default App;
