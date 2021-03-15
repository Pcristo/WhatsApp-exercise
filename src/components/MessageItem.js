import react from 'react';
import './MessageItem.css';


export default ({data, user}) => {
    return(

  <div className="messageLine"
  style={{
      justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'

  }}>
     
      <div className="messageItem"
      style={{
          background: user.id === data.author ? '#dcf8c6' : '#fff'
      }}
      
      >
          <div className="messageText">{data.body}</div>
          <div className="messageDate">12.30</div>

      </div>
  </div>

    );
    
}