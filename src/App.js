import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = process.env.REACT_APP_API_URL;

//`useState` is a function in React (a JavaScript library for building user interfaces) that helps you manage and change data within your components. It allows you to create and keep track of variables that can hold information, and when you update these variables, React automatically re-renders your component to reflect the changes on the screen. It's like having a memory within your component to store and modify data as needed.

//`useEffect` is a function in React (a JavaScript library for building user interfaces) that allows you to perform side effects in your components. Side effects are actions that happen in your component, such as data fetching, DOM manipulation, or setting up subscriptions. You use `useEffect` to tell React to perform these actions after the component has rendered or when specific values change. It helps you manage tasks that need to happen in response to changes in your component's state or props.

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Search for your favorite movies here 🤩</h1>

      <div className='search'>
        <input
          placeholder='Type here...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;