import React from 'react';
import PropTypes from 'prop-types';
import { ContactInfo, ContactButtom } from './ContactList.styled';

export const ContactList = ({ items, onDeleteContact }) => {
  const visibleContact =  items();
  return (
    <>
      <ul>
        {visibleContact.map(({ id, name, number }) => (
          <ContactInfo key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <ContactButtom type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ContactButtom>
          </ContactInfo>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
ContactList.prorType = {
  items: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};