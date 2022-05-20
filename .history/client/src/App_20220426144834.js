import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import ScaleInfoScreen from './screens/ScaleInfoScreen';
import ArchiveDataViewingScreen from './screens/ArchiveDataViewingScreen';
import PlateTolerancesScreen from './screens/tolerances/PlateTolerancesScreen';
import GratingTolerancesScreen
  from './screens/tolerances/GratingTolerancesScreen';

const App = () => {
  return (
    <Router>
      <Layout>
        <main className="py-3">
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/scale/:id" component={ScaleInfoScreen} />
            <Route
              exact
              path="/archive_data_viewing"
              component={ArchiveDataViewingScreen}
            />
            <Route
              exact
              path="/settings/plate_tolerances"
              component={PlateTolerancesScreen}
            />
            <Route
              exact
              path="/settings/gratings_tolerances"
              component={GratingTolerancesScreen}
            />
          </Container>
        </main>
      </Layout>
    </Router>
  );
};

export default App;
