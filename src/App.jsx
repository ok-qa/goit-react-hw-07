import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Loader from "./components/Loader/Loader";
import css from "./App.module.css";
import { useSelector } from "react-redux";
import ErrorMessage from "./components/ErrorMsg/ErrorMsg";


function App() {
const isLoading = useSelector(state => state.contacts.loading);
const isError = useSelector(state => state.contacts.error);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;
