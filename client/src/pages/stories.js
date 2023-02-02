import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
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

// export default function Stories() {
//     const{id} = useParams();
//     const {error, storyData} = useQuery(QUERY_STORIES, {variables:{id}});
    
//     if (error) return <p>There was an error loading the page. Please try again. If there is still a problem please contacts us.</p>;

//     return <>
//         {!error && (
//             <div style = {styles.card}>
//                 <h1 style = {styles.title}>{storyData.title}</h1>
//                 <p style = {styles.description}>{storyData.description}</p>
//                 <div>{storyData.image}</div>
//             </div>
//         )}
//     </>;
// }
function Stories(){
  const [currentStories, setCurrentStories] = useState([]);
  const [getAllStories, {error}] = useQuery(QUERY_STORIES);

  useEffect(() => {
     loadStories();
  },[]);

  const loadStories = async() => {
    const { data } = await getAllStories();
    console.log(data);
  }

  return (
    <>
    <h1>All Stories</h1>
    
    </>
  )
}
export default Stories;