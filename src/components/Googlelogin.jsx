import React, { useEffect,useState } from "react";
import ReactGoogleLogin from "react-google-login";
// import './socialiconstyle.css'

import {gapi} from 'gapi-script';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import GoogleIcon from "../img/googleicon.png";


//  import GoogleIcon from '@mui/icons-material/Google';


export default function GoogleLogin(props) {
    const navigate = useNavigate();
    const [googleuser, setgoogleuser] = useState({})
    const [data, setData] = useState([])

    const clientId ="462387962986-9a4ka7ejrea0o2f6b2jten040bup7r7t.apps.googleusercontent.com"

    useEffect(()=>{
        gapi.load("client:auth2",()=>{
            gapi.auth2.init({clientId:clientId})
        })
    },[])

   

    const onResponse = async  (resp) => {
        console.log(resp);

        if(resp.profileObj.email.length>0){
        const postresponse  =   await axios({
            method: "Post",
             url:  "https://localhost:7296/Movie/Addprofile",
             data: {
                givenName: resp.profileObj.givenName,
                email: resp.profileObj.email,
                provider:"google"
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
          else{
            alert("invalid response");
          }
      
    };

   

 
    return (
        <div>
           
      <ReactGoogleLogin
        clientId={clientId}
       
        onSuccess={onResponse}
        onFailure={onResponse}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
             <div>
              <img className="icon"src={GoogleIcon} onClick={renderProps.onClick}/> 
            </div>
          )}
    
        
       
      />

</div>
    );
  }