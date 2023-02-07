import React from "react";

import AppNavbar from "../components/nav";

import Nav from "../components/nav";
import { Link } from 'react-router-dom';



function About() {
  return (

    <div className="container">
      <h2>About Us</h2>



      <div>
        <div>Ripples of Hope</div>
        {/* <AppNavbar /> */}
        <div>

          <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">Ripples of Hope</div>
          
            <div className="card-body m-5">

              `We are a not-for-profit website where we promote
              charities all around the United States. 100% of donations
              are given to the charities of the donners choosing.

              If you have questions, <Link to="/contact">here</Link> is our contact info.
              And if you want to add your charity, <Link to="/signup">sign up here!</Link>`
            </div>
          </div>
        </div>
        </div>
        </div>
        )

}



        export default About;