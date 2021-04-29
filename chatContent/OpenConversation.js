import React,{ useState, useCallback } from "react";
import "./ChatContent.css";
import ChatItem from "./ChatItem";
import { useConversations } from '../contexts/ConversationProvider.js'
import Avatar from "../chatlist/Avatar.js";
import { Form, InputGroup,Button,ListGroup} from "react-bootstrap";
import ReactShadowScroll from 'react-shadow-scroll';

export default function OpenConversation() {
	 const [text, setText] = useState('')
	const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
	const { sendMessage, selectedConversation } = useConversations()

	function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(r => r.id),text
    )
    setText('')
  }

	return(
		 <ReactShadowScroll>
		<div className="d-flex flex-column flex-grow-1">
		 <ReactShadowScroll>
      <div className="flex-grow-1 overflow-auto">

        <div className="d-flex smooth flex-column align-items-start justify-content-end px-3">
       		
         		{selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-2 py-1 ${message.fromMe ? 'bg-white text-black' : 'border'}`}>
                  {message.text}
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-right text-white' : ''}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      	 </ReactShadowScroll>
      <div className="content__footer">
          <div className="sendNewMessage">
         
            
            <input
              type="text"
              placeholder="Type a message here"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ height: '40px', resize: 'none' }}
            />
            <button onClick={handleSubmit} className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>          
          </div>
        </div>

    </div>
     </ReactShadowScroll>
	);
}