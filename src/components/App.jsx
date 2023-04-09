import React from 'react';
import { Container } from './App.styled';
import ContactForm from './ContantForm/contactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export function App() {

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter/>

      <ContactList />
    </Container>
  );
}
