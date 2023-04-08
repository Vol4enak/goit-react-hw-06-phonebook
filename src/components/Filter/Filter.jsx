import React from 'react';
import PropTypes from 'prop-types';
export function Filter({ onChange }) {
  const trowValue = e => {
    const value = e.currentTarget.value;
    onChange(value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={trowValue} />
    </>
  );
}
export default Filter;
Filter.prorTypes = {
  onChange: PropTypes.func.isRequired,
};