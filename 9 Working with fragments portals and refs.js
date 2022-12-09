// -----------------------------------------------------------
// Limitations of jsx
//------------------------------------------------------------

// * you cant not have more than one jsx element (one root eleemnt)
// ( coz you can not return more than one element in js . but can return an array of element)

// * bs warpping jsx eleemnts with a div will work  


// WRAPPING COMPONENTS IN divs is ok but not not ideal so making wrapping component can make sense 

//-------------------------------------------------------
// Making wrapper for warpping instead if div
//-------------------------------------------------------

// coz alot of div 

// Wrapper.js 
const Wrapper = props=>{
    return props.children
}


export default Wrapper;

//------------------------------------------------
// React fragments 
//------------------------------------------------

// React has built-in warpper component called react fragment  which can be written like this to wrap
 
//  <></> 

<React.fragment> </React.fragment>  // or like this 

// by: import React {fragment} from "react"
{/* <fragment></fragment> */}



//---------------------------------------------
// React protals 
//----------------------------------------------


// Modal is an overlay it is above everything (side drawers and dialogs are also overlays)

// So,it should be above everything else . adding that modal overlay next to other component is not a good practice coz it is overlay and it should be above every other components .the z-index in css is not very effective and technically it is not correct as the modal in real in nested in some html element but that shlold not happen 

// * We can achieve this by using PORTALS which does not change the jsx code but changes the structure in the rendered real dom  


// Portals need 2 things
// * a place where you want to place your component
// * and then you need to let the component know that it should have a portal to that place with the help of react dom 

// Marking a  place in index.html 

// index.html  

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    {/* <!-- they will contain all kinds of modals overlays etc  --> */}
    <div id="backdrop-root"></div>  
    <div id="modal-root"></div>
    <div id="root"></div>

  </body>
</html>


// NOW letting the component that it should be portaled by using reat dom 
// ReactDOM.createPortal(component,location) 

// Code implementation  

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
//  breaking the Error modal into 2 different components
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
// using protals is file mn 3 components hain mgr file aik hi ha 
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(<Modal onConfirm={props.onConfirm} title={props.title} message={props.message}/>,document.getElementById("modal-root"))}
    </>
  );
};

export default ErrorModal;


//---------------------------------------------------------------
// Working with refs useRef()  
//---------------------------------------------------------------

// -- Dont manupulate the real dom using refs (like changing css removing element)

// But removing the inputed text is okaish way in real world
// * If you just want to read the input value then using ref is a batter solution 

// *  Where "ref" is a special props in react which you can attach to any html/ jsx element 

// We will mostly work with refs in input tag to fetch the input to avoid re rendering on every key strokes 

// Connection establish krna by setting a ref property 

// The first time react reaches this code and renders this code it will actually set the values of name input ref  to the native dom element that . And what will end up in the nameInputRef is the native dom element 

// * Ref only renders once but the states renders on every key stroke . iske andar poora dom element aa jata ha 

// Steps to use Ref 
// * Define ref object  ----> const userRef = useRef()
// * Establish a connection of that ref with html element with a key prop ---> let say in input tag          ref={userRef}
// * Excess the inputed value where you want to use lets say in on submit ahndler function by defining a variable like this -----> const EnterUserNmae = userRef.current.value

// Listening Inputtexts using refs in AddUser.js
// CODE IMPLEMENTATION 

import React, { useState , useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  // const [UserName, setUserName] = useState('');
  // const [Age, setAge] = useState('');
  const [error, setError] = useState();

  const RefUsername = useRef()
  const RefAge = useRef()

  const addUserHandler = (event) => {
    event.preventDefault();
    const EnteredUserName = RefUsername.current.value
    const EnteredAge = RefAge.current.value

    if (EnteredUserName.trim().length === 0 || EnteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+EnteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(EnteredUserName, EnteredAge);
    RefUsername.current.value = ''
    RefAge.current.value = ''
    // setEnteredUserName('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  //   console.log(EnteredUserName.current.value)
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
  <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            
            ref={RefUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
       
            ref={RefAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;






//--------------------------------------------------------------
// Controlled vs unControlled components 
//--------------------------------------------------------------

// All input components which has on click state management are controlled components because their internal state is controlled by react 

// and components using ref  we have uncontrolled input components //__________________contnet coming soon 

// Controlled components are those which are controlled by other components like we pass selected year from expensesList to expensesFilter

// Uncrolled which are not controlled by another components 


// Stateless are the dumb components only displays some data does not contains any states 

//  Contains the states 

