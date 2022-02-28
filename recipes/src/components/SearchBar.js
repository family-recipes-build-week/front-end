import React, { useState } from 'react';


export default function SearchBar ({ cb }) {
  const [query, setQuery] = useState('');

  function inputHandler({ target }) {
    setQuery(target.value);
  }

  function submit(ev) {
    ev.preventDefault();
    cb(query);
    setQuery('');
  }

  return (
    <form onSubmit={submit} className='filter'>
      <input
        type='text'
        id='query'
        placeholder='category'
        value={query}
        onChange={inputHandler}
      />
      <input type='submit' value={'Filter'} />
    </form>
  );
}