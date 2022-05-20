import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import SingleScale from '../components/SingleScale';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {listScales} from '../redux/actions/scalesActions';

const HomeScreen = () => {
  const dispatch = useDispatch ();

  const scalesList = useSelector (state => state.scalesList);
  const {loading, error, scales} = scalesList;

  useEffect (
    () => {
      dispatch (listScales ());
    },
    [dispatch]
  );

  return loading
    ? <Loader />
    : error
        ? <Message variant="danger">{error}</Message>
        : <Row>
            {scales.map (scale => (
              <Col key={scale.id} sm={12} md={6} lg={4} xl={3}>
                <Link to={`/scale/${scale.id}`}>
                  <SingleScale />
                </Link>
              </Col>
            ))}
          </Row>;
};

export default HomeScreen;
