import React from 'react';
import { deleteContact} from 'redux/contactLogic';
import { useSelector, useDispatch } from 'react-redux';
import { ContactInfo, ContactButtom } from './ContactList.styled';
import contactsFiltration from 'components/services/contactsFiltration';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts);
  const toFilter = useSelector(state => state.phoneBook.filter);
  const filteredContacts = contactsFiltration(contacts, toFilter);
  console.log(filteredContacts);
  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
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
