import React from 'react';
import { useDispatch } from 'react-redux';
import { trowFilterValue, visibleContact } from 'redux/contactLogic';
export function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => {
          dispatch(trowFilterValue(e.currentTarget.value));
          dispatch(visibleContact());
        }}
      />
    </>
  );
}
export default Filter;
