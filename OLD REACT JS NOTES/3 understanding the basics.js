// event.target.value = (enteredText)
// input = textInput 


// this.state = data

// Thanks to webpack we can add css into javascript like importing 

// Must use next javascript 

const { IncomingMessage } = require("http");

// Use the bundler to ship the browser (recommended webpack )



// npx create-react-app my-first-app


// acc to tetorial 
// 1. create-react-app my-first-app --scripts-version 1.1.5    (to create react app)

// 2. npm start 


// ________________________________________________________________________________

// folder structure 

// There is only a single index.html page 
// coz our  project id a single page project
// for multi there is multiplr html pages 

// manifest.json mn meta data of our application

// index.js render our react application with a render meyhod

// index.css to style our globally

// App.test.js  -> used for unit testing 

// ___________________________________________________________
// Understanding jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />   // agar hm is app ki jagah <h1></h1> daal dain tou wo main window pe render ho ja aa ga 
  </React.StrictMode>
);

// index.js mn  iska kaam hi yahi ha to render and display


// you render only 1 root component which is app.js 

// saara content at the end React.createElement()  // contain atleast 3 arguments 

// ______________________________________________________________________________

// JSX Restrictions 

// classNmme ,, instead of class 
// _____________________________________________________________________________
// props 

// props.childre ( it is a reserved props that receive alll the propertiies and object that is between our opening and closing custom components any thing cn go between here )



///person.js-----------


import React from "react"

const Person = props =>{

    return(
        <div>
        <p>{props.name} {props.age}</p>
{props.children}
        {/* <h1>{props.childern}</h1> */}
        </div>

    )
}

export default Person


// app.js-------------

import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    
    <div>
      <h1>hello i am ibrahim</h1>
      <Person name="nabiha" age={20}><h1>hellll</h1></Person>
      <Person name="Ibrahim"  age={30}/>
      <Person>ehhee</Person>
    </div>

    

  );
}

export default App;


//________________________________________________________________________

// state syntax in class components 

 state = {
    persons:[
      {name:"ibrahim" ,age:"45"},
      {name:"ali" ,age:"4"},
      {name:"ahmed" ,age:"5"}
    ]
  }


  // updation in class based 

  this.setState(( {
    persons:[
      {name:"Nabiha jamali" ,age:"45"},
      {name:"ali" ,age:"4"},
      {name:"ahmed" ,age:"5"}
    ]
  }))




// state syntax in function based components 

const [text,settext] =useState( {
    persons:[
      {name:"ibrahim" ,age:"45"},
      {name:"ali" ,age:"4"},
      {name:"ahmed" ,age:"5"}
    ]
  });

//   updating state in function based

settext(( {
    persons:[
      {name:"Nabiha jamali" ,age:"45"},
      {name:"ali" ,age:"4"},
      {name:"ahmed" ,age:"5"}
    ]
  }))


  //____________________________________________________________________

//   statefull and state less 

// statecomponents are those components which have no states or logic in it 

// try to make state less components in react coz it will bcom hard to manage and maintain (presentational or dumb components)


//______________________________________________________________________

// method to change state using function reference 

// App.js --------------


import React from "react"

const Person = props =>{

    return(
        <div>
        <p onClick={props.changename}>{props.name} {props.age}</p>

        <p onClick={props.changename}>
    {props.children}
        </p>
        {/* <h1>{props.childern}</h1> */}
        </div>

    )
}

export default Person



// persons.js-----------------

import React from "react"

const Person = props =>{

    return(
        <div>
        <p onClick={props.changename} >{props.name} {props.age}</p>

        <p onClick={props.changename}>
    {props.children}
        </p>
        {/* <h1>{props.childern}</h1> */}
        </div>

    )
}

export default Person;


//__________________________________________________________________________

// using bind method 

// you can use bind method within the component or in app.ja file to pass the arguments to the function 

// App.js--------

import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';

function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {name:"ibrahim" ,age:"20"},
      {name:"nabiha" ,age:"19"},
    
    ]
  })

  const ChangeNameHandler=newName=>{
    setdata({
      persons:[
        {name:"ibrahim khan" ,age:"20"},
        {name:newName ,age:"19"},
      
      ]
    });


  }
  return (
    
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person  changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>  
      
    </div>

    

  );
}

export default App;


// personsjs-----------

import React from "react"

const Person = props =>{

    return(
        <div>
        <p onClick={props.changename.bind(this,"syeda nabiha jamali")}>{props.name} {props.age}</p>

        <p onClick={props.changename}>
    {props.children}
        </p>
        {/* <h1>{props.childern}</h1> */}
        </div>

    )
}

export default Person


//_____________________________________________________________________________

// Using Input component (textInput) to change the name of nabiha dynamically 

// APP.JS --------------

import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';

function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {name:"ibrahim" ,age:"20"},
      {name:"nabiha" ,age:"19"},
    
    ]
  })

  const ChangeNameHandler=newName=>{
    setdata({
      persons:[
        {name:"ibrahim khan" ,age:"20"},
        {name:newName ,age:"19"},
      
      ]
    });


  }
// this function to handle text input ye react native mn iska syntax kuch istarha ha 
// const InputNumberHandler = enteredtext=>{
//   // Now we want to make sure that the input should only be a number so we use
//  //  (VALIDATING USING REGULR EXPRESSION  )
//      setText(enteredtext.replace(/[^0-9]/g),'');  // this regular expression will replace any characer other than 0 to 9 number value with a blank '' space (in case if in some android device user have a decimal so he will not be able to do that )

//  }
  const dynamicnameChangeHandler=(event)=>{
    setdata({
      persons:[
        {name:"ibrahim khan" ,age:"20"},
        {name:event.target.value ,age:"19"},
      
      ]
    });


  }
  return (
    
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>  
      
    </div>

    

  );
}

export default App;



// Person.js--------------


import React from "react"
import { getHeapCodeStatistics } from "v8";

const Person = props =>{

    return(
        <div>
        <p onClick={props.changename.bind(this,"syeda nabiha jamali")}>{props.name} {props.age}</p>
{/* error iski waja se aa rha ha coz ike lia hmne event.target.value nai likha (enteredText) */}
        <p onClick={props.changename}>
    {props.children}
        </p>
        {/* <h1>{props.childern}</h1> */}
        {/* setting the textinput / input field in react field  so the input have the value as the name  */}
        <input value={props.name} type="text" onChange={props.dynamicallychanger} />
        </div>

    )
}

export default Person


//_________________________________________________________________________

// Stylong using StyleSheet for styling 

// there are two ways styling the components 

// 1.by creating person.css file for person component in the component but we have to import files always to use them 

//_____________________________________________________________________________

//WORKING WITH Inline styles of react 
// inline styles of react = styles of react native 

// Example codes 

// App.js 


import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';
function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {name:"ibrahim" ,age:"20"},
      {name:"nabiha" ,age:"19"},
      
    ]
  })
  
  const ChangeNameHandler=newName=>{
    setdata({
      persons:[
        {name:"ibrahim khan" ,age:"20"},
        {name:newName ,age:"19"},
        
      ]
    });
    
    
  }
  // this function to handle text input ye react native mn iska syntax kuch istarha ha 
  // const InputNumberHandler = enteredtext=>{
    //   // Now we want to make sure that the input should only be a number so we use
    //  //  (VALIDATING USING REGULR EXPRESSION  )
    //      setText(enteredtext.replace(/[^0-9]/g),'');  // this regular expression will replace any characer other than 0 to 9 number value with a blank '' space (in case if in some android device user have a decimal so he will not be able to do that )
    
    //  }
    const dynamicnameChangeHandler=(event)=>{
      setdata({
        persons:[
          {name:"ibrahim khan" ,age:"20"},
          {name:event.target.value ,age:"19"},
          
        ]
      });
      
      
    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
    
    }
    // button's background color becomes pink 
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={ChangeNameHandler.bind(this,"nabo")} title={"i am button "}>Change name </button>
        </div>  
      
    </div>




    

  );
}

export default App;


// ____________________________________________________________________________

// ASSIGNMENT SHOULD BE DONE HERE ''