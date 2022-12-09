// ----------------------------------------------------------
// INTRODUCING useState hook 
// ----------------------------------------------------------

import { useState } from "react";

// * you can also update state in many ways like by using settimeout r other conditions like this (db or http response simulation)

const titleChangeHandler = () => {
    setTimeout(() => {
      settitle("Syeda Nabiha Jamali");
    }, 4000);
  };

// REACT DOES NOT AUTOMATICALLY RE RENDERS . IT WILL ONLY RE RENDERS WHEN THE STATES ARE TRIGGERED . 
 
// STATES RETURNS 2 ELEMENTS  
// * The first element is the ltest state snapshot 
// * the second element is a function that allows us to update that state replace it with a new value and tells react that it should re render 
// * initial value kuch bhi daalo once the state is update it does not matters whar the initial value is 

// * if your state update does not depend on the previous then direct state update 
// * if your state update depends on the previous state then use anonymous arrow function to update the states 
// like this 
setPersons((Persons)=>Persons.concat(newPerson) );  // batter approach for prev depeendent states


//  * You can also update multipe states at once by passing an useState({}) object 
//like this 

const [input,setInput] = useState({
  title:'',
  name:''
})
const titleHandler =(event)={
  setInput({
    ...input,
    title:event.target.value}
  )
}
//-------------------------------------------------------------------
// About events 
//-------------------------------------------------------------------

// Events  are  kuch hua 
// there are multiple events in the javascript for example onChange onMouseOver (saaray on walay )
// * In saaray events ko by default event 'object' milta ha which contains multiple properties to manipulate 
// * event.target.value    (ye traverse kr rhe to get the inputted value in the event object)

//------------------------------------------------
//Important baat about input 
//-------------------------------------------------

// * When you define input tag their inputed data is always a string where you select a number or a date 


//------------------------------------------------------
// UPDATING THE STATES THAT DEPENDS ON THE PREVIOUS 
//-------------------------------------------------------

// * VIP POINT 
// Whenever there is a state that depends on the previous


//--------------------------------------------------
// form 
//--------------------------------------------------

// * form submit krwaty waqt  onSubmitHandler mn event.preventDefault(); aur new obj create for the new data


//-------------------------------------------------------------
// 2 way binding 
//-------------------------------------------------------------

// IT is nothing but setting the value={enteredText} so dono change hn g 



//-------------------------------------------------------------
// Lifting state up 
//-------------------------------------------------------------

// * Lifting up state means passing data from parent to child component 
// * We can't pass data to the components of same level 
// * We have to lift up the state then then to the child (sibling) via props

//-----------------------------------------------------------------
// Controlled vs uncontrolled component & stateless vs statefull components
//-----------------------------------------------------------------

// Controlled components are those which are controlled by other components like we pass selected year from expensesList to expensesFilter

// Uncrolled which are not controlled by another components 


// Stateless are the dumb components only displays some data does not contains any states 

//  Contains the states 
