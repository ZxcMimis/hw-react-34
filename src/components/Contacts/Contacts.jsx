import { useSelector } from "react-redux";
import  "./Contacts.scss";

export const Contacts = ({deleteContact}) => {
  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.filter)

  const filteredContacts = contacts.filter((contact) => contact.name.includes(filter))
  
  return (
    <>
      <h2 className="subtitle">Contacts</h2>
      <ul className="list">
        {filteredContacts.map((contact) => (
          <li className="item" key={contact.id}>
            <p className="text">
              {contact.name}: {contact.phone}
            </p>
            <button
              className="delete"
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