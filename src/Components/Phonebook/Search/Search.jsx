import React from 'react';
import PropTypes from "prop-types";

const Search = ({value, onChange}) => {
  return (
    <div>
      <input 
        type='text'
        name='filter'
        onChange={onChange}
        value={value} // значение = вводимые символы в инпуте
      />
    </div>

  );

}

Search.propTypes = {
    value: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Search;