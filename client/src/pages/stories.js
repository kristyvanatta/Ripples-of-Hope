import React from "react";
import {client} from '../Ripples-of-Hope/client';
import {queries} from 'queries.js';

export default function stories() {
    const{id} = useParams();
    const{error, data} = client(queries, {variables:{id}});
    
    if (error) return <p>There was an error loading the page. Please try again. If there is still a problem please contacts us.</p>;

    return <>
        {!error && (
            <div>
                <h1>{storyData.title}</h1>
                <p>{storyData.description}</p>
                <div>{storyData.image}</div>
            </div>
        )}
    </>;
}