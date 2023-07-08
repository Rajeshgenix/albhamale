import AppleSignin from 'react-apple-signin-auth';
import React, { useEffect,useState } from "react";


import AppleIcon from '@mui/icons-material/Apple';
import { IconButton } from '@mui/material';

import './socialiconstyle.css'



export default function Maclogin()  {

    const [appleData, setappleData] = useState({})


    const responseapple = (response) => {
    
    console.log(response);
};

    


    return (
        <div>
 

      
 <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    authOptions={{
      /** Client ID - eg: 'com.example.com' */
      clientId: 'com.alphamale.dev',
      /** Requested scopes, seperated by spaces - eg: 'email name' */
      scope: 'email name',
      /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
      redirectURI: 'https://j4sh56-3000.csb.app/',
      /** State string that is returned with the apple response */
      state: 'orgin:web',
      /** Nonce */
      nonce: 'nonce',
      /** Uses popup auth instead of redirection */
       usePopup: true,
       responseMode:"query",
       callback:{responseapple}
    }} // REQUIRED
    /** General props */
    uiType="dark"
    /** className */
    className="apple-auth-btn"
    /** Removes default style tag */
    noDefaultStyle={false}
    /** Allows to change the button's children, eg: for changing the button text */
    buttonExtraChildren="Continue with Apple"
    /** Extra controlling props */
    /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
    onSuccess={(response) => console.log("success"+JSON.stringify(response))} // default = undefined
    /** Called upon signin error */
    onError={(error) => console.error("error" +JSON.stringify(error))} // default = undefined
    /** Skips loading the apple script if true */
    skipScript={false} // default = undefined
    /** Apple image props */
    iconProp={{ style: { marginTop: '10px' } }} // default = undefined
   
    //  render={(props) => <button {...props}>My Custom Button</button>}

    render={(renderProps) => (
      <div className="login-social-item login-social-item--apple">
     <IconButton onClick={renderProps.onClick} className="login-social-item__image" sx={{ color: "white" }}>
     <AppleIcon/>
    </IconButton>
     </div>
   )}
  />
     
    
 

  
  </div>
  );
}

