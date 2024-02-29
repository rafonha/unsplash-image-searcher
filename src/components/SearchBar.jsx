import React, { useState } from 'react'

export default function SearchBar({ onSubmit = () => {} }) {
  const [searchTerm, setSearchTerm] = useState('');

  let handleClick = (e) => {
    e.preventDefault();
    onSubmit(searchTerm)
  }

  let onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input type="text" name="paramInput" id="paramInput" onChange={onChange} />
        <button type="submit" id='submitSearch'>Search</button>
      </form>
    </>
  )
}
