import React,{useRef,useState} from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
import {useConversations} from '../contexts/ConversationProvider.js'
import {useContacts} from '../contexts/ContactsProvider.js'

import Contacts from './Contacts.js';

export default function NewConversationModal({closeModal}) {
	
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const { contacts } = useContacts()
  const { createConversation } = useConversations()
	
	function handleSubmit(e) {
    e.preventDefault()

    createConversation(selectedContactIds)
    closeModal()
  }

  function handleCheckboxChange(contactId) {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

	return(
		<>
		<br/>
		
		<Modal.Dialog>
		<Modal.Header closeButton>
   			 <Modal.Title>Create conversation</Modal.Title>
  		</Modal.Header>

			<Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
          <Button onClick={closeModal} variant="secondary">cancel</Button>
        </Form>
      </Modal.Body>
		</Modal.Dialog>
		</>
		)
}