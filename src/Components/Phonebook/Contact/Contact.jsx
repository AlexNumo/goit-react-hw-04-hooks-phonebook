import React from 'react';
import PropTypes from 'prop-types'

const Contact = ({name, number}) => {
    return (
        <>
          <p>
            <span>{name}: </span>
            <span>{number}</span>
          </p>
        </>
    );
};

export default Contact;

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired

}