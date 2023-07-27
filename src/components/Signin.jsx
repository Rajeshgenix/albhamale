import React, { useEffect, useState } from 'react';
import "../styles/signin.css";
import axios from 'axios';
import logo from "../img/welcomelogo.png";
// import Apple from "../img/appleicon.png";
// import FB from "../img/fbicon.png"
// import Google from "../img/googleicon.png";

import Googlelogin from "./Googlelogin";
import Facebooklogin from "./Facebooklogin"

import Applelogin from "./Maclogin"


function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailErr, setEmailErr] = useState();
    const [passErr, setPassErr] = useState();

    const handleValidation = (event) => {

        let formIsValid = true;
        if (email === undefined || password === undefined)
            return false;

        if (!email.match(/^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

            formIsValid = false;

            setEmailErr("Email Not Valid");

            return false;

        } else {

            setEmailErr("");

            formIsValid = true;

        }

        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)) {

            formIsValid = false;

            setPassErr(

                "Atleast 1 uppercase 1 lowercase 1 special characterand must contain min 8 characters"

            );

            return false;

        } else {

            setPassErr("");

            formIsValid = true;

        }
        return formIsValid;

    };




    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation(e);
        return axios.post("http://localhost:5000/users/login", {
            email: email,
            password: password

        })
            .then((res) => {
                if (res.data.status) {
                    alert("success");
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    var User = JSON.parse(localStorage.getItem("user"));
                    window.location = "/Dashboard/" + User.email;

                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            })

        
    }

    return (
        <div className="container-fluid">
          


            <div className="row justify-content-center">

                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="logo1">
                    {/* image container */}
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="page1">
                    <div className='container w-75'>
                        <center><img className="mt-3 mb-3 text-center" src={logo} /></center>
                        <h4 className="mb-3 mt-3 text-center heading4" >Welcome Back</h4>
                        <form onSubmit={loginSubmit} method="post">

                            <div class="mb-4 mt-3">
                                <label for="email" class="form-label text-start">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="Enter your email" name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <small className='text-danger'>{emailErr}</small>
                            </div>
                            <div class="mb-4">
                                <label for="pwd" class="form-label">Password</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Your password" name="password"
                                    onChange={(event) => { setPassword(event.target.value); }}
                                />
                                <small className='text-danger'>{passErr}</small>
                            </div>
                            <div class="mb-3 mt-3 d-flex justify-content-between">
                                <div>
                                    <input type="checkbox" id="remember" name="remember" value="remember" />
                                    <label for="remember"> Remember Me</label><br></br>
                                </div>
                                <div>
                                    <p>Forgot password?</p>
                                </div>
                            </div>

                            <button type="submit" class="btn  mb-3 w-100" id="loginBtn" >Sign In</button>

                        </form>

                        <div class="separator"><span>OR</span></div>
                        <div className='row text-center mb-5'>
                            <div className="col-md-4">
                               
                                <Googlelogin />
               
                            </div>
                            <div className="col-md-4">
                             
                              
                                <Facebooklogin/>
                            </div>
                            <div className="col-md-4">
                                
                              
                                <Applelogin />
                            </div>
                        </div>
                        <p className='text-center mb-3' id="create">Create new account &nbsp;<a href="/register">Click here</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;