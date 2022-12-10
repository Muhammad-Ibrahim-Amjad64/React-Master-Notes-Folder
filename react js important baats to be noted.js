
// bind method -------------
// use bind method is used to preconfigure the  function yani  function 

// Object type data type are always occupies 2 different places in memory so they are not same 

// always use fnction  syntax

// * Component mount,  unmount and update means component initially loads, destroy and  destroy and re-created 


// * New Expense ya any other item we are adding does not add it with the help of array always push a const value

// * Agar aik component ka inputed value (maybe text or any other ) then dont pasws to it using states use props.TheData(event.target.value)

// You can use every component as opening and closing tag
{/* <Component></Component> */}

// But if there is no content in opening and closing you can also write it like this 
{/* <Component/> */}

// -----------------------------------
// Important baat about dependency array 
//------------------------------------
// [] dependency array mn bs wo cheezain  jo external hain 

//-----------------------------------------------------
// To convert data from string to integer  in key value pair just add +
// eg  price= entPrice (string)
// eg  price= +entPrice (Integer)

// QUICK LEARNING SUMMARY

//----------------------------------------------------------------
// Components templates
//----------------------------------------------------------------

import React from "react"

const Person = props =>{

    return(
     
        <></>
    )
}

export default Person




// * Created pages folder for handleing full screen pages 
// * Crete components folder to handle components 

//-----------------------------------------------------------------
// useState important hacks 
//----------------------------------------------------------------

// 1. use state to change inputed text dynamically
// 2. use state to pass data from parent component to child with the helpof props 
// 3. use state to pass data from child to parent component by defining a callback function on parent component but can not skip component cycle we have to traverse every component to reach the parent component 
// 4. try to put logic on the main appjs file . we can trigger dynamicaly change name from of component from app js file by passing a function reference

// * if your state update does not depend on the previous then direct state update 
// * if your state update depends on the previous state then use anonymous arrow function to update the states 
// like this 
setPersons((Persons)=>Persons.concat(newPerson) );  // batter approach for prev depeendent states 
// * If we define function inn setStates the functon will automatically receive an argument of previous state. Now we can do anything with that previous state
setPerson ((prevstate)=>...prevstate,title:event.currentTarget.value) 



//----------------------------------------------------------
// About REDUX 
//----------------------------------------------------------

// the initiliazations : When the redux runs for the first time does not trigger the subscriberer to be executed (render)  sirf dispatch() krny se hi subscriber re run hn gy 

// We can perform different action by defining action.type property 


const store = redux.legacy_createStore(CounterReducer)   // making connection b/w store and reducer function 

store.subscribe(CounterSubscriber)  // this function will tell the redux that this function will be executed whenevr the state changes to ensure that the subscriber got the latest state (in simple words renders the subscriber )      

store.dispatch({type:"increment"})   // abhi mn ne yahan dispatch kra tou automatic subscriber run to gya 

// * Store contains certain methods like 
// store.getState()  to get the latest state snapshot 
// store.dispatch()  to perform a certain action 
// store.subscribe(CounerSubscriber)    by subscribing this will ensure that that the subscriber must have the latest state


// STEPS 
// create reducer function
// create store 
// establish connection between store and reducer function
// subscribe a components with the REDUX 
// start dispatching   (store.getState se latest state snapshot )

// * REDUX does not merge the old state with the new state 

//---------------------------------------------------------------
// IMPORTANT ABOUT PROPS 
//---------------------------------------------------------------


// * Can pass function reference, text , data const variable in props 
// * props.children ( it is a reserved props that receive alll the propertiies and object that is between our opening and closing custom components any thing cn go between here )


//------------------------------------------------------------------
// bind method 
//------------------------------------------------------------------




//--------------------------------------------------------------------
// map function 
//--------------------------------------------------------------------



//------------------------------------------------------------------
// About styling DIFFERENT APPROACHES AND TRICKS  
//------------------------------------------------------------------
styles.process-control == styles["process-control"]
// because in js string are also valid keys 

// * BY SIMPLY CREATING STYLESHEET FOR THAT SPECIFIC COMPONENT OR PAGE

// * Inline styling in react ( small example )

const style = {
    backgroundColor:'black',
    cursor:'pointer',
  
  }
  return(
    <button style={style} className='button' onClick={ChangeNameHandler.bind(this,"nabo")} title={"i am button "}>Change name </button>
  )




// * Conditioned content displaying 
// ----------------------------
// 1. By ternary expressions:
// syntax 1(including if and else dono ) :
// *  {agar ye meet kr ja aa ? (tou ye)   : (else ye)}

//sample example 


<label style={!isValid?{color:"red"}:{color:"black"}}>Course Goal</label>
<input style={!isValid? {backgroundColor:"rgba(255, 50, 50, 0.269)",border:"2px solid red"}:"transparent"} type="text" onChange={goalInputChangeHandler} />

{/* <label style={{color: !isValid?"red": "black"}}>Course Goal</label> syntax 2  */}

// syntax 2 : Only if condition syntax
// *  {agar ye meet kr ja aa && (tou ye)}


// 2. By if and else 
// to display content using if and else first define a with let (coz hme ise change krna hoga). phir aik condition to channge it value from its default then render it in return . 


//
//-------------------------------------------
// Applying styles dynamically 
//--------------------------------------------

// Use dynamic classes adding by adding dynamically classes with the help of `` backticks (classes are defined in .css class ) like this 
<div className={`form-control ${!isValid? "invalid":""}`}></div>
//-------------------------------------------------------------------------
// Different new content displaying method
//-------------------------------------------------------------------------


// Displaying the content conditionally  with the help of if else 

let persons=null;
if (showPersons) {
    persons=( <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div> )
 

}
return (


    <div>
              {persons}
    </div>
)


// ------------------------------------------------------------
// for in and for of 
//-------------------------------------------------------------

// use for in loop for looping an object
// use for of loop for looping an array 


//---------------------------------------------------
// About modals 
//--------------------------------------------------


// Modal is an overlay it is above everything (side drawers and dialogs are also overlays)

// and it should be above everything else 

//--------------------------------------------------------------------

// About dates 

//--------------------------------------------------------------------


// to create a date


// date creations ---------------------------------
const date = new Date   
const date = new Date.now
const date = new Date(2022,7,3)

{
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },


// to extract date in human readable format  we have to use toLocaleDateString method 


const date = new Date(2022,7,2)  
// console.log((new Date.now.toString()))

const month =date.toLocaleDateString('en-US',{month:'long'})
 const day = date.toLocaleDateString('en-US',{day:'2-digit'})
//  const day = props.date.toLocaleDateString('en-US',{day:'numeric'})// OR
 const year = date.getFullYear()
 console.log(day,month,year)  // 02 August 2022 OUTPUT 



 ///----------------------- getMonth() method 
 const moonLanding = new Date('december 20, 69 00:20:18');

console.log(moonLanding.getMonth()); // (January gives 0)
// expected output: 6

//---------------------------------------------------------------------
// Destructuring
//---------------------------------------------------------------------
const {isValid:isValidEmail}=EmailState
const {isValid:isValidPassword}=passwordState

EmailState.isValid && passwordState.isValid


//---------------------------------------------------------------------
// Portals 
//---------------------------------------------------------------------

//  portals need 2 things 
// index.js  
// * a place where you want to place your component
// * and then you need to let the component know that it should have a portal to that place with the help of react dom 

import ReactDOM from "react-dom";
// index.js 
<div id="modal-root"></div>


// App.js 

{ReactDOM.createPortal(<Modal onConfirm={props.onConfirm} title={props.title} message={props.message}/>,document.getElementById("modal-root"))}


//-------------------------------------------------
// useEffect ()
//------------------------------------------------

// it is used for form validations 

// login status save aur cookies ki values ko set krna

// aur  https requests 

enteredEmail.includes('@') && enteredPassword.trim().length > 6




//--------------------------------------------------------
// useReducer()
//--------------------------------------------------------

// Updating states based on other states 


// 
// How to use steps 

// *  define useReducer() 
// const [userState,dispatchUser]= useReducer(UserReducer,{name:"",age:""},optional)

// * write the reducer function  (where state is the last state snapshot)
// * We can use state property to access the last state snapshot properties 
const UserReducer(state,action)   // action is passed through dispatch (action use krny ke lia dispatch mn hona cha ha ya . state use krny ke lia previous state ki properties honi cha ha ya )

// * excess states like this UserName.name
// * update the states by giving an identifier and using patch function 
// dispatchEmail({type:"USER_INPUT", val})


// Code Implemantation 


import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action)=>{
  if (action.type==="USER_INPUT") {
    
    return {value:action.val,isValid:action.val.includes("@")}  // we should return a state here 
  }

  if (action.type ==="INPUT_BLUR") {
    return {value:state.value, isValid:state.value.includes("@")}
    
  }
  return {value:'',isValid:false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [EmailState,dispatchEmail]= useReducer(emailReducer, {value:'',isValid:true})

  // useing useEffect for from validation to enable button . when ever enteredEmail and enteredPassword changed  -----------------------
  // useEffect(()=>{
    
  //   const identifier = setTimeout(()=>{
  //     console.log("checking validity")

  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   },1000)

  //   return ()=>{   //=======
  //     console.log("CLEANUP")
  //     clearTimeout(identifier)}

  // },[enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT", val:event.target.value})
    // setEnteredEmail(event.target.value);



    setFormIsValid(
      enteredPassword.trim().length > 6 && event.target.value.includes('@')
    );
 
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && EmailState.isValid//++++++
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(EmailState.isValid);
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(EmailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            EmailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={EmailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;



//---------------------------------------------------
// useRef()
//--------------------------------------------------


// We will mostly work with refs in input tag to fetch the input to avoid re rendering on every key strokes 

// Connection establish krna by setting a ref property 

// The first time react reaches this code and renders this code it will actually set the values of name input ref  to the native dom element that . And what will end up in the nameInputRef is the native dom element 

// * Ref only renders once but the states renders on every key stroke . iske andar poora dom element aa jata ha 

// Steps to use Ref 
// * Define ref object  ----> const nameInputRef = useRef()
// * Establish a connection of that ref with html element with a key prop ---> let say in input tag          ref={nameInputRef}
// * Excess the inputed value where you want to use lets say in on submit ahndler function by defining a variable like this -----> const EnterUserNmae = userRef.current.value


// BUT PRIMARLY USED TO FOCUS the input field 


//----------------------------------------------
// auth-context (template)
//----------------------------------------------

import React from 'react'

const AuthContext = React.createContext({
    isLoggedin : false 
})

export default AuthContext;



// Applying auth context in App.js using useContext() hook (recommended way)

// To use this global state we have 
// * To define <authContext.provider> tag ( is tag mn jo bhi components warped hn gy un sb mn authContext accessable hn gy)
// * ab receive krny ke 2 methods hain using authContext.consumer
// using use effect hook 



//-------------------------------------------------------
// SEND HTTP REQUESTS 
//-------------------------------------------------------

// * Use use effect when you want to fetch the data from the server instantly 


// SEND REQUEST TEMPLATE  

import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setIsLoading]= useState(false)
  const [error,setError]= useState(null)

//  async function fetchMoviesHandler(){}
 const fetchMoviesHandler = useCallback(async ()=>{
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


//------------------------------------------------------------------
// Sending Http post request and get request template 
//-----------------------------------------------------------------

// By DEFAULT the fetch method sends an http get request 
// We can change method by changing the method property in the fetch function to 'POST'

// That post request will typically create a resource in a database by sending an indicator to the api that you are depending 

// this method will convert films json into javascript objects
const data = await response.json()
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



//------------------------------------------------------------------------
// for in loop in javascript (it is to iterate objects)
//------------------------------------------------------------------------

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

//------------------------------------------------------
// dynamically excessing the property in javascript object  
//------------------------------------------------------

for(const key in data ){      // data is an object 
  loadedMovies.push({
    id : key ,
    title: data[key].title,
    openingText: data[key].openingText,
    releaseDate: data[key].releaseDate,
  })
}


//--------------------------------------------------------

// post and get 

// ye dono await 
// phalay fetch() method in response  aur uske bracket mn {}  methods 
// then const data =  response.json
// Then modify teh fetched data if it is get otherwise return in post  

//-----------------------------------------------------------------
// IMPORTANT STEPS for get 
//-----------------------------------------------------------------

// ye dono await 
// phalay fetch() method in response  aur uske bracket mn {}  methods 
// then const data =  response.json

const response = await fetch(
  'https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json'
);

if (!response.ok) {
  throw new Error('Request failed!');
}

const data = await response.json();

// make a const array 
// traverse each item of the data as per required structure and then set task to that array 

const loadedTasks = [];

for (const taskKey in data) {
  loadedTasks.push({ id: taskKey, text: data[taskKey].text });
}





//----------------------------------------------------------------
// How to work with Router properly 
//----------------------------------------------------------------



// To install react react rouer/ to use react roter in porjects

// * run npm i react-router-dom@5    ( for version 5 )

// * then wrap the whole project with browserRouter in index.js 

// * then define routes in App.js 

// APP.js 

import { Route, useHistory } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      
        
      <Route path="/welcome"><Welcome></Welcome></Route>
      <Route path="/products"><Products></Products></Route>
      <h2>Let's get started!</h2>
      
    </>
  );
}

export default App;


// index.js

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

// *  then to change page/ components by clicking use Links/NavLinks 

//  Sample syntax

{/* <a href="/nabiha"></a>

<Link to="/nabiha"></Link> 
<NavLink activeClassName={styles.active} to="/nabiha"></NavLink>  */}

// Code Implementation


import React from "react";
import { Link,NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css"

const Person = (props) => {
  return (
    <header className={styles.header}>
<nav>
    <ul>
      <li> <NavLink activeClassName={styles.selected}  to="/welcome">Welcome page</NavLink></li>
      <li><NavLink activeClassName={styles.selected} to="/products">Products page</NavLink></li>
    </ul>
</nav>
    </header>
  );
};

export default Person;


// A route that can be changed is called dynamic route 
// to extract the exact page of that product from db of that specific id
// and is defined like this 

// * /productItem/:productId 

// /productItem/:anyroute    //   ye : special ha  

//   in the browser by using :  it is like  /product/anything 
// * Define a dynamic route like this 
<Route path="/product-details/:productId"> <ProductDetails/> </Route>


// * To extract data from the dynamic route (we can extract the data from the dynamic route from the component that is using that route)


// Like this 


import React from "react"
import { useParams } from "react-router-dom"
const ProductDetails = props =>{
    const params = useParams()

    return(
     
        <div>
            <h1>product datails</h1>
            <h2>{params.productId}</h2>
            <h2>{params.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui, ab debitis distinctio perferendis officia molestiae quasi quam inventore impedit nisi, laboriosam reiciendis laborum incidunt velit a maxime. At, voluptas?</p>
        </div>
    )
}


//---------------------------------------------------------------
// About data fetching from URL
//-----------------------------------------------------------------

// * Using react router when somthing of specific id is clicked .then update the url with its id then by using use params store that id then compare the fetched data with the params.id to get it from the db

//----------------------------------------------------------
// Page not found or invalid url feature in react router
//----------------------------------------------------------

// Set the Path like this 

<Route path="*"><NotFound/></Route>


// CodeImplementation  


import MainNavigation from "./components/layout/MainNavigation";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import AddNewQuote from "./pages/AddNewQuote";
import {Route, Redirect, Switch} from "react-router-dom"
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
      {/* <MainNavigation></MainNavigation> */}
      <Layout>
        <Switch>

        <Route path="/" exact >
          <Redirect to="/all-quotes"/>
        </Route>
        <Route path="/all-quotes" exact><AllQuotes/></Route>
        <Route path="/add-new-quote"><AddNewQuote/></Route>
        <Route path="/all-quotes/:id"><QuoteDetails/></Route>
        <Route path="*"><NotFound/></Route>
        </Switch>
      </Layout>


    </div>
  );
}

export default App;


//----------------------------------
// Nevagiting back on success submission OR back button  
//-----------------------------------

// Introducing to useHistory : 
// useHistory is used to implement programatic navigation when we want to work with the submit button or want to implement back button use the useHistory hook 
// it has 2 main methods 
// 1. push ( when we want to facilitate the user with the back and front facilitation)


history.push("/all-quotes")

// 2. replace ( replace the current page with the pathed one)

//CODE IMPLEMENTATION

import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
const history = useHistory()
  function submitFormHandler(event) {
    event.preventDefault();
    
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    history.push("/all-quotes")
    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
