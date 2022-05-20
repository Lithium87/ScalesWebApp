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
import LeadPasteTolerancesScreen
  from './screens/tolerances/LeadPasteTolerancesScreen';
import PlateOperatorsScreen from './screens/operators/PlateOperatorsScreen';
import GratingsOperatorsScreen
  from './screens/operators/GratingsOperatorsScreen';

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
            <Route
              exact
              path="/settings/lead_paste_tolerances"
              component={LeadPasteTolerancesScreen}
            />
            <Route
              exact
              path="/settings/plate_operators"
              component={PlateOperatorsScreen}
            />
            <Route
              exact
              path="/settings/gratings_operators"
              component={GratingTolerancesScreen}
            />
          </Container>
        </main>
      </Layout>
    </Router>
  );
};

export default App;
