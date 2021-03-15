import  react, {useState, useEffect} from 'react';
import './App.css';

import Api from './Api';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import Chatlistitem from './components/Chatlistitem';
import Chatintro from './components/Chatintro';

import ChatWindow from './components/Chatwindow';
import NewChatWindow from './components/NewChatWindow';
import Login from './components/Login';


export default () => {

  const [chatlist, setChatlist] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
         

        id:'AomCIIWbsihNVJZ3rg3ZQivmyrc2',
        name:'Pedro Cristo',
        avatar: 'https://graph.facebook.com/10225211142928077/picture'
  });
  const [showNewChat, setShowNewChat] = useState(false);


  const handleNewChat = () =>{
      
      setShowNewChat(true);

    }

    const handleLoginData = async (u) => {

       let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL
      };

      await Api.addUser(newUser);

      setUser(newUser);

    }

    if(user === null){

      return (<Login onReceive={handleLoginData} />);

    }
      
    
  return(

   <div className="app-window"> 
       <div className="sidebar">
         <NewChatWindow 
         chatlist={chatlist}
         user={user}
         show={showNewChat}
         setShow={setShowNewChat}
         
         />
            <header>

             <img className="header--avatar" src={user.avatar} alt="Avatar" />
             <div className="header--buttons">
                   <div className="header-btn">
                     <DonutLargeIcon style={{color:'#919191'}} />

                   </div>
                   <div onClick={handleNewChat} className="header-btn">
                     <ChatIcon style={{color:'#919191'}} />

                   </div>
                   <div className="header-btn">
                     <MoreVertIcon style={{color:'#919191'}} />

                   </div>
             </div>
            </header>

            <div className="search">

              <div className="search--input">
              <SearchIcon fontSize="small" style={{color:'#919191'}} />
              <input type="search" placeholder="Procurar ou começar uma nova conversa" />

              </div>

            </div>

            <div className="chatlist">
                {chatlist.map((item, key) => (
                
                <Chatlistitem
                  key={key}
                  data={item}
                  active={activeChat.chatId === chatlist[key].chatId}
                  onClick={()=>setActiveChat(chatlist[key])}
                  />
                 ) )}



            </div>
       </div>

        <div className="contentarea">
          {activeChat.chatId !== undefined &&

                 <ChatWindow 
                 user={user}
                 
                 />
          }

              {activeChat.chatId === undefined &&

               <Chatintro />
               

       }

        </div>
   
   </div>

  );
}