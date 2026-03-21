import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../../redux/thunk/contactsThunk";
import styles from "./Contacts.module.scss";

export const Contacts = ({ deleteContact }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filteredContacts = items?.filter((contact) =>
    contact.name.toLowerCase().includes((filter || "").toLowerCase())
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={styles.subtitle}>Contacts</h2>
      <ul className={styles.list}>
        {filteredContacts?.map((contact) => (
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