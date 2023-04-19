import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import ScaleInfoScreen from './screens/ScaleInfoScreen';
import ArchiveDataViewingScreen from './screens/ArchiveDataViewingScreen';
import PlateGratingsTolerancesScreen
  from './screens/options/tolerances/PlateGratingsTolerancesScreen';
import EditPlateGratingsTolerancesScreen
  from './screens/EditPlateGratingsTolerancesScreen';
import EditLeadPasteTolerancesScreen
  from './screens/EditLeadPasteTolerancesScreen';
import LeadPasteTolerancesScreen
  from './screens/options/tolerances/LeadPasteTolerancesScreen';
import OperatorsScreen from './screens/options/operators/OperatorsScreen';
import EditOperatorsScreen from './screens/EditOperatorsScreen';
import AddNewOperator from './screens/AddNewOperator';
import PastingPassChangeScreen
  from './screens/options/passwords/PastingPassChangeScreen';
import FoundryPassChangeScreen
  from './screens/options/passwords/FoundryPassChangeScreen';
import SerialPortScreen from './screens/options/SerialPortScreen';

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
              path="/settings/plate_gratings_tolerances"
              component={PlateGratingsTolerancesScreen}
            />
            <Route
              exact
              path="/settings/plate_gratings_tolerances/:id"
              component={EditPlateGratingsTolerancesScreen}
            />
            <Route
              exact
              path="/settings/lead_paste_tolerances/:id"
              component={EditLeadPasteTolerancesScreen}
            />
            <Route
              exact
              path="/settings/lead_paste_tolerances"
              component={LeadPasteTolerancesScreen}
            />
            <Route
              exact
              path="/settings/operators"
              component={OperatorsScreen}
            />
            <Route
              exact
              path="/settings/operators/:id"
              component={EditOperatorsScreen}
            />
            <Route
              exact
              path="/settings/operators/addNew"
              component={AddNewOperator}
            />
            <Route
              exact
              path="/settings/pasting_industrial_unit_password_change"
              component={PastingPassChangeScreen}
            />
            <Route
              exact
              path="/settings/foundry_industrial_unit_password_change"
              component={FoundryPassChangeScreen}
            />
            <Route
              exact
              path="/settings/serial_port"
              component={SerialPortScreen}
            />
          </Container>
        </main>
      </Layout>
    </Router>
  );
};

export default App;
