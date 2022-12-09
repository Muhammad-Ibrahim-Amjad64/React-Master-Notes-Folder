// babel -> It is simply a tool which compiles the next generation javascript code 

// React is an amazing library -> to build website feels like an app



// To throw an error i react use 

throw new Error("Something went wrong ");

//-----------------------------------------------------------------------
// Basics notes 
//------------------------------------------------------------------------

// LET  

// let jb karain gy jb hamain value change krni ho gi go through javascript refresher

// * export default person -> import prs from './playground.js'
// karain gain  tou usko hm different names se import kr skty hain  

// * export person -> import {person} from './playground.js'


// * import * as bundeled from './playground.js'  (istarha bundeled. kr ke use kr skty hain)

// * import {smth as Smit} from './playground.js'

//--------------------------------------------
//  REST AND SPREAD OPERATORS 
//--------------------------------------------


// SPREAD OPERATIOR 

// * Applicable on arrays and objects to literally pull out the objects 

// [ ] = array  
// { } = object ... kr ke elements add kr  skte hain in array 

// rest operator ----------------------------- Not very special 
// used to merge the  function arguments into an array


const filterAndSorter=(...args)=>{  // ye rest 
    args.sort()
    console.log(args)
   const num= args.filter(num=>num===1)
    console.log(num)
}

filterAndSorter(4,3,2,14,6,1)

// [ 1, 14, 2, 3, 4, 6 ]  // tatti sorter 
// [ 1 ]

//---------------------------------------------------------

[name,age]= ['nabiha',18]
console.log(name,age)
 

({name,age} = {name:'nabiha',age:20})
console.log(name,age)

//---------------------------------------------------------------
//DATES 
//---------------------------------------------------------------

const date = new Date   
const date = new Date.now
const date = new Date(2022,7,3)

// MAIN  Syntax 

const date = new Date(2022,7,2)  
// console.log((new Date.now.toString()))

const month =date.toLocaleDateString('en-US',{month:'long'})
 const day = date.toLocaleDateString('en-US',{day:'2-digit'})
//  const day = props.date.toLocaleDateString('en-US',{day:'numeric'})// OR
 const year = date.getFullYear()
 console.log(day,month,year)  // 02 August 2022 OUTPUT 

//----------------------------------------------------------------------
// states
//-----------------------------------------------------------------------

// * you can also update state in many ways like by using settimeout r other conditions like this (db or http response simulation)


// if state is depened on previous the this 

setPersons((Persons)=>Persons.concat(newPerson) );

// or 
//batter approach 
setPersons(prevpersons=>{
    return [...prevpersons,persons]
})

//----------------------------------------------------------------------
// events 
//----------------------------------------------------------------------

// events are on walay saary. in sbko event object milta ha to manipulate data 



//---------------------------------------------------------------
// About ternary expressions and conditional content  
//---------------------------------------------------------------

// Ye walay jsx ke andar
// {if condition ? content : else content} 
// {if condition && content here }

// ye walay jsx ke bahir

// to display content 
if (name==="ibrahim "){
    // yahan koi variable ki value manupulate 
}


if (name==="ibrahim"){
    return <>
    {/* // literally rendering  */}
    </>
}

//-----------------------------------------------------------
//  styling dynamically and ocnditionally  
//-----------------------------------------------------------

// can have multiple classes in backticks and add the conditionally using ${?:}

styles.process-control == styles["process-control"]

// Using style property 

style={!isValid? {backgroundColor:"rgba(255, 50, 50, 0.269)",border:"2px solid red"}:{}}

//---------------------------------------------
// About input 
//---------------------------------------------


// * When you define input tag their inputed data is always a string where you select a number or a date

//--------------------------------------------------
// forms
//--------------------------------------------------

// * form submit krwaty waqt  onSubmitHandler mn event.preventDefault(); aur new obj create for the new data