import React from 'react';
import "./css/App.css";
import { useState, useEffect } from 'react';

import Form from './components/Form/Form';
import Search from './components/Search/Search';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  //Add Contacts//
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  };

  //Search Contacts//


  //Delete Contact//
  const deleteContact = (contactId) => { };

  return (
    <div>
      <h1>PhoneBook</h1>
      <Form onAdd={addContact} />
      <Search />
      < ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  )
}

export default App