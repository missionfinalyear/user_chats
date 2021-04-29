import React from 'react';
//import Web3 from 'web3';
//import { profileAbi } from './abi/abis';
import { SocketProvider } from './components/contexts/SocketProvider.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button} from "react-bootstrap";
import { Switch,BrowserRouter,Route} from "react-router-dom";
//import Menu from "./containers/menu.js";
import MyDashboard from "./containers/home.js";
import Login from "./containers/Login.js";
import Register from "./containers/Register.js";
//import Profile from "./containers/UserProfile.js";
import AboutPage from "./containers/AboutPage.js";
import Cardi from "./containers/Card.js";
import Checkout from "./components/edit profile/Checkout.js";
import Chat from "./containers/Chat.js";
import ChatLogin from "./components/chatlist/chatLogin.js"
import useLocalStorage from './hooks/useLocalStorage.js';
import {ContactsProvider} from "./components/contexts/ContactsProvider.js";
import {ConversationProvider} from "./components/contexts/ConversationProvider.js";

//const web3 = new Web3(Web3.givenProvider);
//const contractAddr='0x96A6F0BAeFA219Bc402fd5725fA2b22ce44e4410';
//const profile = new web3.eth.Contract(profileAbi, contractAddr);
const App=()=>{
  const [id, setId] = useLocalStorage('id');
  
  const chatt = (
      <SocketProvider id = {id}>
        <ContactsProvider>
          <ConversationProvider id={id}>
            <Chat id = {id}/>
          </ConversationProvider>
        </ContactsProvider>
      </SocketProvider>
    )
    
  
  return(
    <>
    <BrowserRouter>
    
       <Switch>
          <div className="App">
          	 <MyDashboard/>
          	 <Route path="/" exact component={Cardi}/>
          	 <Route path="/myprofile" component={Checkout}/>
          	 <Route path="/aboutpage" component={AboutPage}/>
          	 <Route path="/fav" component={Cardi}/>
             <Route path="/setid" component={ChatLogin}>
              <ChatLogin onIdSubmit={setId}/>
             </Route>
              <Route path="/chatting"  render={()=>(                            
                id ? (chatt): ((<ChatLogin onIdSubmit={setId}/>)) 
               
              )} />
           
             <Route path="/login" component={Login}/>
             <Route path="/register" component={Register}/>

          </div>
      </Switch>
   
    </BrowserRouter>
    </>
    );
}
export default App;