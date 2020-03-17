import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://lmtrain.github.io/lm-images/assets/images/bugatti_3.jpg" width="350" height="250" className="App-logo" alt="logo" />
        <Link
          to="/Signin" className={window.location.pathname === "/Signin" ? "nav-link active" : "nav-link"}>Sign in
        </Link>
        
      </header>
    </div>
  );
}

export default Home;
