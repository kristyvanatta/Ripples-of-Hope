

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
        <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">Ripples of Hope</div>
            {/* <div style = {styles.navbar}> */}
                <div>
                <Login />

                {/* <AppNavBar /> */}

                <Signup />


                <About />

                <AppNavBar />

            </div>
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