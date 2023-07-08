import AppleSignin from 'react-apple-signin-auth';
import React, { useEffect, useState } from "react";


import AppleIcon from '@mui/icons-material/Apple';
import { IconButton } from '@mui/material';

import './socialiconstyle.css'



export default function Maclogin() {

  const [appleData, setappleData] = useState({})


  const responseapple = (response) => {

    console.log(response);
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
          // callback: { responseapple }
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

