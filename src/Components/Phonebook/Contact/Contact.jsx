import React from "react";
import PropTypes from "prop-types";

const Contact = ({ id, name, number, changeId }) => {
  return (
    <li key={id}>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" id={id} onClick={changeId}>
        Удалить
      </button>
    </li>
  );
};
export default Contact;

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
