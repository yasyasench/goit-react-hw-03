import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import css from "./ContactList.module.css";

const ContactList = ({contacts, onDelete}) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactItem data={contacts} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList