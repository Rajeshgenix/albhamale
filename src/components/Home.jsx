
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const Home = () => {
    const navigate = useNavigate();
  const handleClick = () => navigate('/Post');
    return (
        <div>
        <Navbar />
        <div className="home">
         
           <h2>Home</h2>

           <button type="button" onClick={handleClick}>
      Goodbye
    </button>
        </div>
        </div>
    )
}

export default Home