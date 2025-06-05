import Contact from "./Contact"

function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDeleteContact} />
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
