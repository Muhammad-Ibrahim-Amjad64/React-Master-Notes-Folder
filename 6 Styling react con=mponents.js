// inline styling is same as in react native 

// 3 Main approaches are discussed

// CSS only
// Styled components 
// CSS modules approach 


// Inline styles in reactjs
//  implemantation with the help of separete ternary expression & adn styling in js
//---------------------------------------------------------------------------

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid,setisValid]= useState(true)  // managing state for invalid input 

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setisValid(false)
      return;
    }
    props.onAddGoal(enteredValue); 
    setisValid(true)
  };

  return ( // inline styling  on label and input  and the use of ternarhy expression 
    <form onSubmit={formSubmitHandler}> 
      <div className="form-control">
        <label style={!isValid?{color:"red"}:{color:"black"}}>Course Goal</label>
        {/* <label style={{color: !isValid?"red": "black"}}>Course Goal</label> syntax 2  */}
        <input style={!isValid? {backgroundColor:"rgba(255, 50, 50, 0.269)",border:"2px solid red"}:{}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

//----------------------------------------------------------------------
// Applying styles dynamically 
//----------------------------------------------------------------------
import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid,setisValid]= useState(true)  // managing state for invalid input 

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);   // likho gy tou phirb se default black ho ja aa ga 
    if (event.target.value.trim().length>0) {
      setisValid(true)
      
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setisValid(false)
      return;
    }
    props.onAddGoal(enteredValue); 
    
  };

  return ( // inline styling  on label and input 
    <form onSubmit={formSubmitHandler}> 
      <div className={[`form-control ${!isValid? "invalid":""}`]}>
        {/* <label style={!isValid?{color:"red"}:{color:"black"}}>Course Goal</label> */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;


//---------------------------------------------------------------
// Introduciong styled components 
//---------------------------------------------------------------

// In bigger porjects when a lot of developers are working then our css classes are global if one got the same name as the other then their can be a conflict to aoid this we use a package called styled components 
//https://styled-components.com/
// npm install --save styled-components


// then it has a lot of built inhtml elements you can use it to style the components with in js file  by making new component and defining styling 

// * pseudo selector ke lia "&"" use krna ha 
// * Use & to target nested selector  

// code implementaton 

// Button ke styles button mn hi instead of Button.css

import React from 'react';
import styles from "styled-components"

import './Button.css';
// This button method will return a new html element it has p h1 methods also
// we got rid of class button  
const Button = styles.button`
 {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;


// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;



//---------------------------------------------------------------------------

// styled component for div {and adding conditional styling in styled components}
//--------------------------------------------------------------------------

// code implementation



import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components"



const FormControl=  styled.div`


margin: 0.5rem 0;


& label {
font-weight: bold;
display: block;
margin-bottom: 0.5rem;
}

& input {
display: block;
width: 100%;
border: 1px solid #ccc;
font: inherit;
line-height: 1.5rem;
padding: 0 0.25rem;
}

& input:focus {
outline: none;
background: #fad0ec;
border-color: #8b005d;
}

&.invalid input{
background-color:rgba(255, 50, 50, 0.269);
border:2px solid red
}
&.invalid label{
color: red;
}
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid,setisValid]= useState(true)  // managing state for invalid input 

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);   // likho gy tou phirb se default black ho ja aa ga 
    if (event.target.value.trim().length>0) {
      setisValid(true)
      
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setisValid(false)
      return;
    }
    props.onAddGoal(enteredValue); 
    
  };

 

  return ( // inline styling  on label and input 
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && "invalid"}>
      {/* <div className={`form-control ${!isValid? "invalid":""}`}> */}
        {/* <label style={!isValid?{color:"red"}:{color:"black"}}>Course Goal</label> */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      {/* </div> */}
      </FormControl> 
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;



// Now using styled component Props functionality 

// Code implementation 





//-----------------------------------------------------------------
// Usong media quaries in styled components 
//----------------------------------------------------------------

import React from 'react';
import styles from "styled-components"

import './Button.css';
// This button method will return a new html element it has p h1 methods also
// we got rid of class button  
const Button = styles.button`
 {
  width:100%;   //-----------
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media(min-width:768px){    //------------------------ baad mn tagarbay 
    width:auto;
    color:green
  }
}


&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;


// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;


//-------------------------------------------------------------------
// Using css modules 
//-------------------------------------------------------------------
styles.process-control == styles["process-control"]
// because in js string are also valid keys 


// This is the best approach to apply css on different components .that will add hash into css file names to make thme unique so overwritting nai ho gi 

// * Step 1 : change name of css file to ( buttons.module.css )
// * Step 2 : import styles from "./nabiha.css"


//--------------------------------------------------
// Dynamic styling in css modules  
//--------------------------------------------------


      // in normal files 
      {/* <div className={`form-control ${!isValid? "invalid":""}`}> */}

      // IN MODULED FILES  
// <div className={`${styles[`form-control`]} ${!isValid && `${styles.invalid}`}
      
// CODE IMPLEMENTATION 

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import styled from "styled-components"



// const FormControl=  styled.div`


// margin: 0.5rem 0;


// & label {
// font-weight: bold;
// display: block;
// margin-bottom: 0.5rem;
// color: #ccc

// }

// & input {
// display: block;
// width: 100%;
// border: 1px solid #ccc;

// font: inherit;
// line-height: 1.5rem;
// padding: 0 0.25rem;
// }

// & input:focus {
// outline: none;
// background: #fad0ec;
// border-color: #8b005d;
// }

// &.invalid input{
// background-color:rgba(255, 50, 50, 0.269);
// border:2px solid red
// }
// &.invalid label{
// color: red;
// }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid,setisValid]= useState(true)  // managing state for invalid input 

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);   // likho gy tou phirb se default black ho ja aa ga 
    if (event.target.value.trim().length>0) {
      setisValid(true)
      
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setisValid(false)
      return;
    }
    props.onAddGoal(enteredValue); 
    
  };

 

  return ( // inline styling  on label and input------------ 
    <form onSubmit={formSubmitHandler}>
    
      {/* <div className={`form-control ${!isValid? "invalid":""}`}> */}
      <div className={`${styles[`form-control`]} ${!isValid && `${styles.invalid}`}` }>
        {/* <label style={!isValid?{color:"red"}:{color:"black"}}>Course Goal</label> */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
    
    
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;




// SIDE IMPLEMENTATION OF MEDIA QUARY
/* is se km  nai hogi jaisay hi hogi tou media quary apply  */

// @media(min-width:768px){  
//   .button{
//     width:auto;
//     color:green
//   } 