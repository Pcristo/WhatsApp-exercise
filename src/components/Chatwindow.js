import react, { useState, useEffect, useRef} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './Chatwindow.css'

import MessageItem from './MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
//import { useState , useEffect, useRef} from 'react';
import { EmojiObjects } from '@material-ui/icons';




export default ({user}) => {

   const body= useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }



    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        {author:123,body:'bla bla bla'},
        {author:123,body:'bla bla bla  bla'},
        {author:1234,body:'bla bla bla bla'},
        
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }

        
    }, [list]);

    const handleEmojiClick = (e, emojiObject) =>{
       setText( text + emojiObject.emoji );

    }

    const handleOpenEmoji = () =>{

        setEmojiOpen(true);

    }

    const handleCloseEmoji = () =>{

         setEmojiOpen(false);
    }

    const handleMicClick = () =>{
        if(recognition !== null){

            recognition.onstart = () =>{
                setListening(true);
            }

            
            recognition.onend = () =>{
                setListening(false);
            }

            recognition.onresult = (e) =>{
                setText(e.results[0][0].transcript);
            }
             
            recognition.start();
        }

    }

    const handleSendClick = () =>{
        
    }

    

    return (

        
    <div className="chatwindow">
        <div className="chatWindow--header">

            <div className="chatwindow--headerinfo">
                <img className="chatwindow--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                <div className="chatwindow--name">Alexandre</div>
            </div>
            

            <div className="chatwindow--headerbuttons">

                <div className="chatwindow--btn">
                    <SearchIcon style={{color:'#919191'}} />

                </div>
                <div className="chatwindow--btn">
                    <AttachFileIcon style={{color:'#919191'}} />

                </div>
                <div className="chatwindow--btn">
                    <MoreVertIcon style={{color:'#919191'}} />

                </div>
            </div>
        </div>

        <div ref={body} className="chatWindow--body">

            {list.map((item, key)=>(
            <MessageItem
            key={key}
            data={item}
            user={user}
            />

            ))}


        </div>
        
        <div className="chatwindow--emojiarea"
        style={{height: emojiOpen ? '240px' : '0px'}}>
            

            <EmojiPicker
            onEmojiClick={handleEmojiClick}
            disableSearchBar
            disableSkinTonePicker

            />
        </div>

        <div className="chatWindow--footer">

            <div className="chatwindow--pre">

        
                <div className="chatwindow--btn"
                onClick={handleCloseEmoji}
                style={{width: emojiOpen ? 40:0}}
                
                >
                    <CloseIcon  style={{color:'#919191'}} />
                  
                </div>
                <div className="chatwindow--btn"
                    onClick={handleOpenEmoji}
                >
                  <InsertEmoticonIcon  style={{color: emojiOpen? '#009688' : '#919191'}} />
                  </div>
            </div>
            <div className="chatwindow--inputarea">
                <input className="chatwindow--input" 
                        type="text"
                        placeholder="Escreva uma mensagem..." 
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        
                        />
                
            </div>
            <div className="chatwindow--pos">
                {text === '' &&
                 <div onClick={handleMicClick} className="chatwindow--btn">
                 < MicIcon   style={{color:listening ? '#126ece' : '#919191'}} />
               </div>
            }
           
           {text !== '' &&
            <div  onClick={handleSendClick}  className="chatwindow--btn">
                    < SendIcon  style={{color:'#919191'}} />

                </div>
            }         
            </div>


        </div>


    </div>
        

    );

}