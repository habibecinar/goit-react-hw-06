//formla kişi ekler
import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    function handleSubmit(event) {
      event.preventDefault();

      const newContact = {
        id: Date.now(), 
        name,
        number,
      };

      onAddContact(newContact);
      setName("");
      setNumber("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
    

}


export default ContactForm;
