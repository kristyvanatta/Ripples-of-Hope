import React from "react";
import Login from "../components/login";
import Nav from "../components/nav";
import Signup from "../components/signup";
import About from "./about";
import Stories from "./stories";
// import Auth from '../utils/auth';

const styles = {
    card: {
      margin: 20,
      background: '#9DC0CB',
    },
    heading: {
      background: '#2E9CC2',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'black',
      padding: '0 20px',
    },
    navbar: {
      padding: 20,
    },
    story: {
        margin: 15,
        background: "#70B9D0",
        frontSize: '12pt',
        color: 'black',
        padding: '0 15px',
    },
  };

function Home() {
    return (
        <div style = {styles.card}>
            <div style={styles.heading}>Ripples of Hope</div>
            <div style = {styles.navbar}>
                <Login />
                <Signup />
                <Nav />
                <About />
            </div>
            <div style = {styles.story}>
                <Stories />
            </div>
        </div>
    )
};

export default Home;
