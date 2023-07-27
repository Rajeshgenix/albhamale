import AppleSignin from 'react-apple-signin-auth';
import React, { useEffect, useState } from "react";
import AppleIcon from "../img/appleicon.png";

import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Maclogin() {
  const navigate = useNavigate();
  const [appleData, setappleData] = useState({})


  const onerrorFailure= (resp)=>{
    alert("on error window closed")
   }

  const responseapple = async(response) => {

    
    // console.log(response.user.email);
    // console.log(response.user.name.firstName);

    
    console.log(response);




    const postresponse  =   await axios({
      method: "Post",
       
       url:"https://localhost:7071/api/Account/SocialSignin",
       data: {
          UserName:response.user.email,
          Email: response.user.email,
          Password:"",
          FirstName:response.user.name.firstName,
          LastName:response.user.name.lastName,


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
         if(response.data.statusCode=200){
         
         alert("API call success")
         }
         else{
          alert(response.data.message);
          alert("API call error")
         }
      })
      .catch((error) => {
        alert("API call catch")
        console.log("the error has occured: " + error);
      });
    }
    

    // const postresponse  =   await axios({
    //   method: "Post",
    //    url:  "https://localhost:7296/Movie/Addprofile",
    //    data: {
    //       givenName: response.user.email,
    //       email: response.user.name,
    //       provider:"apple"
    //     },
    //   config: {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   },
    // })
    //   .then((response) => {
    //      console.log(response.data);
    //      if(response.data ="Profilecreated"){
    //       alert("success");
    //       navigate('/Home');
    //      }
    //   })
    //   .catch((error) => {
    //     console.log("the error has occured: " + error);
    //   });

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

        onError={onerrorFailure}

        skipScript={false}

        iconProp={{ style: { marginTop: '10px' } }}



        render={(renderProps) => (
          <img className="icon"src={AppleIcon} onClick={renderProps.onClick}/>
        )}
      />


    </div>
  );
}

