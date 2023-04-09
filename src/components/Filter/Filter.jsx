import React from 'react';
import { useDispatch } from 'react-redux';
import { trowFilterValue } from 'redux/contactLogic';
export function Filter() {
  const dispatch = useDispatch();


  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => {
          dispatch(trowFilterValue(e.currentTarget.value));
          
        }}
      />
    </>
  );
}
export default Filter;
