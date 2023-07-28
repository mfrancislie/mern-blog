import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreateNewPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [redirect, setRedirect] = useState(false);

  const createNewPost = () => {};

  if (redirect) {
    return <Navigate to={'/'} />;
  }
  return (
    <form onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={'Title'}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={'Summary'}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={() => console.log('asdf')} />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
  );
};

export default CreateNewPost;
