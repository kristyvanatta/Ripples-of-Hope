import React from "react";
import {client} from '../Ripples-of-Hope/client';
import {queries} from 'queries.js';

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

export default function stories() {
    const{id} = useParams();
    const{error, storyData} = client(queries, {variables:{id}});
    
    if (error) return <p>There was an error loading the page. Please try again. If there is still a problem please contacts us.</p>;

    return <>
        {!error && (
            <div style = {styles.card}>
                <h1 style = {styles.title}>{storyData.title}</h1>
                <p style = {styles.description}>{storyData.description}</p>
                <div>{storyData.image}</div>
            </div>
        )}
    </>;
}