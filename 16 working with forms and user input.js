// INPUT TOUCH KO TRUE KRO WHEN THE USER THOUCHED THE INPUT FIELD ( YANI IN onSubmit and onBlur ke function mn true )  ====

// Forms are not so simple because 
// * can have 2  different states valid or invalid

// * We will discuss when to validate 
// on every keystroke (use that approach when it comes to fixing the invalid input)
// When the form is subbmited  --> from line 1 to 250  
// When the input is loosing focus --> from 250 to present

// About input touch -> we input because we initially set entered name isValid to true to prevent the styling invalid styling of the input but if we want to validate that input then initially we set entered name is valid to false but manages the stylin gwith the help of input touch 

// 1 define NameTouched/submitted --> make it true only when the form is submitted
// 2 define enteredNameisValid state initially false (true hogi after validations only )  --> useEffect mn iske true honay pr kaam 
// 3 define nameIsInvalid state which is InputTouched && !enterNameIsValid



// Validating on every key stroke
// We can do that by putting the logic in setEnteredNmame() ke handler walay function 

// USE THIS TECHNIQUE ON EVERY INPUT IF YOUR INPUT IS HANDELED USING useEffect()


//---------------------------------------------------------
// Using ref vs using states 
//---------------------------------------------------------

// you should use ref when you need the inputed value when the form is submitted the useRef is okay
// If you want to validate on every key stroke then use useState


// InputRef.current.value = ''  => not ideal dont manipulate the dom directly


//---------------------------------------------------------------------
// Practicing ref and changing on every key stroke 
//---------------------------------------------------------------------


import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name,setName] = useState('')
  const onSubmitHandler = event=>{
    event.preventDefault();
    console.log("Ref se lia gya input",NameInputRef.current.value)
    console.log("states se lia gya input",name)
    NameInputRef.current.value = ''
    // setName('')
  }


  const InputHandler = event=>{
    setName(event.target.value);

  }
  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={name} onChange={InputHandler} ref={NameInputRef} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


//----------------------------------------------------------------------------------
// Applying basic validations 
//----------------------------------------------------------------------------------


import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name,setName] = useState('')
  const onSubmitHandler = event=>{
    event.preventDefault();
    if (name.trim()==='') {
      console.log("galat")
      return;
      
    }
    console.log("Ref se lia gya input",NameInputRef.current.value)
    console.log("states se lia gya input",name)
    // NameInputRef.current.value = ''
    setName('')
  }


  const InputHandler = event=>{
    setName(event.target.value);

  }
  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={name} onChange={InputHandler} ref={NameInputRef} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


//----------------------------------------------------------------
// Providing basic validation feedback 
//----------------------------------------------------------------

import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name,setName] = useState('')
  const [enterNameIsValid,setEnterNameIsValid]= useState(true)
  const onSubmitHandler = event=>{
    event.preventDefault();
    if (name.trim()==='') {
      console.log("galat")
      setEnterNameIsValid(false)
      return;
      
    }

    setEnterNameIsValid(true)
    console.log("Ref se lia gya input",NameInputRef.current.value)
    console.log("states se lia gya input",name)
    // NameInputRef.current.value = ''
    setName('')
  }


  const InputHandler = event=>{
    setName(event.target.value);

  }
  
  const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes}>
        <label htmlFor='name'>Your Name</label>
        <input value={name} onChange={InputHandler} ref={NameInputRef} type='text' id='name' />
      </div>
      <p className="error-text">Invalid input </p>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

//----------------------------------------------------------------------------
// Handling the was touched state 
//----------------------------------------------------------------------------

// The downside of setting validations like this is 
// const [enterNameIsValid,setEnterNameIsValid]= useState(true) // agar is validation ko useEffect mn use nai kena tou ye jugaar kaam kry ga 

// We set them initially true . So agar hmain use effect se  is state ko le kr decision laina ho ga tou ye initially true ho gi which is the thing that we dont want
// like this 

useEffect(()=>{
    if (enterNameIsValid) {
      console.log("http request to  nabiha")
      
    }

  },[enterNameIsValid])



// Now adding different touched state to manipulate validation accordingly


// enteredNameTouched => is state se make sure karain gy ke whether the user already did the entered name 

// NameInputisInvalid kb ho ga depends upon 
// inputtouch--> jb hmne firstly form ko submit kra 
// entered name is valid true jb hi ho ga jb hm valid valid name daal dain gy

// * Now how to add this touch fnctionality (if you entered value is used in useEffect())

// 1 define NameTouched/submitted --> make it true only when the form is submitted
// 2 define enteredNameisValid state initially false (true hogi after validations only )  --> useEffect mn iske true honay pr kaam 
// 3 define nameIsInvalid state which is InputTouched && !enterNameIsValid

// USE THIS TECHNIQUE ON EVERY INPUT IF YOUR INPUT IS HANDELED USING useEffect()

// Code implementation 


import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name,setName] = useState('')
  const [enterNameIsValid,setEnterNameIsValid]= useState(false)
  const [InputTouched,setInputTouched]=useState(false)
  const onSubmitHandler = event=>{
    event.preventDefault();
    setInputTouched(true)  //---
    if (name.trim()==='') {
      console.log("galat")
      setEnterNameIsValid(false)
      return;
      
    }

    setEnterNameIsValid(true)
    console.log("Ref se lia gya input",NameInputRef.current.value)
    console.log("states se lia gya input",name)
    // NameInputRef.current.value = ''
    setName('')
  }

  useEffect(()=>{
    if (enterNameIsValid) {
      console.log("http request to  nabiha")
      
    }

  },[enterNameIsValid])

  const InputHandler = event=>{
    setName(event.target.value);

  }
 
  const InputisInValid =  InputTouched && !enterNameIsValid  // ye initially false ha // Inpput touch ke baad hi true ho aa ga 
  const nameInputClasses = InputisInValid ?  "form-control invalid" : "form-control" 
  // const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={name} onChange={InputHandler} ref={NameInputRef} type='text' id='name' />
      </div>
      {InputisInValid&&<p className="error-text">Invalid input </p>}
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


//---------------------------------------------------------------
// React to lost focus 
//----------------------------------------------------------------

// setting onBlur event simply 

// jb dabba chor kr ja aain gy tou message 

import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name, setName] = useState("");
  const [enterNameIsValid, setEnterNameIsValid] = useState(false);
  const [InputTouched, setInputTouched] = useState(false);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputTouched(true); //---
    if (name.trim() === "") {
      console.log("galat");
      setEnterNameIsValid(false);
      return;
    }

    setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    setName("");
  };

  useEffect(() => {
    if (enterNameIsValid) {
      console.log("http request to  nabiha");
    }
  }, [enterNameIsValid]);

  const InputHandler = (event) => {
    setName(event.target.value);
  };

// setting blur input handler -------------------------
  const onBlurInputHandler=()=>{
    if (name.trim() === "") {
      console.log("galat");
      setEnterNameIsValid(false);
      return;
    }
    

  }

  const InputisInValid = InputTouched && !enterNameIsValid; // ye initially false ha // Inpput touch ke baad hi true ho aa ga
  const nameInputClasses = InputisInValid
    ? "form-control invalid"
    : "form-control";
  // const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && <p className="error-text">Invalid input </p>}
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


//--------------------------------------------------
// Refactoring and deriving the states 
//--------------------------------------------------

// Validating on every key stroke
// We can do that by putting the logic in setEnteredNmame() ke handler walay function 

// CODE IMPLEMENTATION 

import { useEffect, useRef, useState } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name, setName] = useState("");
  const [enterNameIsValid, setEnterNameIsValid] = useState(false);
  const [InputTouched, setInputTouched] = useState(false);


  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputTouched(true); //---
    if (name.trim() === "") {
      console.log("galat");
      setEnterNameIsValid(false);
      NameInputRef.current.focus()
      return;
    }

    setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    setName("");
    NameInputRef.current.focus()
  };

  useEffect(() => {
    if (enterNameIsValid) {
      console.log("http request to  nabiha");
    }
  }, [enterNameIsValid]);

// ======= Ye wala function 
  const InputHandler = (event) => {

    setName(event.target.value);  // react shedules that state  update so validation event.target.value ko upr logic

    // Tried and this is not instant 
    // if (name.trim()!=='') {
    //   setEnterNameIsValid(true)
      
    // }
    
    if (event.target.value.trim()!=='') {
      setEnterNameIsValid(true)
      
    } 

  };


// setting blur input handler -------------------------
  const onBlurInputHandler=()=>{
    if (name.trim() === "") {
      setInputTouched(true)
      console.log("galat");
      setEnterNameIsValid(false);
      return;
    }
    

  }

  const InputisInValid = InputTouched && !enterNameIsValid; // ye initially false ha // Inpput touch ke baad hi true ho aa ga
  const nameInputClasses = InputisInValid
    ? "form-control invalid"
    : "form-control";
  // const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && <p className="error-text">Invalid input </p>}
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;




//--------------------------------------------------------------------
// Refactoring and deriving the states 
//---------------------------------------------------------------------



// storing  enteredNameIsValid in const and deriving validation from it 

import { useEffect,  useState } from "react";
import { useRef } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name, setName] = useState('');
  // const [enterNameIsValid, setEnterNameIsValid] = useState(false);// ye change 
  const [InputTouched, setInputTouched] = useState(false);
  
  const enterNameIsValid = name.trim() !== '';

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputTouched(true);
    if (!enterNameIsValid) {          // ye change 
      NameInputRef.current.focus()
      return;
    }

    // setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    setName("");
    NameInputRef.current.focus()
    setInputTouched(false) // ye islia add krna para coz hm name empty string bna rhy thy so phr se invalid ho rha th once the form is submitted it will behave like it never be submitted 
  };

  useEffect(() => {
    if (!enterNameIsValid) {
      console.log("http request to  nabiha");
    }
  }, [enterNameIsValid]);
  
  // ======= Ye wala function 
  const InputHandler = (event) => {
    
    setName(event.target.value);  // react shedules that state  update so validation event.target.value ko upr logic

    // Tried and this is not instant 
    // if (name.trim()!=='') {
    //   setEnterNameIsValid(true)
      
    // }
    
    // if (enterNameIsValid) {
    //   // setEnterNameIsValid(true)
      
    // } 

  };


  // setting blur input handler -------------------------
  const onBlurInputHandler=()=>{
    if (name.trim() === "") {
      setInputTouched(true)
      console.log("galat");
      // setEnterNameIsValid(false);
      return;
    }
    

  }

  const InputisInValid = InputTouched && !enterNameIsValid; // ye initially false ha // Inpput touch ke baad hi true ho aa ga


  const nameInputClasses = InputisInValid
    ? "form-control invalid"
    : "form-control";
  // const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && <p className="error-text">Invalid input </p>}
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


//----------------------------------------------------------------------------
// Managing the overall form validity 
//----------------------------------------------------------------------------

// The above code is for only for a single input .But if there is multiple inputs and if one input fails the overall form becomes invalid 

// We can manage the overall form validity by definin the useEffect() and that use effect we will manage all the is valid states to make the form valid 
// And we can also change the bitton to disable if the form is not valid 

// W e can also omit useEffect() to set form is valid without a state 
//CODE IMPLEMENTATION


import { useEffect,  useState } from "react";
import { useRef } from "react";
const SimpleInput = (props) => {
  const NameInputRef = useRef();
  const [name, setName] = useState('');
  // const [age,setAge]  // imaginary for illustrating multiple input fields 
  const [InputTouched, setInputTouched] = useState(false);

  // islo replacing =========with let 
  // const [formIsValid,setFormIsValid]= useState(false)  // states for overall form validity
  // const [enterNameIsValid, setEnterNameIsValid] = useState(false); 
  const enterNameIsValid = name.trim() !== '';
  // const EnteredAgesValid = ""   // if there is some Age input field 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputTouched(true);
    if (!enterNameIsValid) {          // ye change 
      NameInputRef.current.focus()
      return;
    }

    // setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    setName("");
    NameInputRef.current.focus()
    setInputTouched(false) // ye islia add krna para coz hm name empty string bna rhy thy so phr se invalid ho rha th once the form is submitted it will behave like it never be submitted 
  };

  // LET A FORMISVALID STATE INSTEAD OF USEEFFECT  

  let formIsValid = false
  if (enterNameIsValid) {
    formIsValid = true
    
  }
//----iski jagah let 
//   useEffect(() => {
//     // if (enterNameIsValid && EnteredAgesValid) {  // entered age is only when there is an age input field 
//     setFormIsValid(false)
//     if (enterNameIsValid)
//      {  // entered age is only when there is an age input field 
//     setFormIsValid(true)   
//    }


//     // if (enterNameIsValid) {
//     //   console.log("http request to  nabiha");
//     // }


//   }, [enterNameIsValid]);
// //----
  
  // ======= Ye wala function 
  const InputHandler = (event) => {
    
    setName(event.target.value);  // react shedules that state  update so validation event.target.value ko upr logic

    // Tried and this is not instant 
    // if (name.trim()!=='') {
    //   setEnterNameIsValid(true)
      
    // }
    
    // if (enterNameIsValid) {
    //   // setEnterNameIsValid(true)
      
    // } 

  };


  // setting blur input handler -------------------------
  const onBlurInputHandler=()=>{
    if (name.trim() === "") {
      setInputTouched(true)
      console.log("galat");
      // setEnterNameIsValid(false);
      return;
    }
    

  }

  const InputisInValid = InputTouched && !enterNameIsValid; // ye initially false ha // Inpput touch ke baad hi true ho aa ga


  const nameInputClasses = InputisInValid
    ? "form-control invalid"
    : "form-control";
  // const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && <p className="error-text">Invalid input </p>}
      <div className="form-actions">
        <button  disabled={!formIsValid} type="submit">Submit</button>
        {/* <button className={!formIsValid&&"disabled"} disabled={!formIsValid} type="submit">Submit</button> */}
      </div>
    </form>
  );
};

export default SimpleInput;



//-----------------------------------------------------------------
// Add a second email input (ASSIGNMENT)
//-----------------------------------------------------------------

// What Ihave done 

// added email and emailBlur handler 
// 2 states 1 for email and 1 for email touched for applying invalid styling 
// defining 2  const one of  validity and one of is inValid for final invalid styling 
// defining 1 let for form is valid make that true in form validity if cond
// email touched ko blur walay mn true and submit handler mn dono ko reset 
// email is invalid ko styling ke lia use krna ha 
// form  validity ko simply aik if condition se check uske anda emailisValid ko daalna bs aur dosray if any 


// Code implementation 

import { useEffect, useState } from "react";
import { useRef } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const nameValidator = (value) => value.trim() !== "";
  const {
    valueIsValid: enterNameIsValid,
    hasError: InputisInValid,
    value: name,
    onBlurInputValueHandler: onBlurInputHandler,
    InputValueHandler: InputHandler,
    resetForm: resetFormHandler,
  } = useInput(nameValidator);

  const NameInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setInputTouched(true);   lets test ////===========
    if (!enterNameIsValid) {
      // ye change
      NameInputRef.current.focus();
      return;
    }

    // setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    // using reset function of use-hook instead of them ======
    // setName("");
    resetFormHandler();
    setEmail("");  ///+++++++
    setemailTouched(false);//++++++++++++++++++++
    // setInputTouched(false) // ye islia add krna para coz hm name empty string bna rhy thy so phr se invalid ho rha th once the form is submitted it will behave like it never be submitted

    NameInputRef.current.focus();
  };

  // LET A FORMISVALID STATE INSTEAD OF USEEFFECT

  // Email Form ka samaan

  const [email, setEmail] = useState("");
  const [emailTouched, setemailTouched] = useState(false);

  const emailIsValid = email.includes("@"); // yahan validation logic aa a gi
  const emailIsInvalid = emailTouched && !emailIsValid;

  const emailInputHandler = (event) => {
    // setemailTouched(true)
    setEmail(event.target.value);
  };

  const onBlurEmailInputHandler = () => {
    if (email.trim() === "") {
      setemailTouched(true);
      return;
    }
    setemailTouched(true)   // yahan upper walay if ki zaroorat nai ha 

  };

  //---------------------------------
  //  verifying the overall form validity
  let formIsValid = false;
  if (enterNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  // const nameInputClasses = InputisInValid
  const nameInputClasses = InputisInValid
    ? "form-control invalid "
    : "form-control";

  const emailInputClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // className={ InputisInValid ? "invalid" : ""}
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && (
        <p className="error-text">Please enter a valid name </p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={emailInputHandler}
          onBlur={onBlurEmailInputHandler}
          id="email"
        />
      </div>

      {emailIsInvalid && (
        <p className="error-text">Please enter a valid email </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;

// SIMPLIFYING




//--------------------------------------------------------------------
// Building and  using custom input hook
//--------------------------------------------------------------------


import { useEffect,  useState } from "react";
import { useRef } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {


  const nameValidator = (value)=>(value.trim()!=='')
  const {
    valueIsValid:enterNameIsValid,
    hasError:InputisInValid
    ,value:name
    ,onBlurInputValueHandler:onBlurInputHandler
    ,InputValueHandler:InputHandler
    ,resetForm:resetFormHandler
  } = useInput(nameValidator)


  const NameInputRef = useRef();
  // const [name, setName] = useState('');
  // const [age,setAge]  // imaginary for illustrating multiple input fields 
  // const [InputTouched, setInputTouched] = useState(false);
// ==
  // islo replacing =========with let 
  // const [formIsValid,setFormIsValid]= useState(false)  // states for overall form validity
  // const [enterNameIsValid, setEnterNameIsValid] = useState(false);
  
  // ye bhi comment out to expose to use-input hook =========
  // const enterNameIsValid = name.trim() !== '';S
  // const EnteredAgesValid = ""   // if there is some Age input field 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setInputTouched(true);   lets test ////===========
    if (!enterNameIsValid) {          // ye change 
      NameInputRef.current.focus()
      return;
    }

    // setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    // using reset function of use-hook instead of them ======
    // setName("");
    resetFormHandler()
    // setInputTouched(false) // ye islia add krna para coz hm name empty string bna rhy thy so phr se invalid ho rha th once the form is submitted it will behave like it never be submitted 
    
    NameInputRef.current.focus()
  };

  // LET A FORMISVALID STATE INSTEAD OF USEEFFECT  

  let formIsValid = false
  if (enterNameIsValid) {
    formIsValid = true
    
  }
//----iski jagah let 
//   useEffect(() => {
//     // if (enterNameIsValid && EnteredAgesValid) {  // entered age is only when there is an age input field 
//     setFormIsValid(false)
//     if (enterNameIsValid)
//      {  // entered age is only when there is an age input field 
//     setFormIsValid(true)   
//    }


//     // if (enterNameIsValid) {
//     //   console.log("http request to  nabiha");
//     // }


//   }, [enterNameIsValid]);
// //----
  
  // ======= Ye wala function /// ise komment out krdia taakay custom hook wala InputHandler use ho 
  // const InputHandler = (event) => {
    
  //   setName(event.target.value);  // react shedules that state  update so validation event.target.value ko upr logic

  //   // Tried and this is not instant 
  //   // if (name.trim()!=='') {
  //   //   setEnterNameIsValid(true)
      
  //   // }
    
  //   // if (enterNameIsValid) {
  //   //   // setEnterNameIsValid(true)
      
  //   // } 

  // };

// ======= Ye wala function /// ise komment out krdia taakay custom hook wala 
  // // setting blur input handler -------------------------
  // const onBlurInputHandler=()=>{
  //   if (name.trim() === "") {
  //     setInputTouched(true)
  //     console.log("galat");
  //     // setEnterNameIsValid(false);
  //     return;
  //   }
    

  // }
//=======ye bhi remove to use-Input hook 
  // const InputisInValid = InputTouched && !enterNameIsValid; // ye initially false ha // Inpput touch ke baad hi true ho aa ga


  const nameInputClasses = InputisInValid
    ? "form-control invalid"
    : "form-control";
  // const classes = enterNameIsValid ? "form-control" : "form-control invalid"
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && <p className="error-text">Invalid input </p>}
      <div className="form-actions">
        <button  disabled={!formIsValid} type="submit">Submit</button>
        {/* <button className={!formIsValid&&"disabled"} disabled={!formIsValid} type="submit">Submit</button> */}
      </div>
    </form>
  );
};

export default SimpleInput;

//----------------------------------------------------------------
// Using cotom hook for other input fields (email ko custom hook se bnaya)
//---------------------------------------------------------------

import { useEffect, useState } from "react";
import { useRef } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {

  const nameValidator = (value) => value.trim() !== "";

  const {
    valueIsValid: enterNameIsValid,
    hasError: InputisInValid,
    value: name,
    onBlurInputValueHandler: onBlurInputHandler,
    InputValueHandler: InputHandler,
    resetForm: resetFormHandler,
  } = useInput(nameValidator);

  
  // using custom hook for name validator
  const emailValidator = (value)=>{return value.includes('@')  } 
const {
  value:email,
  hasError:emailIsInvalid,
  valueIsValid:emailIsValid,
  InputValueHandler:emailInputHandler,
  onBlurInputValueHandler:onBlurEmailInputHandler,
  resetForm:resetEmailForm
} = useInput(emailValidator)


  const NameInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setInputTouched(true);   lets test ////===========
    if (!enterNameIsValid) {
      // ye change
      NameInputRef.current.focus();
      return;
    }

    // setEnterNameIsValid(true);
    console.log("Ref se lia gya input", NameInputRef.current.value);
    console.log("states se lia gya input", name);
    // NameInputRef.current.value = ''
    // using reset function of use-hook instead of them ======
    // setName("");
    resetFormHandler();
    resetEmailForm();
    // setEmail("");  ///+++++++
    // setemailTouched(false);//++++++++++++++++++++
    // setInputTouched(false) // ye islia add krna para coz hm name empty string bna rhy thy so phr se invalid ho rha th once the form is submitted it will behave like it never be submitted

    NameInputRef.current.focus();
  };
//----------------------------
  // LET A FORMISVALID STATE INSTEAD OF USEEFFECT

  // Email Form ka samaan  // COMMENTS OUT KR RHA TO USE IT USING CUSTOM HOOK 

  // const [email, setEmail] = useState("");
  // const [emailTouched, setemailTouched] = useState(false);

  // const emailIsValid = email.includes("@"); // yahan validation logic aa a gi
  // const emailIsInvalid = emailTouched && !emailIsValid;

  // const emailInputHandler = (event) => {
  //   // setemailTouched(true)
  //   setEmail(event.target.value);
  // };

  // const onBlurEmailInputHandler = () => {
  //   if (email.trim() === "") {
  //     setemailTouched(true);
  //     return;
  //   }
  //   setemailTouched(true)   // yahan upper walay if ki zaroorat nai ha 

  // };

  //---------------------------------
  //  verifying the overall form validity
  let formIsValid = false;
  if (enterNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  // const nameInputClasses = InputisInValid
  const nameInputClasses = InputisInValid
    ? "form-control invalid "
    : "form-control";

  const emailInputClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // className={ InputisInValid ? "invalid" : ""}
          value={name}
          onChange={InputHandler}
          ref={NameInputRef}
          type="text"
          id="name"
          onBlur={onBlurInputHandler}
        />
      </div>
      {InputisInValid && (
        <p className="error-text">Please enter a valid name </p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={emailInputHandler}
          onBlur={onBlurEmailInputHandler}
          id="email"
        />
      </div>

      {emailIsInvalid && (
        <p className="error-text">Please enter a valid email </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;

// SIMPLIFYING


//----------------------------------------------------------------
// A summary of forms  
//----------------------------------------------------------------

// Try to outsource logic of forms 
//  Try to build  individual input components (which contains some validation logic or whatever)
// Try to build an overall form
// Build more custom hooks which contains more preconfigured inputs 

// explore the useForm hook which spits the readily configured input elements of the form. which you can use in jsx 

// Explore the formik which is very popular 3rd party library to build forms . it has just more use cases and allows more logic 


