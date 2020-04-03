import React, { useState, useEffect } from 'react';
import './App.css';

import Movie from './Movie';


const App = () => {

  const [title, setTitle] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('The God Father');
  

  useEffect(() => {
    fetchMovies();
  }, [query]);


  const fetchMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=835f878e`);
    const resJson = await response.json();
    setTitle(resJson);
    console.log(resJson);
  };

  const searchUpdate = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const searchResult = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
       <form onSubmit={searchResult}>
       <input type='text' value={search} onChange={searchUpdate} />
        <button  type='submit' >Search</button>
       </form>
       <div>
      <Movie title={title.Title}
      year={title.Year}
      rated={title.Rated}
      released={title.Released}
      runtime={title.Runtime}
      poster={title.Poster}
      ></Movie>
       
       </div>
       
    </div>
  );
}

export default App;