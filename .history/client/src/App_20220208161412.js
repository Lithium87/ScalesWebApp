import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          HOME
        </Container>
      </main>
      FOOTER
    </Router>
  );
};

export default App;
