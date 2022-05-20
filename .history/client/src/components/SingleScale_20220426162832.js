import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listScales} from '../redux/actions/scalesActions';

const SingleScale = () => {
  return (
    <div>
      <div className="scale">
        <div className="content">

          <p>Везна №</p>
          <p>Материал</p>
          <p>Тегло в g</p>
        </div>
      </div>
    </div>
  );
};

export default SingleScale;
