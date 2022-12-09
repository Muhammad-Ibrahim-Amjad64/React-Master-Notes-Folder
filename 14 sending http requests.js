
// // Got Bugs Compare Login and Input.js yesterday -------------

// React does not directly interact with the database 
// It interacts with the api in this module we will learn how to connect an api with the React ---> Very important with the interview prespective


//--------------------------------------------------------------
// Sending a get get request 
//--------------------------------------------------------------

// Using fetch api to get requests 

// fetch() is a function that a browser makes avalible to us 

// * We need to pass the url in the fetch that you want to send a request 
// fetch(" url ")
// * The default method of fetch() is get 


// result ka ok option will be true when everything is ok and false when something went wrong 

    // this method will convert films json into javascript objects
    const data = await films.json()   


// Code implementation 

import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
 async function fetchMoviesHandler(){
  try {
    const films = await  fetch("https://swapi.dev/api/films/")
     // this method will convert films json into javascript objects
     const data = await films.json()
    
     const transformedResult = data.results.map((movie)=>{
       return (
         {
           id: movie.episode_id,
           title:movie.title,
           openingText:movie.opening_crawl
         }
       )
 
     })
     setMovies(transformedResult)
     console.log(transformedResult)
     console.log(data)
  } catch (error) {
    console.log(error)
  }
  


   

  }
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      {/* {movies} */}
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;


//------------------------------------------------------------------------
// Handling Loading and Data states 
//------------------------------------------------------------------------


// We can manage loading and failed to find things using isLoading state 

//CODE IMPLEMENTATION 

import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setIsLoading]= useState(false)
 async function fetchMoviesHandler(){
  setIsLoading(true)
  try {
    const films = await  fetch("https://swapi.dev/api/films/")
     // this method will convert films json into javascript objects
     const data = await films.json()
    
     const transformedResult = data.results.map((movie)=>{
       return (
         {
           id: movie.episode_id,
           title:movie.title,
           openingText:movie.opening_crawl
         }
       )
 
     })
     setMovies(transformedResult)
     setIsLoading(false)
     console.log(transformedResult)
     console.log(data)
  } catch (error) {
    console.log(error)
  }
  


   

  }
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading&& movies.length===0 && <p>Can not find any movies  </p>}
        {isLoading&& <p>Loading</p>}
      {/* {movies} */}
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;


//-------------------------------------------------------
// Handling errors in http requests 
//-------------------------------------------------------

// We can throw our new error in try catch block
// using  condition and throw new Error("nabiha")

// Http response codes 

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


// * eror state bna ai 
// * try catch block mn error state ko handle kra by throwing errors or by defaul sent from server
// then render content wrt that state 



// CODE IMPLEMENTATION WITHOUT CONTENT const 

import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setIsLoading]= useState(false)
  const [error,setError]= useState(null)
 async function fetchMoviesHandler(){
  setError(null)
  setIsLoading(true)
  try {
    const response = await  fetch("https://swapi.dev/api/film/")
     // this method will convert films json into javascript objects
     const data = await response.json()
     if (!response.ok) {
      throw new Error("something went wrong")
      // throw new Error("something went wrong")
      
     }
    
     const transformedResult = data.results.map((movie)=>{
       return (
         {
           id: movie.episode_id,
           title:movie.title,
           openingText:movie.opening_crawl
         }
       )
 
     })
     setMovies(transformedResult)
     console.log(transformedResult)
     console.log(data)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    setIsLoading(false)
  


   

  }
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading&& movies.length===0 && !error && <p>Can not find any movies  </p>}
        {isLoading&& <p>Loading</p>}
        {!isLoading &&error && <p>{error}</p>}
      {/* {movies} */}
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;


// HANDLING WITH THE HELP OF content variable 

import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setIsLoading]= useState(false)
  const [error,setError]= useState(null)
 async function fetchMoviesHandler(){
  setError(null)
  setIsLoading(true)
  try {
    const response = await  fetch("https://swapi.dev/api/film/")
     // this method will convert films json into javascript objects
     if (!response.ok) {
      throw new Error("something went wrong")
      // throw new Error("something went wrong")
      
    }
    const data = await response.json()
    
     const transformedResult = data.results.map((movie)=>{
       return (
         {
           id: movie.episode_id,
           title:movie.title,
           openingText:movie.opening_crawl
         }
       )
 
     })
     setMovies(transformedResult)
     console.log(transformedResult)
     console.log(data)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    setIsLoading(false)
  


   

  }
  let content 
  if (movies.length>0) {
  content=<MoviesList movies={movies} />
}
if (isLoading) {
  content = <p>Loading...</p>
  
}

if (error) {
  content = error
  
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading&& movies.length===0 && !error && <p>Can not find any movies  </p>}
        {isLoading&& <p>Loading</p>}
        {!isLoading &&error && <p>{error}</p>} */}
        {content}
      {/* {movies} */}
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;

// In that approach we are fetching data on demand when the button is pressed 
//---------------------------------------------------------------------
// Using useEffect()
//---------------------------------------------------------------------

// * In a lot of  applications you want to fetch data as soon as the certain components loads.

// * When user visits the webpage you immidiatly want to start fetching data 

// * We can not add functions pointers directly but we should add them  as a dependency using useCallback() because on each render cycle function changes as it was an object in the javascript 
// As function could change whenever if we would be using some external state in here 


//CODE IMPLEMENTAION WITHOUT useCallback()

import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setIsLoading]= useState(false)
  const [error,setError]= useState(null)

    useEffect(()=>{
      fetchMoviesHandler()
    },[])   // The empty array dependency is ok because we are not using some external states. But if  the function is dependent on some other states then there you can face severe bugs and we should use useCallback() 
  // fetchMoviesHandler()   // infiniite loop 
 async function fetchMoviesHandler(){
  setError(null)
  setIsLoading(true)
  try {
    const response = await  fetch("https://swapi.dev/api/films/")
     // this method will convert films json into javascript objects
     if (!response.ok) {
      throw new Error("something went wrong")
      // throw new Error("something went wrong")
      
    }
    const data = await response.json()
    
     const transformedResult = data.results.map((movie)=>{
       return (
         {
           id: movie.episode_id,
           title:movie.title,
           openingText:movie.opening_crawl
         }
       )
 
     })
     setMovies(transformedResult)
     console.log(transformedResult)
     console.log(data)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    setIsLoading(false)
  


   

  }
  let content 
  if (movies.length>0) {
  content=<MoviesList movies={movies} />
}
if (isLoading) {
  content = <p>Loading...</p>
  
}

if (error) {
  content = error
  
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading&& movies.length===0 && !error && <p>Can not find any movies  </p>}
        {isLoading&& <p>Loading</p>}
        {!isLoading &&error && <p>{error}</p>} */}
        {content}
      {/* {movies} */}
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;


//CODE IMPLEMENTAION WITH useCallback()


import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setIsLoading]= useState(false)
  const [error,setError]= useState(null)

//  async function fetchMoviesHandler(){}
 const fetchMoviesHandler= useCallback(async ()=>{
  setError(null)
  setIsLoading(true)
  try {
    const response = await  fetch("https://swapi.dev/api/films/")
     // this method will convert films json into javascript objects
     if (!response.ok) {
      throw new Error("something went wrong")
      // throw new Error("something went wrong")
      
    }
    const data = await response.json()
    
     const transformedResult = data.results.map((movie)=>{
       return (
         {
           id: movie.episode_id,
           title:movie.title,
           openingText:movie.opening_crawl
         }
       )
 
     })
     setMovies(transformedResult)
     console.log(transformedResult)
     console.log(data)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
    setIsLoading(false)
  


   

  },[])

  useEffect(()=>{
    fetchMoviesHandler()
  },[fetchMoviesHandler])   // The empty array dependency is ok because we are not using some external states. But if  the function is dependent on some other states then there you can face severe bugs and we should use useCallback() 
// fetchMoviesHandler()   // infiniite loop 
  let content 
  if (movies.length>0) {
  content=<MoviesList movies={movies} />
}
if (isLoading) {
  content = <p>Loading...</p>
  
}

if (error) {
  content = error
  
}

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading&& movies.length===0 && !error && <p>Can not find any movies  </p>}
        {isLoading&& <p>Loading</p>}
        {!isLoading &&error && <p>{error}</p>} */}
        {content}
      {/* {movies} */}
        {/* <MoviesList movies={dummyMovies} /> */}
      </section>
    </React.Fragment>
  );
}

export default App;


// Max code for sending requests 

import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;




//-------------------------------------------------------------
// Send http post request 
//--------------------------------------------------------------

// Firebase is a service  provided by google that helps and it is a backend that we can use without writing any code it is not a some kind of database but its a backend that comes with a database it also provide a full backend app with rest apis through which we can send requests 


// And also as we mentions before we does not talk directly with that firebase db unlike we talk with the firebase api which then takes incoming requests and does talk to the db behind the scenes 

// movies.json ---> this will create a new node dynamically in the firebase api 
// .json is firebase specific otherwise your request will fail 




//------------------------------------------------------------------
// Sending Http post request and get request template 
//-----------------------------------------------------------------

// By DEFAULT the fetch method sends an http get request 
// We can change method by changing the method property in the fetch function to 'POST'

// That post request will typically create a resource in a database by sending an indicator to the api that you are depending 


body: JSON.stringify(movie)  // Will convert js object or array into json 

import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/films/');
      const response = await fetch('https://react-http-prectice-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data)
      
      const loadedMovies = []
      for(const key in data ){      // data is an object 
        loadedMovies.push({
          id : key ,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // setMovies(transformedMovies);
      setMovies(loadedMovies);
      
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // ye wala function movie add kr ga yani post 
  async function addMovieHandler(movie) {  // WE CAN ALSO ADD ERROR HANDLING IN THAT FUNCTION ------- WILL DO THAT LATER 
    // console.log(movie);
    const response = await fetch('https://react-http-prectice-default-rtdb.firebaseio.com/movies.json',{
      method:"POST",
      body: JSON.stringify(movie),  // Will convert js object or array into json 
      headers:{
        'Content-Type':'application/json' // This will describe the type of content to be posted in the db 
      },
      
    });
    const data = await response.json();
    fetchMoviesHandler()   // Fetching movies when the new movie is submitted successfully 

  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
