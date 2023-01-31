import React from "react";
import login from "../components/login";
import nav from "../components/nav";
import signup from "../components/signup";
import about from "./about";

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
  };

function Home() {
    return (
        <div style = {styles.card}>
            <div style={styles.heading}>Ripples of Hope</div>
            <div style = {styles.navbar}>
                <login />
                <nav />
                <about />
            </div>
        </div>
    )
}

// const Home = () => {
//   return (
//     <div className="container">
//       <login />
//       <nav class="navbar bg-body-tertiary">
//          <div class="container-fluid">
//          <span class="navbar-brand mb-0 h1">Navbar</span>
//          </div>
//        </nav>
//       <signup />
//       <h1>Featured Charity:</h1>
//       <p>About the charity yada yada yada</p>
//       <h1>Featured Charity:</h1>
//       <p>About the charity yada yada yada</p>
//     </div>
//   );
// };

export default Home;
