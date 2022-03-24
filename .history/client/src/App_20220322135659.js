import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
