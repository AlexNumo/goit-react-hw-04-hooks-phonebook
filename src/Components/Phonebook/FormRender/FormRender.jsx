import {useState} from "react";
// import PropTypes from "prop-types";

export default function FormRender ({onSubmit}) {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name){
      case 'name':
          setName(value)
          break
      case 'number':
          setNumber(value)
          break
      default:
          return
  }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add to phonebook</button>
      </form>
    </>
  );
}
