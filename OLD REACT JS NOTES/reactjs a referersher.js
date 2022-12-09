

// MINI ABOUT STATES 
//---------------------------
// REACT DOES NOT AUTOMATICALLY RE RENDERS . IT WILL ONLY RE RENDERS WHEN THE STATES ARE TRIGGERED . 
 
// STATES RETURNS 2 ELEMENTS  
// * The first element is the ltest state snapshot 
// * the second element is a function that allows us to update that state replace it with a new value and tells react that it should re render 
// * initial value kuch bhi daalo once the state is update it does not matters whar the initial value is 

// * if your state update does not depend on the previous then direct state update 
// * if your state update depends on the previous state then use anonymous arrow function to update the states 
// like this 
 setPersons((Persons)=>Persons.concat(newPerson) );  // batter approach for prev depeendent states

//----------------------------
// FORM  SUBMIT KRWATY WAQT react defaultly aik nay page pr jaanay ki koshish if we want to do things on the server side 



// form  quick revision 

// form mn input type hota ha 
// select list 
// textarea 
// phir  aik button jo ke on submit pr trigger 
// Sample label implementation 
{/* <label for="sectionida">
<input type="radio" value="Section a" name="section" id="sectionida"> Section A
</label> */}

{/* <textarea name="explain" id="explain" cols="30" rows="10" placeholder="Explain why you want to join "></textarea> */}

// React does not communicate with the databases we only use it to built highly react frontend

{/* <select name="car" id="car">
<option value="no-car">Select your car</option>
<option value="onmi">Omni</option>
<option value="omni2">Omni2</option>
</select> */}

//----------------------------------------------------------
// About jsx
//----------------------------------------------------------


// <h1>i am ibrahim</h1>  === React.createElement('h1',{},'i am ibrahim')  

// but it becomes very complex when there is nesting of the elements 
// So react gives alternative JSX syntax 

//<h1 title='princess'>hi i am nabiha </h1> === 
// React.createElement('h1',{title:'princess'},'i am nabiha')  



// SAMPLE COMPONENTS LAYOUT 
import React from "react"
import './Person.css';


const Person = props =>{

    return(
        <div className="person">
        <p onClick={props.delete}>My name is {props.name} and i am {props.age}</p>
      
        <input value={props.name} type="text" onChange={props.dynamicallychanger} />
        </div>


    )
}

export default Person

// SAMPLE MAP FUNCTION 

{props.persons.map(person=>{
    return <li key={person.id}>{person.name}</li>
   })}




// passing func ref in props  
//  to pass data from child to parent you need a callback function defined at parent level   * props.onAddPerson in AddNewGoal.js of referesher is the common example 