import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteHandler = id => props.getContactId(id);
    
    return (
        <div className='ui celled list'>
            {props.contacts.map(contact => <ContactCard key={contact.id} contact={contact} clickHandler={deleteHandler} />)}
        </div>
    )
}

export default ContactList