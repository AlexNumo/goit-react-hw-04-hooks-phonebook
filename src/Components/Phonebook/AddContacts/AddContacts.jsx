import React from 'react';
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";


const AddContacts = ({contacts, onDelete}) => (

        <ul>
            {contacts.map(({name, number, id}) => (
                <li key={id}>
                    <Contact name={name} number={number}/>
                    <button onClick={() => onDelete(id)}>Удалить</button>
                </li>))}
        </ul>

    )
;

AddContacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
        })
    ),
    onDelete: PropTypes.func.isRequired
}


export default AddContacts;