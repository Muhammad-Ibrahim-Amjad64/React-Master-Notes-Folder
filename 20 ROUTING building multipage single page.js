
//--------------------------------------------------------------------
// I have Learned  
// about defining  Routes and browser router 
// NavLinks and Link 
// useParams()   Routes with parameters  ( to get a specific page from the db for a specific product) and to implement page not found  use wild for all other 
<Route path="*"><NotFound/></Route>

// switch and exact 
// Nested Routes   (in quotes details desplaying commments)
// Redirects   (  / to welcome pr )
// usehistory() (mostly used inside the form component)   ( to goback after form submission or to implement back button )   -> two main methods push("/pathhere") and history. , and replace to replace the current page entirly with the pathed page 

//---------------------------------------------------------------------------




// React routing is an illiusion of multipage the page does not chnge but the url changes 
// difeerent components redenerd on different url (or you can cay that pages)

// traditional way we will generate different html files on the server and then requests to different urls and pages are rendered by the browser diff pages sent to the client // in that approach we loose our all states we wait for the req res cycle and then let the browser to render our page 

// you can manipulate the url using javascript and the url changes are then handeled by the client-side react app // changs are made without new html file 


// we could write our own code for that

// where we check what's in the URL

// and then set our own state

// and where we listen to clicks on links

// and prevent the browser default

// of sending a request

// and instead again change some state

// to render something else onto the screen.

// We could do all of that

// but react router already done that for us 
//--------------------------------------------------------------
// USing react router in react projects 
//---------------------------------------------------------------

// To install react react rouer/ to use react roter in porjects

// * run npm i react-router-dom@5    ( for version 5 )

// GOAL LOAD DIFFERENT COMPONENTS ON DIFFERENT PATHS 


//  * then  in App.js define Routes and it have prop of path 
// like this 

import {Route,BrowserRouter as Router} from "react-router-dom"
import Products from "./components/Products";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <Router>
        
      <Route path="/welcome"><Welcome></Welcome></Route>
      <Route path="/products"><Products></Products></Route>
      <h2>Let's get started!</h2>
      </Router>
    </div>
  );
}

export default App;


// OR WRAP THE OVERALL APP WITH THE BROWSERROUTER IN INDEX.JS  LIKE THIS 


// APP.js 

import { Route } from "react-router-dom";
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


//----------------------------------------------------------
// Working with links 
//---------------------------------------------------------

// yani jb hm kisi button pr click karain to uss page pr chalain jaa aain


// like we use ahref  to generate linked buttons text para etc instead of using ahref use link method from react router dom 
// like this 
// *
<a href="/nabiha"></a>

<Link to="/nabiha"></Link>  // This will eb rendered as a anchor tag in the real dom 

// that link method prevents defaults and manually manipulates the url for us and then render the components that matched that url  fake navigation

//--------------------------------------------------------------
// Working with NavLinks
//--------------------------------------------------------------

//* These works same as a Link tag of react-router-dom but it provides active ClassName prop to apply styling on active button etc like this 

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


//---------------------------------------------------------------
// Working with dynamic routes 
//---------------------------------------------------------------

// A route that can be changed is called dynamic route 
// to extract the exact page of that product from db of that specific id
// and is defined like this 

// * /productItem/:productId 

// /productItem/:anyroute    //   ye : special ha  

//   in the browser by using :  it is like  /product/anything 

// CODE IMPLEMENTATION 

import { Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader"
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <MainHeader/>
      <main>

      <Route path="/product-details/:productId"> <ProductDetails/> </Route>
      <Route path="/welcome"><Welcome></Welcome></Route>
      <Route path="/products"><Products></Products></Route>

      </main>
      
    </>
  );
}

export default App;

//---------------------------------------------------------------
// Extracting the data from the parameters 
//---------------------------------------------------------------

// We can extract the data from the parameters by using params hook


// by using the use params hook like this 

// app.js mn 

<Route path="/product-details/:productId"> <ProductDetails/> </Route>

// productDetails.js

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

export default ProductDetails


//---------------------------------------------------------------
// Working switch switch and exact 
//---------------------------------------------------------------

// REACT ROUTER  ONLY CHECKS THE FIRST ROUTE  /prdoducts 
// Aagy kuch bhi ho farq nai prta . They will be considered as the same route 


// by defining the /products/:id   and /products 

// if  a route start with /products or anything then both of the routes will be loaded

// both of the pages are rendered coz it checks the first /products

// So we can use switch to display the 1st occurance that matches the first occurance of the matching  route  because in dynamic routes anything can also be NULL which is the thing that we dont want in some cases to load 
// /products/:anything  &  /products    at the same time 

// WHERE  /products/d/dd/sss/ss   is also valid   

// *  About Switch Component : 
//   The switch component will load the first occuring component
// The switch component,
// can be wrapped around your route components.
// So you add the opening and closing tags
// around all these routes.
// And then only one of these routes,
// will be active at the same time.
// And it will be the route which is matched first. 


// Like this  Code Implementation 


{/* <Switch>

<Route path="/welcome"><Welcome></Welcome></Route>
<Route path="/products/:productId"> <ProductDetails/></Route>
<Route path="/products" ><Products></Products></Route>
{/* <Route path="/products/:s"><Products></Products></Route> */}

// </Switch> */}



// *  About Exact 
// Or use the exact path to render a page only when the exactly route will be rendered 


/// CODE IMPLEMENTATION 

import { Route,Switch } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader"
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
    

    
      <MainHeader/>
      <main>
    {/* <Switch> */}

      <Route path="/welcome"><Welcome></Welcome></Route>
      <Route path="/products/:productId"> <ProductDetails/></Route>
      <Route path="/products" exact  ><Products></Products></Route>
      {/* <Route path="/products/:s"><Products></Products></Route> */}

    {/* </Switch> */}
      </main>
      
    </>
  );
}

export default App;


//-------------------------------------------------------------
// About Nested Routes 
//-------------------------------------------------------------

// YOU are not limited to defining routes in one place only 


// you can define where ever you want in the component tree 

// We can also define route ke andar route for example if a welcome page is active then this page will be active then the route define in it will be evaluated  evaluated but it should match the current route starting point 


// App.js  

import { Route,Switch } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader"
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
    

    
      <MainHeader/>
      <main>
    {/* <Switch> */}

      <Route path="/welcome"><Welcome></Welcome></Route>  // iske anda aik aur rout kra 
      <Route path="/products/:productId"> <ProductDetails/></Route>
      <Route path="/products" exact  ><Products></Products></Route>
      {/* <Route path="/products/:s"><Products></Products></Route> */}

    {/* </Switch> */}
      </main>
      
    </>
  );
}

export default App;



// Welcome.js 

import React from "react"
import { Route } from "react-router-dom"
const Welcome = props =>{

    return(
     <>
<Route path="/welcome/new-user" >
    <h1><b>Hello new USER To the club :)</b></h1></Route>  //This is nested route 
        <h1>Hi I am Ibrahim that loves Nabiha</h1>
        <div>
            <h2>
            Welcome to our store 
            p1 p2 p3 
            </h2></div>
     </>
    )
}

export default Welcome



// /welcome/new-user    pr hi nested route trigger hoga 



//--------------------------------------------------------------------
// Woring with redirects 
//--------------------------------------------------------------------

// In redirect we will move from one route to another if  it matches the exactly our entered route 

// For example if we want to redirect the user for the only / then we can redirect it to the other page as a defalt page 

// * By using the Redirect  component provided by rrd


// CODE IMPLEMENTATION 

{/* <Route path="/" exact>
          
<Redirect to="/welcome" />
</Route> */}

import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <MainHeader />
      <main>
        {/* <Switch> */}
        <Route path="/" exact>
          
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products/:productId">
          
          <ProductDetails />
        </Route>
        <Route path="/products" exact>
          <Products></Products>
        </Route>
        {/* <Route path="/products/:s"><Products></Products></Route> */}

        {/* </Switch> */}
      </main>
    </>
  );
}

export default App;


//--------------------------------------------------------------
// TIME TO PRACTICE A Project in whic you can add a quote 
//----------------------------------------------------------------

// JB BHI KISI ROUTE MN CLICK ON LIST ITEM AND WANT TO EXTEND IT BY ID THEN USE :ID ROUTE IN App.js   . Special pages are only nested 



// Routes required 


// list of all quote 
// quote details page
// add new quote 


// functionality 
// quote ke andar  comments 
// 


//----------------------------------------------------------
// Handling the page not found feature 
//---------------------------------------------------------

import React from "react"
import { useParams, Route } from "react-router-dom"
import Comments from "../components/comments/Comments"
import NoQuotesFound from "../components/quotes/NoQuotesFound"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
const DummyQuotes = [
    {id:"q1", author:"Nabiha", text:"Life is so positive"},
    {id:"q2", author:"Ibrahim", text:"Failure is a key to success"},
    {id:"q3", author:"Sufiyan", text:"Good friends are blessing"},
    
]
const QuoteDetails = props =>{

    const params = useParams()
    const quote = DummyQuotes.find(quote=>quote.id===params.id)
    if (!quote) {
        return <NoQuotesFound/>       
    }

    return(
     
        <>
        <h1>Quote Details</h1>
        <HighlightedQuote text={quote.text} author={quote.author} />

        
        <Route path="/all-quotes/:id/comments" > <Comments/></Route>
        {/* <Route path={`/all-quotes/{params.id}/comments`} > <Comments/></Route>  Alternatively we can also do that */}
        </>
    )
}

export default QuoteDetails




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


///-------------------------------------------------------------------
// Preventing unwanted routes and transitions 
///-----------------------------------------------------------

// For example we are fillling a form then i accidently swiped back to move to another page then all of our states are lost 

// * To implement it go to the form component 

// * 1st  We have to determine when the user start working ( eg when the fprm gains focus )

// * 2nd we wanna show warning to the user if he or she wants to leave the page  


//1ST PROBLEM SOLUTION 
// * We can check if the form gain focus by defining the onFocus prop on the form like this 
<form onFocus={onFocusHandler}></form> 

// * we will manage the focus with new state piece by setting it to true when the user starts data in the form ( IS STATE KO BAAD MN CUSTOM HOOOK MN ADD KRDY NA APNAY WALAY )

const [isEntering,setIsEntering] = useState(false)    // ot manage focus prop 

const onFocusHandler = ()=>{
  setIsEntering(true)

  console.log("Form is focused nabiha ")

}

//2ND PROBLEM SOLUTION 
// * TO show warning to the user we will use the prompt component of the react router dom 

// like this  which is managed by certain conditions 
<Prompt when={isEntering} message={"Are you sure ? your form data will be lost "}/>

// but  it prompt does not allows us to submit the form until we will set it to false so we have to make it false when we submitted  
// * So we will use finish entering function to the entering  like this . 
// Note onSubmitHandler mn nai put karain gy cuz is mn synchronoius process higa to separate funciton use krna chiya ha to make is entering false ot extract more accuracy 

const FinishEnteringHandler =  ()=>{
  setIsEntering(false)
}


<button onClick={FinishEnteringHandler} className='btn'>Add Quote</button> // this os form submit button 

// CODE IMPLEMENTATION 

// quoteForm.js 

import { useRef, useState } from 'react';
import { useHistory, Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
const history = useHistory()
const [isEntering,setIsEntering] = useState(false)    // ot manage focus prop 

  function submitFormHandler(event) {
    event.preventDefault();
    
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    history.push("/all-quotes")
    
    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }


  const onFocusHandler = ()=>{
    setIsEntering(true)

    console.log("Form is focused nabiha ")
  
  }


  const FinishEnteringHandler =  ()=>{
    setIsEntering(false)
  }
  return (
    <Card>
      <Prompt when={isEntering} message={"Are you sure you want to leave ? all your entered data will be lost "}/>
      <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
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
          <button onClick={FinishEnteringHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;


//-----------------------------------------------------------------------
// Working with quary parameters 
//----------------------------------------------------------------------

// *  Sorting the fetched data in assending or decending order



//---------------------------------------------------------------------
// Getting creative with the nested routes 
//--------------------------------------------------------------------

// We can move the load comments or load more using a new route or load something by making route to exact and put a link in it that refers to another path like this   .. route se dooosry cheezain by changing the link 

import React from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DummyQuotes = [
  { id: "q1", author: "Nabiha", text: "Life is so positive" },
  { id: "q2", author: "Ibrahim", text: "Failure is a key to success" },
  { id: "q3", author: "Sufiyan", text: "Good friends are blessing" },
];
const QuoteDetails = (props) => {
  const params = useParams();
  const quote = DummyQuotes.find((quote) => quote.id === params.id);
  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <h1>Quote Details</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/all-quotes/${params.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/all-quotes/${params.id}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      {/* <Route path="/all-quotes/:id/comments" > <Comments/></Route> */}
      <Route path={`/all-quotes/${params.id}/comments`}>
        
        <Comments />
      </Route>
      {/* Alternatively we can also do that */}
    </>
  );
};

export default QuoteDetails;
