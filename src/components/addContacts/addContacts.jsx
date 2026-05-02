import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/thunk/contactsThunk";
import { filterContacts } from "../../redux/filterSlice";
import styles from "./AddContacts.module.scss";

export const AddContacts = () => {
  const dispatch = useDispatch();

  const editContacts = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name: name,
      number: number,
    };
    
    dispatch(addContact(contact));
    form.reset();
  };

  const filterContact = (e) => {
    const keyword = e.currentTarget.value;
    dispatch(filterContacts(keyword));
  };

  return (
    <>
      {/* Форма добавления */}
      <form className={styles.form} onSubmit={editContacts}>
        <p className={styles.name}>Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces."
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
        placeholder="Search by name..."
        onChange={filterContact}
        className={styles.filterInput}
      />
    </>
  );
};