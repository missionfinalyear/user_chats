import React from 'react';
import "./Chatbody.css";
import ChatList from "../chatlist/ChatList";
import ChatContent from "../chatContent/ChatContent";
import OpenConversation from '../chatContent/OpenConversation.js';
import {useConversations} from "../contexts/ConversationProvider.js";
//import ChatContent from "../chatContent/ChatContent";

export default function Chatbody({id}) {

	const { selectedConversation } = useConversations()
	
	return( 
			
		<div className = "main_chatbody">
		
		<ChatList id={id} />
		{selectedConversation && <OpenConversation />}
		</div>
		
	);
}