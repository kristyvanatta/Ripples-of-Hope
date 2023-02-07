import React from 'react'

import { useParams } from 'react-router-dom';
import {  isReference, useQuery} from '@apollo/client';
import UpdateStory from './updateStory';
import { QUERY_ME} from '../utils/queries';
import { QUERY_STORY} from '../utils/queries';
import DeleteStory from './deleteStory';

  

export default function MyStory() {

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || [];
    
  

  if(loading){
    return <h2>Loading...</h2>
  }
    return (
<div>
 
      <div className='container'>
        <h2>View My stories!</h2>
      
      <h4>
        {userData.stories?.length
          ? `Viewing ${userData.stories.length} saved ${userData.stories.length === 1 ? 'story' : 'stories'}:`
          : 'You have no stories!'}
      </h4>
      </div>
      {userData.stories?.map((story) => {
        return (
      <div key={story._id} class="card">
            <h2 class="card-title">{story.title}</h2>
          <div class="card-body">
              <img src={story.image} class="card-img-top" alt="ripples-of-hope" width="100%" height="500"></img>
          
            <p class="card-text">{story.description}</p>

           <UpdateStory story={story}/>  
            <DeleteStory storyId={story._id}/>
            
          </div>
      </div>)}


    )
}
</div>
   ) }