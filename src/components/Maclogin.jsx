import AppleSignin from 'react-apple-signin-auth';
import React, { useEffect, useState } from "react";


import AppleIcon from '@mui/icons-material/Apple';
import { IconButton } from '@mui/material';

import './socialiconstyle.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Maclogin() {
  const navigate = useNavigate();
  const [appleData, setappleData] = useState({})


  const responseapple = async(response) => {

    console.log(response);


    const postresponse  =   await axios({
      method: "Post",
       url:  "https://localhost:7296/Movie/Addprofile",
       data: {
          givenName: response.user.email,
          email: response.user.name,
          provider:"apple"
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



      <AppleSignin

        authOptions={{

          clientId: 'com.alphamale.dev',

          scope: 'email name',

          redirectURI: 'https://albhamale.netlify.app/',

          state: 'orgin:web',

          nonce: 'nonce',

          usePopup: true,
          responseMode: "query",
          
        }}
        uiType="dark"

        className="apple-auth-btn"

        noDefaultStyle={false}

        buttonExtraChildren="Continue with Apple"

        // onSuccess={(response) => console.log("success"+JSON.stringify(response))} 

        // onError={(error) => console.error("error" +JSON.stringify(error))} 

        onSuccess={responseapple}

        onError={responseapple}

        skipScript={false}

        iconProp={{ style: { marginTop: '10px' } }}



        render={(renderProps) => (
          <div className="login-social-item login-social-item--apple">
            <IconButton onClick={renderProps.onClick} className="login-social-item__image" sx={{ color: "white" }}>
              <AppleIcon />
            </IconButton>
          </div>
        )}
      />





    </div>
  );
}

