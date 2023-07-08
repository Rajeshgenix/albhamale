

import React, { useEffect,useState } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './socialiconstyle.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

import Facebook from "../img/facebook.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Facebooklogin(props) {
    const navigate = useNavigate();

    const appId ="1349837425612643"

    const [facebookprofile, setfacebookprofile] = useState({})


    const ResponseFacebook = async(response) => {
    //     setfacebookprofile({
    //       givenName: response.name,
    //      email: response.email,
    //       provider:"facebook"
      
    // });

    
    
    const postresponse  =   await axios({
        method: "Post",
         url:  "https://localhost:7296/Movie/Addprofile",
         data: {
            givenName: response.name,
            email: response.email,
            provider:"facebook"
          },
        config: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
        .then((response) => {
           console.log(response.data);
           if(response.data ="Profilecreated"){
            alert("success");
            navigate('/Home');
           }
        })
        .catch((error) => {
          console.log("the error has occured: " + error);
        });

};

   
    return (
        <div>
      <FacebookLogin 
          appId={appId}
          autoLoad={true}
          fields="name, email, picture"
          callback={ResponseFacebook}
          render={(renderProps) => (
            // <div className="login-social-item login-social-item--facebook">
            //   <img onClick={renderProps.onClick}  className="login-social-item__image" src={Facebook} alt=""/>
            // </div>
           <div className="login-social-item login-social-item--facebook">
            <IconButton onClick={renderProps.onClick} className="login-social-item__image" >
            <FacebookIcon sx={{color: "white" }}/>
           </IconButton>
           </div>
          )}
          
      />

      
      </div>
    );
  }