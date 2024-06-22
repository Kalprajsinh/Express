import Use_state from "./components/Use_state"
import Use_Effect from "./components/Use_Effect"
import Use_Memo from "./components/Use_Memo"
import WrapperComponents from "./components/Wrapper_compo_memo"
import Hearders from "./components/headers"

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';


const App = () => {
  const mousePointer = useMousePointer();
  const isOnline = useIsOnline();

  useInterval(() => {
    // Your interval logic here
  }, 1000);

  return (
    <>
      {/* <Hearders sername="Rana" name="Kalpraj" fathername="M."/> */}
      {/* <WrapperComponents /> */}
      {/* <Use_state /> */}
      {/* <Use_Effect /> */}
      {/* <Use_Memo /> */}
      
      Your mouse position is {mousePointer.x} {mousePointer.y}
      <Profile />
      {isOnline ? "You are online yay!" : "You are not online"}
      <Timer />
      <SearchComponent />
    </>
  );
};

export default App;

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

// Custom hook to track mouse pointer position
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

// Custom hook to detect online/offline status
const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const onlineHandler = () => setIsOnline(true);
    const offlineHandler = () => setIsOnline(false);

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return isOnline;
};

// Custom hook for setInterval functionality
const useInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

// Custom hook for debouncing input value
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(`https://api.example.com/search?q=${debouncedSearchTerm}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
        .catch(error => console.error('Error fetching search results:', error));
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
