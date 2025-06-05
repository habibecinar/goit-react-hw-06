//kişi kartı,silme butonu
function Contact({ contact, onDelete }) {
    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
}
export default Contact;
