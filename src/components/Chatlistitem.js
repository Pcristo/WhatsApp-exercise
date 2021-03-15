import react from 'react';
import './Chatlistitem.css';


export default ({onClick, active, data}) =>{

    return (

        <div className={`chatlistitem ${active?'active':''}`}
        onClick={onClick}
        > 
        <img className="chatlistitem--avatar" src={data.image} alt="User Imagem" />

        <div className="chatlistitem--lines">

            <div className="chatlistitem--line">
                <div className="chatlistitem--name">{data.title}</div>
                <div className="chatlitsitem--date">19:00</div>

            </div>
            <div className="chatlistitem--line">
                <div className="chatlistitem--lastmsg">
                    <p>Last MSG
                    </p>
                </div>
                
            </div>
        </div>
        
        </div>




    );
}