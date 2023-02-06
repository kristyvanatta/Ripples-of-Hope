import React, { useState } from 'react'

import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../utils/mutations';


import MyStory from './myStory';


export default function AddStory() {

  // const { id } = useParams();
  // const { loading, data } = useQuery(QUERY_STORY, { variables: { id } });

  const [newObject, setNewObject] = useState({});

  const [addStory, { error }] = useMutation(ADD_STORY);



  const setSearchParam = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setNewObject({ ...newObject, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addStory({
        variables: { ...newObject }
      });
      console.log(data);
    } catch (err) {
      console.error(err)
    }
    window.location.replace('/stories');
  }

  return (
    <>
      {/* <MyStory /> */}
      <div className='container'>
        <h1 className='mt-5 mb-5'>Add Your Story</h1>
        <form onSubmit={handleFormSubmit} className="card-body">
          <div className="form-row mb-3">
            <label className="form-label" for="brand">Title</label>
            <input name='title' onChange={setSearchParam} className="form-input form-control" />
          </div>
          <div className="form-row mb-3">
            <label className="form-label" for="model">Description</label>
            <textarea name='description' onChange={setSearchParam} className="textarea form-control" rows="10" />
          </div>
          <div className="form-row mb-3">
            <label className="form-label" for="year">Image</label>
            <input name='image' onChange={setSearchParam} className="form-input form-control" />
          </div>
          <div class="mb-5" >
          <button type="submit" className="btn btn-warning btn-lg">Create</button>
          </div>
        </form>
      </div>

   
    </>
  )
}

