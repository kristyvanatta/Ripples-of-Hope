import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../utils/mutations';

export default function AddStory() {
    const [newObject, setNewObject] =useState({});

    const [addStory, {error}] = useMutation(ADD_STORY);

    const setSearchParam = (e) =>{
        console.log(e.target.name);
        console.log(e.targe.value);

        setNewObject({...newObject, [e.target.name]: e.target.value});
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try{
        const { data } = addStory({
            variables: { ...newObject }
        });
        console.log(data);
      }catch(err){
        console.error(err)
      }
    }

  return (
    <>
    <div>Add Your Story</div>
    <form onSubmit={handleFormSubmit} className="card-body">
  <div className="form-row">
    <label className="form-label" for="brand">Title</label>
    <input  name='newTitle' onChange={setSearchParam} className="form-input form-control" />
  </div>
  <div className="form-row">
    <label className="form-label" for="model">Description</label>
    <input name='newDescription' onChange={setSearchParam} className="form-input form-control" />
  </div>
  <div className="form-row">
    <label className="form-label" for="year">Image</label>
    <input name='newImage' onChange={setSearchParam} className="form-input form-control" />
  </div>

  <button type="submit" className="btn">Create</button>
</form>
    </>
  )
}
