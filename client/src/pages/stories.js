import React from "react";
// import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_STORIES } from '../utils/queries.js';

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
    color: 'black',
    padding: '0 20px',
  },
  description: {
    padding: 20,
  },
};

function Stories() {

  const { loading, data } = useQuery(QUERY_STORIES);

  const allStories = data?.stories || [];


  return (
    <>
      <div className="container">
        <h2>All Stories</h2>
        {
          loading ? (
            <div>loading</div>
          ) : (
            allStories.map((story) => (<div style = {styles.card} key={story._id}>
              <h1 style={styles.title}>{story.title}</h1>
              <p style={styles.description}>{story.description}</p>
              <div>
              <img src={story.image} alt="ripples-of-hope" width="100%" height="500"></img>
              </div></div>))
          )
        }
      </div>
    </>
  )
}
export default Stories;