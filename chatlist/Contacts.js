import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';
import './ChatList.css';


export default function Contacts() {
  const { contacts } = useContacts()

  return ( 
    <div className='chatlist'>
        <div className="userMeta">
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item className='chatlist__item' 
         key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
     </div>
      </div>
  )
}