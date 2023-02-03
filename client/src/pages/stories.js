import React from "react";
// import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_STORIES } from '../utils/queries.js';

// const styles = {
//   card: {
//     margin: 20,
//     background: '#9DC0CB',
//   },
//   title: {
//     background: '#2E9CC2',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     textAlign: "center",
//     color: 'black',
//     padding: '0 20px',
//   },
//   description: {
//     padding: 20,
//   },
// };

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
function Stories() {

  const { loading, data } = useQuery(QUERY_STORIES);

  const allStories = data?.stories || [];


  return (
    <>
      <div className="container">
        <h1>All Stories</h1>
        {
          loading ? (
            <div>loading</div>
          ) : (
            allStories.map((story) => (<div style = {styles.card} key={story._id}>
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
export default Stories;