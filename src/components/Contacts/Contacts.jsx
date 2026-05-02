import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, removeContact } from "../../redux/thunk/contactsThunk";
import { selectVisibleContacts } from "../../redux/selector.js";

import { AddContacts } from "../addContacts/addContacts";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <div className={`app-container background-dark ${styles.contactsWrapper}`}>
      <h1 className={styles.title}>Phonebook</h1>
      

      <AddContacts />
      
      <h2 className={styles.subtitle}>Contacts</h2>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <p className={styles.text}>
              {contact.name}: {contact.number || contact.phone}
            </p>
            <button
              className={styles.delete}
              onClick={() => handleDelete(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};