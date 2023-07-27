

import React, { useEffect,useState } from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import './socialiconstyle.css'

// import FacebookIcon from '@mui/icons-material/Facebook';


import FacebookIcon from "../img/fbicon.png"
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Facebooklogin(props) {
    const navigate = useNavigate();

    const appId ="1349837425612643"

    const [facebookprofile, setfacebookprofile] = useState({})


    const onerrorFailure= (resp)=>{
      alert("error")
     }

    const ResponseFacebook = async(response) => {
    //     setfacebookprofile({
    //       givenName: response.name,
    //      email: response.email,
    //       provider:"facebook"
      
    // });
    console.log(response);

    if(response.status == "unknown"){
alert("window is closed")

    }
else {
    if(response.email.length>0){
    
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
      }

    }
      // else{
      //   alert("invalid response");
      // }

};

   
    return (
        <div>
      <FacebookLogin 
          appId={appId}
          autoLoad={true}
          fields="name, email, picture"
          callback={ResponseFacebook}

          // onSuccess={ResponseFacebook => {
          //   console.log(ResponseFacebook);
          // }}

          // onError={() => {
          //   console.log('Login Failed');
          // }}

          onError={onerrorFailure}
          render={(renderProps) => (
          <img className="icon"src={FacebookIcon} onClick={renderProps.onClick}/> 
          )}
          
      />

      
      </div>
    );
  }