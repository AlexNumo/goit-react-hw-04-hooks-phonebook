import { useState } from "react";
import { nanoid } from 'nanoid';
// import AddContacts from "./AddContacts/AddContacts";
import FormRender from "./FormRender/FormRender";
import Search from "./Search/Search";
import useLocalStorage from "./UseLocalStorage/useLocalStorage";
import PropTypes from "prop-types";

export default function Phonebook () {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

 const formSubmitHandler = ( name, number ) => {
    const newContact = {id: nanoid(), name, number}
    contacts.find(contact => contact.name === name) ?
      alert(`${name} is already in contacts`) :
      setContacts(state => [...state, newContact])
    }

  const onDelForId = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId))
    // alert(`You have deleted the contact ${contact.name}`);
  };

  const filterInputHandler = (input) => {
    setFilter(input.currentTarget.value)
  };
  
  const filtredContacts = () => {
    return contacts.filter((contacts) => contacts.name.toLowerCase().includes(filter.toLowerCase().trim()));
  }

    const handleSearch = (event) => {
      const { value } = event.currentTarget;
    filterInputHandler(value);
  };

    const changeId = onDelForId();
    const showContact = filtredContacts();

    return (
      <>
        <FormRender onSubmit={formSubmitHandler}/>
        <Search onSubmit={handleSearch} />
        {/* <AddContacts
          contacts={showContact}
          filter={filter}
          changeId={changeId}
        /> */}
      </>
    );
  }

// Phonebook.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   filter: PropTypes.string,
// };

// ===============================================FormRender==============================================================

// function FormRender () {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [id, setId] = useState("");

//   const handleChangeName = (event) => {
//     const nameInput = event.currentTarget.value;
//     return setName((name) => nameInput);
//   };

//   const handleChangeNumber = (event) => {
//     const numberInput = event.currentTarget.value;
//     return setNumber((number) => numberInput);
//   };
  
//   // function stopButton (event) {
//   //   event.preventDefault();
//   //   console.log("STOP BUTTON")
//   // }
//   function handleSubmit (event) {
//     if(event === null){
//       event.preventDefault()}
//     handleSubmit(setName, setNumber);
//     formReset();
//   };

//   const formReset = () => {
//     setName("");
//     setNumber("");
//   };
//     return (
//       <>
//         <h2>Add contact</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Имя
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               value={name}
//               onChange={handleChangeName}
//               required
//             />
//           </label>
//           <label>
//             Телефон
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               value={number}
//               onChange={handleChangeNumber}
//               required
//             />
//           </label>
//           <button type="submit">Add to phonebook</button>
//         </form>
//       </>
//     );
//   }
// FormRender.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
