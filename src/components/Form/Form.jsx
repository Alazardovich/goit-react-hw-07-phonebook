import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getItems } from "../../redux/contacts/contactsSelected";
// import PropTypes from "prop-types";
import { FormList } from "./CSSForm";
import { addContact } from "../../redux/contacts/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const [name, onName] = useState("");
  const [number, onNumber] = useState("");

  const nanoIdName = nanoid();
  const nanoIdTel = nanoid();

  const findContact = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.some((contact) => {
      return contact.name.toLowerCase() === normalizedName;
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const checkName = findContact(name);
    if (checkName) {
      return toast.error(`${name}is already in contacts`);
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    onName("");
    onNumber("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        onName(value);
        break;
      case "number":
        onNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <FormList onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor={nanoIdName}>Name</label>
      <input
        id={nanoIdName}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />

      <label htmlFor={nanoIdTel}>Number</label>
      <input
        id={nanoIdTel}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // eslint-disable-next-line no-unused-vars
        onChange={handleInputChange}
      />
      <button type="submit">Add contact</button>
    </FormList>
  );
};
export default ContactForm;

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nanoIdName = nanoid();
//   nanoIdTel = nanoid();

//   handleInputChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <FormList onSubmit={this.handleSubmit} autoComplete="off">
//         <label htmlFor={this.nanoIdName}>Name</label>
//         <input
//           id={this.nanoIdName}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleInputChange}
//         />

//         <label htmlFor={this.nanoIdTel}>Number</label>
//         <input
//           id={this.nanoIdTel}
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleInputChange}
//         />
//         <button type="submit">Add contact</button>
//       </FormList>
//     );
//   }
// }
// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default ContactForm;
