import React from "react";
//import Avatar from "./Avatar";
import './ChatList.css';
import {ListGroup} from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationProvider.js'
import ReactShadowScroll from 'react-shadow-scroll';
 
export default function Conversations() {
  

  const {conversations, selectConversationIndex} = useConversations()

    return (
       <div className='chatlist'>
        <div className="userMeta">
        <ReactShadowScroll>
          <ListGroup variant='flush'>
                 {conversations.map((conversation, index) => (
                    <ListGroup.Item className='chatlist__item' 
                    key={index}
                    action
                    onClick={() => selectConversationIndex(index)}
                    active={conversation.selected}
                    >
                     {conversation.recipients.map(r => r.name).join(', ')}
                    </ListGroup.Item>
                 ))}
         
          </ListGroup>
          </ReactShadowScroll>
        </div>
      </div>
    );
  
}