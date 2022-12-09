// We will discuss 
// * How does react works behind the scenes 
// * Understanding the virtual  dom and dom updates 
// * Understanding the state and state update in react 


// React does not know about the web  it does not know how to wok with browser 
// it knows how to work with components and it does not care that components contain html eleemnts or fictional eleemnts 

// * React is just a library that manages states and components react only cares about components and props it cares about context (component wide data )

// * React determines how the components tree looks like and what should it look like  then that information is handeled by react dom the react dom manipulate the real dom to match that virtual dom 


// * React re run a component function and yes it does (when ever state props or context of a component changes that component function is re executed ) 

// * Re evluating a component does not mean re evaluating a dom they are two different things . React component re evaluate krta ha react dom real dom change krta ha in accordance to that changes made 


// * React just only send the changes that accurs between the last snapshot and the current snapshot to the real dom . 

// * React does not touch the unchanged the content but  only that content in rendered that is changed 

// * The component where you manage state or where you have a props or context (agar kisi component mn props ya context change ho ga tou wo component re render ho ga )


// * If a parent component changed then their all child components will re render . but it causes a memory consumption 


//-------------------------------------------------------------
// React.memo() to reduce re rendering of the components
//-------------------------------------------------------------

// React.memo() : 
            // It is a great tool when your app have a very huge tree of components to avoid re rendering use react memo .  but if your component have alot of props then it canbe slow coz it check the previous props  value and the current props value to decide whether te component should be renderd again or not. But that optimiztion comes at a cost the memo method here is check props valuse to the previous props values to decide to render component or not 
            // We can use react memo by  warpping component export like this
            export default React.memo(Person)

            // false ===false 'hi ' === 'hi'  (true)
            // [1,2,3]===[1,2,3]


            // * When the component is re rendered all the function and varibles are created and executed again as a brand new 
            // * Functions are non premetive value and is an object in javascript 


            // in premetive values the comparism is like this 
            // props.variable === props.previous.variable 

            // In non premetive values the comparism is like this 
            // props.onClick === props.previous.onClick    ( they have 2 functional objects)

            // And objects are never equal in js  until and unless they point at same memory location 
            
            // * Then react memo fids out that the values changed . So to compare 2 functions in react . react gives us a useCallback() hook 

//-----------------------------------------------------------------------------
// Using useCallback() to stop recreation of the functions so that they can be compaired and to support usememo() with objects 
//-----------------------------------------------------------------------------




// Code Implementation

import React from 'react';
import {useCallback,useState} from 'react';

import './App.css';

import Button from './components/UI/Button/Button';
function App() {
  const [first, setfirst] = useState(true)
  const [firstt, setfirstt] = useState(true)
  const toggleFunctionHandler = ()=>{
    setfirst((prev)=>(!prev))
    

  }

  const something=useCallback(()=>{
    setfirstt((prev)=>(!prev))
  },[])

  
  return (
    <div className="app">
      
      
      <button onClick={toggleFunctionHandler}> click me </button>
      {/* <button onClick={toggleFunctionHandler}> click me </button> */}
      <button onClick={toggleFunctionHandler}> do something </button>  
      {/* ye koi aur state change krny pr button phir se render ho rha ha which is not a good practice now wrapping the click me button in react.memo() to avoid if wrapping it is not redering again and again  */}

        {/*   ki jagah  first to visualize premetive comparism*/}
      <Button  onClick={something} helo="helo" >Submit</Button>  
      {/* the function is passed as an argument so prop mn function ka comparisn ho g aur ye fail ho ja aa ga so we use callback */}
    </div>
  );
}

export default App;

//-----------------------------------------------------------
// useCallback() dependecy array
//-----------------------------------------------------------

// Jb useCallback() kisi function ko copy bna rha hota ha aur uske andar uske parent function ka koi state save ho gi tou jb wo state change hogi tou useCallback() ne pooranay walay ki copy bna aai wi ho gi jiski waja se wo function bekaar ho jaa a g as its  content is still old 
// But we can fix that issue by defining a state or variable that is defined to the parent function inside the dependency array of the useCallback() 


//------------------------------------------
// Behind the scenes of states 
//------------------------------------------

// We does not re initialize states as it is coming from the react 
// React does simple state managing and updating not reiniialize(unless the component is totally removed from the dom ) it like functions ,const etc 

// Understanding state managing and sheduling 

// The states are performed in order
// Agar  kisi function mn ( 2 ya 3 stattes updates hn gi tou react un sbko aik sath batch kr ke ececute kry g )

//---------------------------------------------------------
// Understanding useMemo() 
//--------------------------------------------------------

// useMemo() memorize the data jis operation ko bh memorize krwana ha just wrap it into useMemo()