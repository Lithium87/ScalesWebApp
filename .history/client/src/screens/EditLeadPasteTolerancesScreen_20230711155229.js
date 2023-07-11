import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LeadPasteTolerancesForm from '../components/LeadPasteTolerancesForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import {
  listLeadPasteTolerancesById,
  updateLeadPasteTolerancesById,
} from '../redux/actions/tolerancesActions';

const EditLeadPasteTolerancesScreen = () => {
  const [data, setData] = useState ({
    leadPasteName: '',
    cardNumber: 0,
    nominalDensity: 0.0,
    nominalDensityMin1: 0.0,
    nominalDensityMin2: 0.0,
    nominalDensityMax1: 0.0,
    nominalDensityMax2: 0.0,
  });

  const dispatch = useDispatch ();

  const {id} = useParams ();

  const leadPasteTolerancesById = useSelector (
    state => state.leadPasteTolerancesById
  );
  const {
    loading,
    error,
    leadPasteTolerancesById: tolerancesById,
  } = leadPasteTolerancesById;

  const leadPasteTolerancesByIdUpdate = useSelector (
    state => state.leadPasteTolerancesByIdUpdate
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
  } = leadPasteTolerancesByIdUpdate;

  useEffect (
    () => {
      dispatch (listLeadPasteTolerancesById (id));
    },
    [dispatch, id]
  );

  useEffect (
    () => {
      if (tolerancesById) {
        setData ({
          id: tolerancesById.id,
          leadPasteName: tolerancesById.leadPasteName,
          cardNumber: tolerancesById.cardNumber,
          nominalDensity: tolerancesById.nominalDensity,
          nominalDensityMin1: tolerancesById.nominalDensityMin1,
          nominalDensityMin2: tolerancesById.nominalDensityMin2,
          nominalDensityMax1: tolerancesById.nominalDensityMax1,
          nominalDensityMax2: tolerancesById.nominalDensityMax2,
        });
      }
    },
    [tolerancesById]
  );

  console.log (tolerancesById);

  const handleChange = e => {
    console.log (e.target.name);
    setData ({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault ();

    if (
      !data.leadPasteName ||
      !data.cardNumber ||
      !data.nominalDensity ||
      !data.nominalDensityMin1 ||
      !data.nominalDensityMin2 ||
      !data.nominalDensityMax1 ||
      !data.nominalDensityMax2
    ) {
      alert ('Всички полета са задължителни!');
      return;
    }

    dispatch (updateLeadPasteTolerancesById (data));

    setData ({
      leadPasteName: '',
      cardNumber: 0,
      nominalDensity: 0.0,
      nominalDensityMin1: 0.0,
      nominalDensityMin2: 0.0,
      nominalDensityMax1: 0.0,
      nominalDensityMax2: 0.0,
    });
  };

  return (
    <React.Fragment>
      <Link
        to="/settings/lead_paste_tolerances"
        className="shadow rounded btn btn-secondary btn-sm m-3"
      >
        Обратно към таблицата с допуски
      </Link>

      <FormContainer>
        <h3>Редактиране на допуски на оловна паста</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading
          ? <Loader />
          : error
              ? <Message variant="danger">{error}</Message>
              : <LeadPasteTolerancesForm
                  data={data}
                  onSubmit={submitHandler}
                  onChange={handleChange}
                  btnLabel="Редактирай"
                />}
      </FormContainer>
    </React.Fragment>
  );
};

export default EditLeadPasteTolerancesScreen;
