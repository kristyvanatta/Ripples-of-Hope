import React from 'react'
import { useParams } from 'react-router-dom';
import {  useQuery} from '@apollo/client';
import UpdateStory from './updateStory';
import { QUERY_ME} from '../utils/queries';
import DeleteStory from './deleteStory';
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
  

export default function MyStory() {
    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_ME, { variables: { id } });
    const userData = data?.me || [];
    
    return <>
    <div className="container">
        <h1>My Stories</h1>
        {
          loading ? (
            <div>loading</div>
          
          ) : (
            userData.stories?.map((story) => (<div style = {styles.card} key={story._id}>
              <h1 style={styles.title}>{story.title}</h1>
              <p style={styles.description}>{story.description}</p>
              <div>
              <img src={story.image} alt="ripples-of-hope" width="800" height="500"></img>

              <UpdateStory />
              <DeleteStory />
              </div></div>))
          )
        }
      </div>
    </>
}