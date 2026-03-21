import { Contacts } from "../Contacts/Contacts";
import { addContact, removeContact } from "../../redux/thunk/contactsThunk";
import styles from "./AddContacts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";

export const AddContacts = () => {
    const contacts = useSelector((state) => state.contacts)
    const dispatch = useDispatch()

    
    const editContacts = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = form.elements.name.value
        const number = form.elements.number.value

        const contact = {
            name: name,
            number: number,
            
        };
        dispatch(addContact(contact))
        form.reset()
    }

      const deleteContact = (id) => {
        dispatch(removeContact(id))
      }

      const filterContact = (e) => {
        const keyword = e.currentTarget.value

        dispatch(filterContacts(keyword))
      }

  console.log(contacts);
  return (
    <>
      <h1 className={styles.title}>PHONEBOOK</h1>
      <form className={styles.form} onSubmit={editContacts}>
        <p className={styles.name}>Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={styles.nameInput}
        />
        <p className={styles.phone}>Number</p>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={styles.phoneInput}
        />
        <button type="submit" className={styles.btn}>
          Add Contact
        </button>
      </form>
      <input
          type="text"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Filter"
          onInput={filterContact}

          className={styles.phoneInput}
        />
      <Contacts deleteContact={deleteContact}/>
    </>
  );
};