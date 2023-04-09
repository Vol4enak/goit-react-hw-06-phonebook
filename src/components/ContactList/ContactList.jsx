import React from 'react';
import PropTypes from 'prop-types';
import { deleteContact} from 'redux/contactLogic';
import { useSelector, useDispatch } from 'react-redux';
import { ContactInfo, ContactButtom } from './ContactList.styled';

export const ContactList = () => {
  const stateContacts = useSelector(state => state.phoneBook.contacts);
  const dispatch = useDispatch();
  
  return (
    <>
      <ul>
        {stateContacts.map(({ id, name, number }) => (
          <ContactInfo key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <ContactButtom
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
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
