import {useState} from "react";
import {nanoid} from "nanoid";
import FormRender from "../Phonebook/FormRender/FormRender";
import AddContacts from "../Phonebook/AddContacts/AddContacts";
import Search from "../Phonebook/Search/Search";
import UseLocalStorage from "../Phonebook/UseLocalStorage/useLocalStorage";

const Phonebook = () => {

    const [contacts, setContacts] = UseLocalStorage('contacts', [])
    const [filter, setFilter] = useState('')

    const formSubmitHandler = (name, number) => {
        const newContact = {id: nanoid(), name, number}
        contacts.some(contact => contact.name === name) ? alert(`${name} is already in contacts!`) :
            setContacts(state => [...state, newContact])
    }

    const handleFilterChange = (event) => {
        setFilter(event.currentTarget.value)
    }

    const deleteContact = (contactId) => {
        setContacts(contacts.filter((contact) => contact.id !== contactId))
    }

    const visibleContacts = () => {
        return contacts.filter((contacts) => contacts.name.toLowerCase().includes(filter.toLowerCase().trim()))
    }

    const showContact = visibleContacts();

    return (
        <div>
            <h1>Phonebook</h1>
            <FormRender onSubmit={formSubmitHandler}/>
            <h2>Contacts</h2>
            <Search value={filter} onChange={handleFilterChange}/>
            <AddContacts contacts={showContact} onDelete={deleteContact}/>
        </div>
    )
}

export default Phonebook;
