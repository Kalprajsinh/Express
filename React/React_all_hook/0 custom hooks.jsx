// swr - React Hooks for Data Fetching
// swr is a popular React library that creates a lot of these hooks for you, and you can use it directly.
// For example - 

import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async function(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

function Profile() {
  const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello, you have {data.todos.length} todos!</div>
}

____________________________________________________________________________________________________________

// useMousePointer hook
// Create a hook that returns you the current mouse pointer position.

import { useEffect, useState } from 'react'

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

function App() {
  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
      <Profile />
      <OnLine />
      <Timer />
      <SearchComponent />
    </>
  )
}

export default App

____________________________________________________________________________________________________________

// useIsOnline hook
// Create a hook that returns true or false based on weather the user is currently online

import { useEffect, useState } from 'react'

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, [])

  return isOnline;
}

function OnLine() {
  const isOnline = useIsOnline(5);

  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
    </>
  )
}

____________________________________________________________________________________________________________

// useInterval
// Create a hook that runs a certain callback function every n seconds.
// You have to implement useInterval which is being used in the code below - 
// import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

____________________________________________________________________________________________________________

// useDebounce

import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};


const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Use the useDebounce hook to debounce the input value
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Effect to fetch data based on debounced search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      // Example: Fetch search results from an API using debouncedSearchTerm
      fetch(`https://api.example.com/search?q=${debouncedSearchTerm}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
        .catch(error => console.error('Error fetching search results:', error));
    } else {
      setSearchResults([]); // Clear search results if search term is empty
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};
