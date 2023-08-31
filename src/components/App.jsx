// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ContactList';
import Loader from './Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPhones } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}

export default App;
