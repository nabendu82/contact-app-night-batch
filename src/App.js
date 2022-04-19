import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  });

  const addContactHandler = contact => {
    console.log(contact)
    setContacts([...contacts, { id: contacts.length, ...contact }]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])

  const removeContact = id => {
    const newContact = contacts.filter(contact => contact.id !== id);
    setContacts(newContact);
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContact} />
    </div>
  );
}

export default App;
