import react from 'react';
import Api from '../Api';
import './Login.css';

import FacebookIcon from '@material-ui/icons/Facebook';


export default ({onReceive}) => {

    const handleFacebookLogin = async () => {

        let result = await Api.fbPopup();
        if(result){

            onReceive(result.user);

        }else{

            alert("Erro!");
        }

    }
    return(

        <div className="Login">
            <button onClick={handleFacebookLogin}>Login com o Facebook</button>
            <FacebookIcon className="facebook--icon" fontSize="large"/>
        </div>

    );
}