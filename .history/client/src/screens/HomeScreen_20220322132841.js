import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import SingleScale from '../components/SingleScale';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {getAllScales} from '../actions/scaleActions';

const HomeScreen = () => {
  const dispatch = useDispatch ();

  const getScales = useSelector (state => state.getScales);
  const {loading, error, scales} = getScales;

  useEffect (
    () => {
      dispatch (getAllScales ());
    },
    [dispatch]
  );

  return (
    <Container>
      <main className="py-3">
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <Row>
                  {scales.map (scale => (
                    <Col key={scale.id} sm={12} md={6} lg={4} xl={3}>
                      <Link to="http://localhost:5000/api/scales">
                        <SingleScale />
                      </Link>
                    </Col>
                  ))}
                </Row>}
      </main>
    </Container>
  );
};

export default HomeScreen;