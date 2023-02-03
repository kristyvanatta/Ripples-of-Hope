import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_STORY } from '../utils/queries.js';

const styles = {
  card: {
    margin: 20,
    background: '#9DC0CB',
  },
  title: {
    background: '#2E9CC2',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    textAlign: "center",
    color: 'black',
    padding: '0 20px',
  },
  description: {
    padding: 20,
  },
};

function singleStory() {

    const { loading, data } = useQuery(QUERY_STORY);
  
    const story = data?.singleStory || [];
  
  
    return (
      <>
        <div className="container">
          <h1>All Stories</h1>
          {
            loading ? (
              <div>loading</div>
            ) : (
              story.map((story) => (<div style = {styles.card} key={story._id}>
                <h1 style={styles.title}>{story.title}</h1>
                <p style={styles.description}>{story.description}</p>
                <div>
                <img src={story.image} alt="ripples-of-hope" width="800" height="500"></img>
                </div></div>))
            )
          }
        </div>
      </>
    )
  }
  export default singleStory;