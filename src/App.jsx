import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from "./components/SearchBox";

function App() {
  const [contacts, setContacts] = useState([{id:1,name:"Kerem",number:"0124356"}]);
  const handleAddContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };
 const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

   const handleDeleteContact = (id) => {
     setContacts((prevContacts) =>
       prevContacts.filter((contact) => contact.id !== id)
     );
   };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
      <SearchBox value={filter} onChange={setFilter} />
    </div>
  );
}


export default App;
