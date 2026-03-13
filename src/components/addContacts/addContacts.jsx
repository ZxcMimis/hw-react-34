import { Contacts } from "../Contacts/Contacts";
import { addContact, removeContact } from "../../redux/contactsSlice";
import './addContacts.scss';
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

export const AddContacts = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const editContacts = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name: name,
      phone: number,
      id: Date.now(),
    };
    dispatch(addContact(contact));
    form.reset();
  };

  const deleteContact = (id) => {
    dispatch(removeContact(id));
  };

  const filterContact = (e) => {
    const keyword = e.currentTarget.value;
    dispatch(filterContacts(keyword));
  };

  return (
    <>
      <h1 className="title">PHONEBOOK</h1>
      <form className="form" onSubmit={editContacts}>
        <p className="name">Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          className="nameInput"
        />
        <p className="phone">Number</p>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="phoneInput"
        />
        <button type="submit" className="btn">
          Add Contact
        </button>
      </form>
      
      <input
        type="text"
        placeholder="Filter"
        onInput={filterContact}
        className="phoneInput"
      />
      
      <Contacts deleteContact={deleteContact} />
    </>
  );
};