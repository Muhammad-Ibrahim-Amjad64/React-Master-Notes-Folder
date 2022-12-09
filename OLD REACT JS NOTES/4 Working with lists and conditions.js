// FOR PASSING SINGLE ARGUMENT 
{dynamicallyChanger.bind(this,id)}

// FOR passing multiple parameting passing we will use annonymous function 
{(event)=>{dynamicallyChanger(event,persons.id)}}



// Suppose we want to show a certain content on certain conditions we can make a dynamic page with that 
// let we want to display persons info on clicking the button then the code will becomes 

// wrapping all the content in view or div 
// Now wrapping that div with {}
// Now you can write the conditions to display that content but we can not use if else conditions . we have to use ternary expressions
// YOU can render content conditionally by using that ternary expressions ? :  

// ? = true 
// : = false 
// ! ye true ko false false ko true bnane wala 
// the ? check that if the state is true or false 

// if true then question markske aagay wala all content will be displayed 
// And if false then it will follow else( : ) ke aagay wala instruction to render

//  null means render nothing 


// majaor syntax using ! 

const doesShow = showPersons
      setshowepersons(!doesShow);


// sample code implementation  of ?:!


// App.js-----------


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

  const [showPersons,setshowepersons]=useState(false);
  
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

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

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
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
      
      { showPersons ?
        <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div> 
           : null
           }
      
    </div>




    

  );
}

export default App;

//________________________________________________________________________
// OUTPUTTING CONTENT CONDITIONALLY 

//Dynamically showing the content in a javascript way using if and else indstead of :?

// 1st create a let persons variable set it to null
// 2nd if condition above usme state true/false wali return content with persons=(content )
// 3rd use it in the jsx {persons }

// RECOMMENDED WAY TO DISPLAY THE CONDITIONAL CONTENT

// CODE IMPLEMENTATION 

// APP.JS ---------------

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

  const [showPersons,setshowepersons]=useState(false);
  
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

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {
        persons=( <div>
          <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
          <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
          </div> )
     

    }
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;

//____________________________________________________________________________
// OUTPUTTING LISTS 


// In the persons state there is a person lists of data 
// we manually assign the data to person component using . what if we want to add a new person 
// then it can be very annoying . So, we will use list output method to display the persons list 

// For this we have a map function we can map all the items in the list tan to display them in the of out wish 


// to use map create a new let variable or const variable then 
 let variable nameoflist.map(person=>{
  return (format )    // where person is representing a single element of the list 
})

// Code implementation 

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

  const [showPersons,setshowepersons]=useState(false);

  
 const deletePersonHandler= ()=>{

 }

 

  // const ChangeNameHandler=newName=>{
  //   setdata({
  //     persons:[
  //       {name:"ibrahim khan" ,age:"20"},
  //       {name:newName ,age:"19"},
        
  //     ]
  //   });
    
    
  // }
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

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {

      persons = data.persons.map((person,index)=>{
        return( <Person id={index} delete={deletePersonHandler} dynamicallychanger={dynamicnameChangeHandler} name={person.name} age={person.age}/>
                // <Person></Person>        
        )
      })
        // persons=( <div>
        //   <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
        //   <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
        //   </div> )
     

    }
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;

//__________________________________________________________________________

//  lists and states (Deleting the persons)

// we are deleting the person using index 
// in goal project we delete the current object using the filter method like this 

//   const goalDeleteHandler = goalId=>{
  setgoalList(currentGoals=>{
    console.log(`the to be deleted goal  id is :${goalId}`)
   return currentGoals.filter((goal)=> goal.id !==goalId)})


// BUT This time we can delete with the index number


// like this   
persons.splice(deletedIndex,1)  // delete 1 element at that index



// code implementation watch the code of delete to understand splice syntax 

// App.js ------------

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

  const [showPersons,setshowepersons]=useState(false);

  
 const deletePersonHandler= DeletedIndex=>{
  // setdata(data.persons);
  const  personss= data.persons; 
  personss.splice(DeletedIndex,1)
  console.log(DeletedIndex)
  // data.persons=personss
  // setdata( p);  // flaw ha 
  setdata({
    persons:   // personss =[nabihan= and mn ]
     personss
      
  });

 }

 

  // const ChangeNameHandler=newName=>{
  //   setdata({
  //     persons:[
  //       {name:"ibrahim khan" ,age:"20"},
  //       {name:newName ,age:"19"},
        
  //     ]
  //   });
    
    
  // }
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

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {

      persons = data.persons.map((person,index)=>{
        return( <Person  delete={()=>deletePersonHandler(index)} dynamicallychanger={dynamicnameChangeHandler} name={person.name} age={person.age}/>
                // <Person></Person>        
        )
      })
        // persons=( <div>
        //   <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
        //   <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
        //   </div> )
     

    }
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;


// BUT THERE IS AN FLAW IN THAT APPROACH WE WILL DISCUSS BELOW 

//___________________________________________________________________________________

// Updating state immutbility 
// In javascript const personss = data.persons . it is a refrenced type so there can be errors coz the data is not copied to make copy we have to use 
//  const personss data.persons.slice()
// OR 
// the alternative is spread operator which creates a new array instead of previous 
// the spread operator is [...itemsStateReferenceOfNewArray]  ... grabs all lements of the original array   



const deletePersonHandler= DeletedIndex=>{
  // setdata(data.persons);
  // const  personss= data.persons.slice(); 
  const  personss=  [...data.persons]
  personss.splice(DeletedIndex,1)
  console.log(DeletedIndex)
  // data.persons=personss
  // setdata( p);  // flaw ha 
  setdata({
    persons:   // personss =[nabihan= and mn ]
     personss
      
  });

 }



 //________________________________________________________________________

//  keys and lists 

// In the map function there   js requires a key property by default 



// The key prop is actually an important property that we should when rendering the list of data (yani window / app mn show krwa na )  . Actually its a default property react tries to find no matters its a custom component or core component or html sadaharn element . 
// the key is important to react because when we render the list using (any method )
// react does not inspect the elements deeply so when we we delete the element we can visually see which element deleted but react does not know . 
// So, we have to specify the key so that react can uniqely identify the component 

// INDEX CAN NOT BE A UNIQUE IDENTIFIER

// So, adding a key property before rendering it is SUPER IMPORTANT 


//CODE IMPLEMENTATION 

import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';
function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {id:Math.random().toString() ,name:"ibrahim" ,age:"20"},
      { id:Math.random().toString(),name:"nabiha" ,age:"19"},
      
    ]
  })

  const [showPersons,setshowepersons]=useState(false);

  
 const deletePersonHandler= DeletedIndex=>{
  // setdata(data.persons);
  // slice and spread is immutable fassion 
  // const  personss= data.persons.slice(); 
  const  personss= [...data.persons]; 
  console.log(data.persons[DeletedIndex].id)
  personss.splice(DeletedIndex,1)
  console.log(DeletedIndex)
  // data.persons=personss
  // setdata( p);  // flaw ha 
  setdata({
    persons:   // personss =[nabihan= and mn ]
     personss
      
  });

 }

 

  // const ChangeNameHandler=newName=>{
  //   setdata({
  //     persons:[
  //       {name:"ibrahim khan" ,age:"20"},
  //       {name:newName ,age:"19"},
        
  //     ]
  //   });
    
    
  // }
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

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {

      persons = data.persons.map((person,index)=>{
        return( <Person  
          delete={()=>deletePersonHandler(index)}
           dynamicallychanger={dynamicnameChangeHandler} 
           name={person.name} 
           age={person.age}
           key={person.id}/>
           
                // <Person></Person>        
        )
      })
        // persons=( <div>
        //   <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
        //   <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
        //   </div> )
     

    }
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicnameChangeHandler} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;

//_____________________________________________________________________________



// Now we want to update the list item dynamiclly that is already using text input 
// Yani samagh ke goal list ke andar agar kisi goal ka naam change ya modify krna ho tou ye krna ha 

find() // is a method to uniquely find he element with its index the element in the list

 findIndex()// is a method to find index of an element in the list  of a given index 

 // 1. first we have to find the eleemnt to be modified
 // 2. then store it in the variale 
 // 3. modify
 // fetch all persons list  persons 
 // modify it using person object 
 // change state 
 
 // CODE IMPLEMENTATION 

 import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';
function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {id:Math.random().toString() ,name:"ibrahim" ,age:"20"},
      { id:Math.random().toString(),name:"nabiha" ,age:"19"},
      
    ]
  })

  const [showPersons,setshowepersons]=useState(false);

  
 const deletePersonHandler= DeletedIndex=>{
  // setdata(data.persons);
  // slice and spread is immutable fassion 
  // const  personss= data.persons.slice(); 
  const  personss= [...data.persons]; 
  console.log(data.persons[DeletedIndex].id)
  personss.splice(DeletedIndex,1)
  console.log(DeletedIndex)
  // data.persons=personss
  // setdata( p);  // flaw ha 
  setdata({
    persons:   // personss =[nabihan= and mn ]
     personss
      
  });

 }

 

  // const ChangeNameHandler=newName=>{
  //   setdata({
  //     persons:[
  //       {name:"ibrahim khan" ,age:"20"},
  //       {name:newName ,age:"19"},
        
  //     ]
  //   });
    
    
  // }
  // this function to handle text input ye react native mn iska syntax kuch istarha ha 
  // const InputNumberHandler = enteredtext=>{
    //   // Now we want to make sure that the input should only be a number so we use
    //  //  (VALIDATING USING REGULR EXPRESSION  )
    //      setText(enteredtext.replace(/[^0-9]/g),'');  // this regular expression will replace any characer other than 0 to 9 number value with a blank '' space (in case if in some android device user have a decimal so he will not be able to do that )
    
    //  }

    // ADDING ID SO THAT WE UNIQELY IDENTIFY KE KISKO modify krna ha  KRNA HA 
    const dynamicallyNameModifier=(event , id)=>{
      // Example finding person with id 
      // const person = data.persons.find((isperson)=>{return isperson.id === id });
      const personIndex =data.persons.findIndex((isperson)=>{return isperson.id===id})

      const personTobeModified= {...data.persons[personIndex]}
      personTobeModified.name= event.target.value
      const personsList = data.persons 
      personsList[personIndex]=personTobeModified
      // console.log(person)


      setdata({

        persons:personsList
      });
      
      
    }

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {

      persons = data.persons.map((person,index)=>{
        return( <Person  
          delete={()=>deletePersonHandler(index)}
          // cuz onCange event is called 
           dynamicallychanger={(event)=>{dynamicallyNameModifier(event,person.id)}}
           // alternative  
          //  dynamicallychanger={dynamicallyNameModifier.bind(person.id)} 
           name={person.name} 
           age={person.age}
           key={person.id}/>
           
                // <Person></Person>        
        )
      })
        // persons=( <div>
        //   <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
        //   <Person dynamicallychanger={dynamicallyNameModifier} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
        //   </div> )
     

    }
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicallyNameModifier} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;


//________________________________________________________________________________

// ASSIGNMENT SHOULD BE DONE ?? --------