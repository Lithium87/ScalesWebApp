import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      HEADER
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
