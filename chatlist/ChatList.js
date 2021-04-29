import React,{useState} from "react";
import { Modal,Button,Tab, Nav} from "react-bootstrap";
import NewConversationModal from "./NewConversationModal.js"
import NewContactModal from "./NewContactModal.js"
import "./ChatList.css";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
//import ChatLogin from "./chatLogin.js";

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function ChatList({id}){
    const [openModal, setOpenModal]= useState(false);
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
   

    function closeModal(){
      setOpenModal(false);
    }

    return (
      <>
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h3>Chats</h3>
          <Button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </Button>
        </div>

        <div className="your_id"> 
        <h6>Your ID:</h6><div className="chat_id"> {id}</div>
        </div>

        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
         <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
          <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <button className="btn" onClick={()=> setOpenModal(true)} >
          <i className="fa fa-plus"></i>
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </button>

        </Tab.Container>
          
          
        </div>
      
      <Modal show={openModal} onhide={closeModal}>
       {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>

      </div> 
      </>
    );
}