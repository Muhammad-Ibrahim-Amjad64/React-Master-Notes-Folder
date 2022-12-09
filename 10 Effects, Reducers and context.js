// We  will dive in slightly advanced topics of react js 

import { useEffect, useReducer } from "react";




// We will manage more complex states with reducers 

// We will work with side effects  

// Managing app wide or component wide state with a concept called CONTEXT  :
                                    //  Which is built into react to make sharing state and state update across components easier   



//-------------------------------------------------------------
// INRODUCING TO useEffect()
//------------------------------------------------------------

// * SO what is an Effect( or side effect)


// Main job in react is render UI and react  to user input


//  But side effect are Anything else : like sending http requests to the servers, set and managing timers 
//And that not related to like drawing something onto the screen

// * if you put http  request directly into the app component then whenever something changes and re renders then and http request will be sent and that request will get a response from the server and changes something on the screen (update another state) and that will result to re render and you will end up with an  infinite loop (create bugs)


// * So to avoid this problem we will use a useEffect hook


// the useEffect hook is another built-in hook another functionwhich you can use in your functional component

// Syntax  

// useEffect(()=>{},[])
// Where ()=>{}  that function will run when the specified dependencies will be changed // and you use that function to perform side effect work 
// [ ]  we will define dependency here 


//---------------------------------------------------------
// Using useEffect()
//-------------------------------------------------------------------------

// Jb hm login kr aain gy tou page reload hony pr phir se login krna pry ga . that is the thing that we dont want we can use a useEffect() hook for this purpose . to not to write login info everytime 


// The useEffect() will ran only once if there is no dependency . and when the the dependency changed then it will run again .. As there is no dependency then and nothing changed in dependency [] then it will not run again 

// * Without using useEffect that error will arise 
// react-dom.development.js:16317 Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop

// CODE IMPLEMENTATION 

import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // using useEffect---------to disable re logins // agar useEffect ke bagair krty tou infinite loop ho jaati // coz hr re render pr setIsloggIn(true)hota jis se phir se re render hota the loop // useEffect bs aik baar chlta ha then dosri baar tb hi chalay ga jb dependency change hogi 
  useEffect(()=>{
    if (localStorage.getItem("isLoggedin")==="true") {
      setIsLoggedIn(true);
      
    }

  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedin", "true")  // --------------login status local storage ya cookies mnn save krwa skta
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;



//---------------------------------------------------------
//  useEffect() & its dependencies 
//----------------------------------------------------------

// We can also use useEffect() to validate when certain states changed so that we check only when that dependencies changed  // multiple states ke sath aik sath deal krna // can be used for validations also 

// CODE IMPLEMENTATION  



import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useing useEffect for from validation to enable button . when ever enteredEmail and enteredPassword changed  -----------------------
  useEffect(()=>{
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );

  },[enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
 
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
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



//----------------------------------------------------
// Do not these as dependency
//---------------------------------------------------

// you DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid()

// You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc

// You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components


// So what should be added 
// * http requests and timers 
// * States  
// * and props values that the functional component receives reveives coz it can be changed when there is a changes in the parent component  


//-------------------------------------------------------------
// Using the use effect cleanup function 
//-------------------------------------------------------------

// what is cleanup ? : useEffect ka return  
// * useEffect() also runs when the component mounts

// * useEffect()'s (return) cleanup function is placed in a closure that runs immediately when the next useEffect() runs,  or just before "that" component unmount


// * The cleanup function insures only one setTimeout() is active (at a time).


// * The cleanup function does not run when the useEffect() function runs for the very first time 

// * Upper jb hm useEffect use kr rha they tou isme clean up defined nai tha 
// jiski waja se ecery ke stroke pe validity check kr rha tha which is not an ideal approach hmne validiy jb check krni cha ha ya jb user type kr chuka ho jiske lia we can use a clean up to avoid unnecessary http requests to the server 

 // CODE Implementation 



import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useing useEffect for from validation to enable button . when ever enteredEmail and enteredPassword changed  -----------------------
  useEffect(()=>{
    
    const identifier = setTimeout(()=>{
      console.log("checking validity")

      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    },1000)

    return ()=>{   //=======
      console.log("CLEANUP")
      clearTimeout(identifier)}

  },[enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);



    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
 
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
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


//-----------------------------------------------------------------
// useEffect() summary 
//-----------------------------------------------------------------

// useEffect() without dependency array run after every component render cycle 
// not before it not after it but after 
// syntax  useEffect(()=>{})  (without dependency array)
// Clean up function 1st time nai chalay ga jb component component mounted ho ga 
// dosri baar cleanup phalay chalay ga useEffect() function baad mn 


// useEffect() with dependeny : phalay useEffect() chalay on 1st render cycle then jb second baar component re render ho ga tou phalay cleanup chalay ga phir useEffect()


// useEffect() without dependeny empty array : in that case the useEffect() runs only once and the cleanup function will run only when the componeent is removed from the dom ( like hmne login page pe useEffect without dependency define kia tou uske cleanup jb run ho ga jb hm login component ko dom se remove kr ke home screen pr aa ja aain gain )



// -------------------------------------------------------
// Introducing to useReducer
//--------------------------------------------------------


// useReducer() is just like useState but it is more powerful  and is used when you want to updaate multiple states once . is case mn useStare() can be error prone an dcause bugs
// It is an alternative to useState()
// it is slightly more complex to use as it requires bit more setup 

// * When to use useReducer()

// in that code the state updation depends upon multiple states and enteredEmail executes before entered password . So, enteredPassrod might not contain the latest state 
// 1 Agar koi state update mutiple states pe dependent then use useReducer()
setFormIsValid(
    enteredEmail.includes('@') && enteredPassword.trim().length > 6
  );

// two different states that are related / dependent on each other 
// 2 when some state updation is dependent on some another state updation 
const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

// It works in most cases but in some cases . But in some cases enteredEmail was not processed in time . And then we try to update EmailIsValid based on some outdaed email state

// We should use a function form in both cases but we cant because . function mn sirf sETEmailIsVaid() ki prev state aa a gi 


//----------------------------------------------------------------------------
// Using useReducer()
//-----------------------------------------------------------------------------


// Syntax 
const [state,dispatch]= useReducer(reducerfn,initialState,initFn)



// * state : The latest state snapshot as like in useState()
// * dispatch : triggers an update of an state same as useState()
// * reducerFn :this function is called automatically when a new action is dispatched . React will call this reducer function whenever a new action is dispatched so then it will get the last state snapshot managed by react .
// Then the reducer function will return a new updated state 
// * initialSate : the initial state 
// * initialFn : Funtion to set initial state programatically if  your initial state is complex like http request or anything like that 

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

//--------------------------------------------------------
// Applying same logic on password and adding and optimizing useEffect again 
//--------------------------------------------------------
// But apart from this useEffect is the okay way to update the states based on other states .coz it gurantees the presence of latest state presence  


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


const passwordReducer = (state,action)=>{
  if (action.type==="PASSWORD_INPUT") {
    return  {password:action.val, isValid:action.val.trim().length > 6}
    
  }
  if (action.type==="PASSWORD_BLUR") {
    return  {password:state.password, isValid:state.password.trim().length > 6}
    
  }
  return {password:'', isValid:false}

}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [EmailState,dispatchEmail]= useReducer(emailReducer, {value:'',isValid:true})
  const [passwordState,dispatchPassword]= useReducer(passwordReducer,{password:'', isValid:true})
// IMPORTANT CONCEPT 
  const {isValid:isValidEmail}=EmailState
  const {isValid:isValidPassword}=passwordState
  // useing useEffect for from validation to enable button . when ever enteredEmail and enteredPassword changed  -----------------------
  useEffect(()=>{  // Okay way to deal with state update that depends on other states 
    
    const identifier = setTimeout(()=>{
      console.log("checking validity")

      setFormIsValid(
        isValidEmail && isValidPassword
      );
    },1000)

    return ()=>{   //=======
      console.log("CLEANUP")
      clearTimeout(identifier)}

  },[isValidEmail,isValidPassword])  // we only want to re run that function when only isValid is changed not the whole EmailState and passwordState so we will use object destructuring 

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT", val:event.target.value})
    // setEnteredEmail(event.target.value);



    // setFormIsValid(
      // passwordState.password.trim().length > 6 && event.target.value.includes('@')
    // );
 
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"PASSWORD_INPUT",val:event.target.value})

    // setFormIsValid(
      // passwordState.isValid > 6 && EmailState.isValid//++++++
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(EmailState.isValid);
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.isValid);
    dispatchPassword({type:"PASSWORD_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(EmailState.value, passwordState.password);
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
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.password}
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


//-----------------------------------------------------------------------
// Introduction to useContext()
//-----------------------------------------------------------------------

// use useContext() when you dont want to traverse the component tree  to pass the data from one component to the other 
// kebaba case = auth-context 
// * How to use 
// make any folder naming store, context , state
// Then make a file in that folder authContext , auth-context etc 
// define a multiple global states in that file ( that should be used across your app)
// The standard auth-context is like this 
//     auth-context.js --------------
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


// Defining auth provider in App.js--------------

import React, { useEffect, useState,useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // using useEffect---------to disable re logins // agar useEffect ke bagair krty tou infinite loop ho jaati // coz hr re render pr setIsloggIn(true)hota jis se phir se re render hota the loop // useEffect bs aik baar chlta ha then dosri baar tb hi chalay ga jb dependency change hogi 
  useEffect(()=>{
    if (localStorage.getItem("isLoggedin")==="true") {
      setIsLoggedIn(true);
      
    }

  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedin", "true")  // --------------login status local storage ya cookies mnn save krwa skta
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

   
  return (
    // using a ctx to access the isLoggedIn in auth-context
  <AuthContext.Provider value={{
    isLoggedIn : isLoggedIn 
}}> 
    
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
  </AuthContext.Provider>
  );
}

export default App;



// Consuming auth using auth.consumermethod in Navigation.js

import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  // const ctx = useContext(AuthContext)   // ===useing authcontext using use context
  return (
    <AuthContext.Consumer>
      {(ctx)=>{
        return(
          <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        )
      }}

  
        </AuthContext.Consumer>
  );
};

export default Navigation;

//------------------------------------------------------------
// Consuming with the help of useContext()
//------------------------------------------------------------

// Navigation.js 

import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext)   // ===useing authcontext using use context
  return (
  
          <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        
  );
};

export default Navigation;

//------------------------------------------------------
// Making a custom auth context provider component
//------------------------------------------------------


// We can move all the state management of app component 
// * And manages all the states and functions that are present in App.js file in a new AuthContextProvider component that is present in auth-context file 
// * then wrapping the App component with the AuthContext Provider Component in index.js
 // Now using the states everywhere in the app using ctx directly (nice approach)


 //  auth-context.js

 import React from "react";
import { useState,useEffect,useContext } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // alaway add an dummy function it the state should be a func just for vs code optimization
  onLogin:(email,password)=>{}// not doing anything but needed in real app for auth
});

 export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // using useEffect---------to disable re logins // agar useEffect ke bagair krty tou infinite loop ho jaati // coz hr re render pr setIsloggIn(true)hota jis se phir se re render hota the loop // useEffect bs aik baar chlta ha then dosri baar tb hi chalay ga jb dependency change hogi
  useEffect(() => {
    if (localStorage.getItem("isLoggedin") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedin", "true"); // --------------login status local storage ya cookies mnn save krwa skta
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin:loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// Now  using it into App.js


//  So App.js Becomes 


import React, {useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {



   const ctx = useContext(AuthContext)
  return (
    // using a ctx to access the isLoggedIn in auth-context

    <>
      <MainHeader  />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
        {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}
      </main>
    </>
  
  );
}

export default App;



// REACT CPNTEXT TEMPLATE 


// store  -> cart-context.js and 

// cart-context.js 

import { createContext } from "react"

const cartContext = createContext(
    {
        login : false,
        addItem:()=>{}
    }
)

export default cartContext


// cartContextProvider.js--------------

import cartContext from "cart-context"

const cartContextProvider = props=>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(true);

    const additemHandler= ()=>{

    }


    const contextvalue ={   // bs ye set karo and define functions  accordingly 
        login : isLoggedIn,
        addItem: additemHandler
    } 
    
    return (
    <cartContext.Provider value={contextvalue}>
        {props.childern}
    </cartContext.Provider>)

} 

export default cartContextProvider

//---- Consuming 


import { useContext } from "react"
import cartContext from "./cart-context"

const ctx = useContext(cartContext)



const Person = ()=> {
    
    const ItemHandler = ()=>{
            ctx.addItem({...Item,amoutn:1})
    }
    
    
    return
    <>
    <button onClick={ItemHandler}></button>

    </>
}

export default Person 


//-----------------------------------------------------------
// React Context limitations 
//-----------------------------------------------------------


// * Dont use use context in UI components 
// * If your state changes multiple times per second then useContext is not optimized for that 

//-----------------------------------------------------
// Rules for using react hooks 
//-----------------------------------------------------

// You are only allowed to use react hooks in a component function not other functions 


// You can not use hooks in nest component function bs component function ke top level pr hi use krny hain 

// Always add dependency array in useEffect() if is is using any state in it  


//-------------------------------------------------------
// Diving into forward refs 
//-------------------------------------------------------

//####
// Using focus method in the input method the use of  that focus the input field by default


// We can add ref on a  Custom component using "useImperativeHandler" which allows us to use this component imperatively which means not through regular state management or props management but by calling someting programatically --> not recommended 


// Got Bugs Compare Login and Input.js yesterday
//####


// use  forward ref to pass the ref value to the custom input components (in most cases)
// by setting ref={userRef}  on custom input component 
// and in input component wrap the component with React.forwardRef and set props,ref
// and set ref = ref in custom input component 

// Sample code implementation 

// input.js 

import React from 'react';



import styles from './Input.module.css';

const Input = React.forwardRef((props,ref) => {
  
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}   />
      {/* <input {...props.input} {...{min:3,max:6}}  /> */}
    
    </div>
  );
});

export default Input;

// YE STANDARD FOR EXCESSING INPUT 

// <Input
//input={{ id: "MealInput", min: 1, max: 5, step: 1, type: "number" }}
//label="Amount"
//></Input> 

// import React from "react"
// import classes from './Input.module.css';


// const Input  = props =>{

//     return(
//      <>
//         <div
//         className={`${classes.control} ${
//            props.isValid=== false ? classes.invalid : ''
//         }`}
//         >
//         <label htmlFor={props.id}>{props.label}</label>
//         <input
//         type={props.type}
//         id={props.id}
//         value={props.value}
//         onChange={props.onChange}
//         onBlur={props.onBlur}
          
//         />
//       </div>

//           </>
//     )
// }

// export default Input 

// Ye ye props dainay hn gy      
// <Input
// label="E-mail"
// type="email"
// id="email"
// isValid={isValidEmail}
// value={EmailState.value}
// onChange={emailChangeHandler}
// onBlur={validateEmailHandler}
// />



// MealItemForm.js 

import React, { useRef } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const MealAmountRef = useRef()
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("yaha aya")
    console.log(MealAmountRef.current.value , "ye ha value")
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        input={{
          id: "MealInput" + props.id,
          min: 1,
          max: 5,
          step: 1,
          type: "number",
          defaultValue: 1,
          
          
        }}
        ref={MealAmountRef}
        label="Amount"
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;



//-----------------------------------------------------------------------------------
// useContext ki achi implementation
//-----------------------------------------------------------------------------------
// SO use useContext() are with the the states and states updating funtion in it so that we can point out to ctx.onAddgoal = (goal)=>{}

// then in provider  value ={ onAddgoal:goalHandler}

// like this 

