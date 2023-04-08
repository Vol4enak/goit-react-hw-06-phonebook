import React, { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import ContactForm from './ContantForm/contactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const deleteContact = idContact => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idContact)
    );
  };

  const formSubmitHandler = (name, number) => {
    const onFindSame = visibleContact();

    const res = onFindSame.find(
      index => index.name.toLowerCase() === name.toLowerCase()
    );

    if (res) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  useEffect(() => {
    const contact = localStorage.getItem('contacts');
    if (contact) {
      const parsetCont = JSON.parse(contact);
      setContacts(parsetCont);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterByName = data => {
    setFilter(data);
  };
  const visibleContact = () => {
    const normalaizedfilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizedfilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} onFilter={filterByName} />

      <h2>Contacts</h2>

      <Filter onChange={filterByName} />

      <ContactList items={visibleContact} onDeleteContact={deleteContact} />
    </Container>
  );
}
