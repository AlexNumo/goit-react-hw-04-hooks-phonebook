import React from "react";
import PropTypes, { shape } from "prop-types";
import Contact from "../Contact/Contact";

const AddContact = ({ contacts, changeId }) => (
    <>
        <ul>
            {contacts.map(({ id, name, number }) => (
                <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                changeId={changeId}
                />
            ))}
        </ul>
    </>);

export default AddContact;

AddContact.propTypes = {
    contacts: PropTypes.arrayOf(
      shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  
    changeId: PropTypes.func,
  };