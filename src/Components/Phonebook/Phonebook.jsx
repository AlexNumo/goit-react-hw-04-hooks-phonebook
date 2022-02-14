import { useState, Component } from "react";
import { nanoid } from 'nanoid';
import AddContacts from "./AddContacts/AddContacts";
// import FormRender from "./FormRender/FormRender";
import Search from "./Search/Search";
import PropTypes from "prop-types";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = contact.name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  onDelForId = (evt) => {
    const list = this.state.contacts.filter(
      ({ id }) => id !== evt.currentTarget.id
    );
    alert(`You have deleted the contact ${evt.currentTarget.name}`);
    this.setState({ contacts: list });
  };

  filterInputHandler = (input) => {
    let inputLC = input.toLowerCase();
    this.setState({ filter: inputLC });
  };
  onFilter = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    } else {
      return contacts;
    }
  };
    handleSearch = (event) => {
      const { value } = event.currentTarget;
    this.filterInputHandler(value);
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.onFilter();
    const changeId = this.onDelForId;
    const formSubmitHandler = this.formSubmitHandler;
    const handleSearch = this.handleSearch;
    return (
      <>
        <FormRender onSubmit={formSubmitHandler}/>
        <Search onChange={handleSearch} />
        <AddContacts
          contacts={filtredContacts}
          filter={filter}
          changeId={changeId}
        />
      </>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

// ===============================================FormRender==============================================================

function FormRender () {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  const handleChangeName = (event) => {
    const nameInput = event.currentTarget.value;
    return setName((name) => nameInput);
  };

  const handleChangeNumber = (event) => {
    const numberInput = event.currentTarget.value;
    return setNumber((number) => numberInput);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(setName, setNumber);
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };
    return (
      <>
        <h2>Add contact</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleChangeName}
              required
            />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleChangeNumber}
              required
            />
          </label>
          <button type="submit">Add to phonebook</button>
        </form>
      </>
    );
  }
FormRender.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
