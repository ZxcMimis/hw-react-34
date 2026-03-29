import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/thunk/contactsThunk";
import { selectVisibleContacts } from "../../redux/selector.js"
import styles from "./Contacts.module.scss";

export const Contacts = ({ deleteContact }) => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={styles.subtitle}>Contacts</h2>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <p className={styles.text}>
              {contact.name}: {contact.phone}
            </p>
            <button
              className={styles.delete}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};