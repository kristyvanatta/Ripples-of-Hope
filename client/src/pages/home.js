import React from "react";
import Login from "../components/login";
import AppNavBar from "../components/nav";
import Signup from "../components/signup";
import About from "./about";
import Stories from "./stories";
// import Auth from '../utils/auth';

// const styles = {
//     card: {
//       margin: 20,
//       background: '#9DC0CB',
//     },
//     heading: {
//       background: '#2E9CC2',
//       minHeight: 50,
//       lineHeight: 3.5,
//       fontSize: '1.2rem',
//       textAlign: "center",
//       color: 'black',
//       padding: '0 20px',
//     },
//     navbar: {
//       padding: 20,
//     },
//     story: {
//         margin: 15,
//         background: "#70B9D0",
//         frontSize: '12pt',
//         textAlign: "center",
//         color: 'black',
//         padding: '0 15px',
//     },
//   };

function Home() {
    return (
        <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">Ripples of Hope</div>
            <div style = {styles.navbar}>
                <Login />

                <AppNavBar />

                <Signup />
                <Nav />
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
