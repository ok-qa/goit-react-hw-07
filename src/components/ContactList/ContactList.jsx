import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
// import { selectContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const contacts = useSelector(fetchContacts);
  const searchValue = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {isLoading && !error ? (
      <Loader />
      ) : visibleContacts.length === 0 && !error ? (
        <p>Your Phonebook is empty. Start filling it in by adding your first contact</p>
      ) : (
      visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))
      )
      }


    </ul>
  );
};

export default ContactList;
