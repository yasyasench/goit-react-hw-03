import React from 'react';
import "./css/App.css";
import { useState, useEffect } from 'react';

import ContactForm from "./components/ContactForm/ContactForm"
import Search from './components/Search/Search';
import ContactList from './components/ContactList/ContactList';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const getContactsFromStorage = JSON.parse(
      window.localStorage.getItem("contacts")
    );
    if (getContactsFromStorage) return getContactsFromStorage;

    return initialContacts;
  });

  //Add Contacts//
   const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contacts];
    });
  };

  //Search Contacts//
  const [filter, setFilter] = useState("");
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );


  //Delete Contact//
  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    })
  };

  //APP//
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <Search value={filter} onFilter={setFilter} />
      < ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App