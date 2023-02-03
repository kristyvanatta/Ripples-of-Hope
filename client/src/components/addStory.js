import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../utils/mutations';
// import {getToken} from './utils/auth'

export default function AddStory() {
    const [newObject, setNewObject] =useState({});

    const [addStory, {error}] = useMutation(ADD_STORY);

    const setSearchParam = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);

        setNewObject({...newObject, [e.target.name]: e.target.value});
    }
     
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(newObject);
       try{
        const { data } = await addStory({
            variables: { ...newObject}
            // userId: getToken.data.user._id 
        });
        console.log(data);
       }catch(err){
        console.error(err)
       }
       window.location.replace('/addStory');
    }

  return (
    <>
    <div>Add Your Story</div>
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
    </>
  )
}
