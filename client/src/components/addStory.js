import React, { useState } from 'react'
import {  useQuery, useMutation } from '@apollo/client';
import { ADD_STORY } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { DELETE_STORY } from '../utils/mutations';

import Auth from "../utils/auth";
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



export default function AddStory() {
    const [newObject, setNewObject] =useState({});

    const [addStory, {error}] = useMutation(ADD_STORY);

    const { loading, data } = useQuery(QUERY_ME);

  const userData = data?.me || [];

    const setSearchParam = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);

        setNewObject({...newObject, [e.target.name]: e.target.value});
    }
     
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
       try{
        const { data } = await addStory({
            variables: { ...newObject}
        });
        console.log(data);
       }catch(err){
        console.error(err)
       }
       window.location.replace('/stories');
    }

  return (
    <>
    <div className='container'>
    <h1>Add Your Story</h1>
    <form onSubmit={handleFormSubmit} className="card-body">
  <div className="form-row">
    <label className="form-label" for="brand">Title</label>
    <input  name='title' onChange={setSearchParam} className="form-input form-control" />
  </div>
  <div className="form-row">
    <label className="form-label" for="model">Description</label>
    <input name='description' onChange={setSearchParam} className="form-input form-control" />
  </div>
  <div className="form-row">
    <label className="form-label" for="year">Image</label>
    <input name='image' onChange={setSearchParam} className="form-input form-control" />
  </div>

  <button type="submit" className="btn">Create</button>
</form>
</div>



<div className="container">
        <h1>Your Stories</h1>
        {
          loading ? (
            <div>loading</div>
          
          ) : (
            userData.stories?.map((story) => (<div style = {styles.card} key={story._id}>
              <h1 style={styles.title}>{story.title}</h1>
              <p style={styles.description}>{story.description}</p>
              <div>
              <img src={story.image} alt="ripples-of-hope" width="800" height="500"></img>

              <button>Update Story</button>
              <button>Delete Story</button>
              </div></div>))
          )
        }
      </div>
    </>
  )
}

