import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from "./components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, addContact, deleteContact } from "./redux/contactsSlice";


function App() {
  const contacts = useSelector(selectContacts);
const dispatch = useDispatch();

const handleAddContact = (newContact) => {
  dispatch(addContact(newContact));
};

const handleDeleteContact = (id) => {
  dispatch(deleteContact(id));
};

 const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <SearchBox value={filter} onChange={setFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />

    </div>
  );
}


export default App;
