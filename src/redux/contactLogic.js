import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initialState = {
  contacts: [],
  filter: '',
};

export const ContactSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleteContact(state, actions) {
      console.log(actions);
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
    formSubmitHandler(state, actions) {
      const res = state.contacts.find(
        index => index.name.toLowerCase() === actions.payload.name.toLowerCase()
      );

      if (res) {
        alert(`${actions.payload.name} is already in contacts`);
        return;
      }

      state.contacts.push({
        id: nanoid(),
        name: actions.payload.name,
        number: actions.payload.number,
      });
    },
    visibleContact(state) {
      const normalaizedfilter = state.filter.toLocaleLowerCase();
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalaizedfilter)
      );
    },
    trowFilterValue(state, actions) {
      state.filter = actions.payload;
      console.log(state.filter);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteContact,
  trowFilterValue,
  formSubmitHandler,
  visibleContact,
} = ContactSlice.actions;
