import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import ScaleInfoScreen from './screens/ScaleInfoScreen';

const App = () => {
  return (
    <Router>
      <Layout>
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/:id" component={ScaleInfoScreen} />
          </Container>
        </main>
      </Layout>
    </Router>
  );
};

export default App;
