
import Navbar from "./components/Navbar";
import "./App.css";


// import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GoogleLogin from "./components/Googlelogin";
import Facebooklogin from "./components/Facebooklogin";
import { Col, Row } from 'antd';
import Applelogin from "./components/Maclogin"
import Container from '@material-ui/core/Container';

import Login from "./components/Login";
import Home from "./components/Home";
import Post from "./components/Post";

function App() {

  const [user, setUser] = useState(null);
  const [socialmail, setsocialmail] = useState([]);


  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();



          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setsocialmail(resObject.user.emails);

        })

        .catch((err) => {
          console.log(err);
        });

    };
    getUser();
  }, []);

  console.log(user);

  useEffect(() => {
    const getdatabse = () => {
      if (socialmail !== undefined && socialmail !== null) {
        console.log(socialmail);
      }
    }
    getdatabse();

  }, [socialmail]);





  return (





    <BrowserRouter>

      {/* <Navbar user={user} /> */}

      {/* <Routes>
          <Route path="/" element={<Login />} /> */}
      {/* <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/Post" />}
          /> */}

      {/* <Route path="/home" element={<Home />} /> */}


      {/* <Route path={"/Home"} element={<Home/>} /> */}


      {/* <Route
            path="/Home"
            element={user ? <Home /> : <Navigate to="/" />}
          /> 

     
        </Routes> */}

<Routes>
<Route path="/" element={<Login />} />
<Route path="/Home" element={<Home />} />
<Route path="/Post" element={<Post />} />

</Routes>

    </BrowserRouter>

  );
}

export default App;
