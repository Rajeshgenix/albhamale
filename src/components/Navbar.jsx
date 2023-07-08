
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
      <div className="navbar">
        <span className="logo">
          <Link className="link" to="/">
            Rajesh App
          </Link>
        </span>
      
          <ul className="list">
            <li className="listItem">
              <img
               
                alt=""
                className="avatar"
              />
            </li>
            <li className="listItem">{"Rajesh"}</li>
            <li className="listItem">
              Logout
            </li>
          </ul>
       
          <Link className="link" to="login">
            Login
          </Link>
        
      </div>
    );
  };
  
  export default Navbar;