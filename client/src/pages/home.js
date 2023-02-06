

import React from "react";
import Login from "../components/login";
import AppNavBar from "../components/nav";
import Signup from "../components/signup";
import About from "./about";
import Stories from "./stories";

const styles = {
    navbar:{

    }
}
function Home() {
    return (
        <div className="container">
        <h1 className="card-header text-center">Ripples of Hope</h1>
    
            
            <div className="card-body m-5">
              <About />
            </div>
            <div className="card-body m-5">
                <Stories />
            </div>
        </div>
    )
};

export default Home;