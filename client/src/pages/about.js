import React from "react";
import Nav from "../components/nav";

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
//     content: {
//       padding: 20,
//       textAlign: "center",
//     },
//   };

function About() {
    return (
        <div className="card bg-white card-rounded w-50">
            <div className="card-header bg-dark text-center">Ripples of Hope</div>
            <Nav />
            <div className="card-body m-5">
                `We are a not-for-profit website where we promote
              charities all around the United States. 100% of donations
              are given to the charities of the donners choosing.
                
              If you have questions, here is our contact info.
              And if you want to add your charity, sign up here!`
            </div>
        </div>
    )
};

export default About;