import { useNavigate } from 'react-router-dom';
import { DELETE_STORY } from '../utils/mutations';
import { QUERY_STORIES } from '../utils/queries';

import { useMutation } from '@apollo/client';

export default function DeleteStory({ storyId }) {
  const navigate = useNavigate();

  const [deleteStory] = useMutation(DELETE_STORY, {
    variables: { id: storyId },
    onCompleted: () => navigate('/stories'),
    refetchQueries: [{ query: QUERY_STORIES }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteStory}>
       Delete Story
      </button>
    </div>
  );
}
