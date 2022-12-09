// TYpescript extends the javascript synax 
// With typescript we can add types in our progmrams of js 

// npm install typescript --save-dev   (to install typescript in your project )

// npx tsc with-typescript.ts    (to compile typesript)


// UNDERSTANDING THE BASIC TYPES AND ASSIGNING ARRAY AND OJECTS TYPES
// ------------------------------------------------------------------------ 

// We can assign data types of

// Premetives : Number, Strings ,Boolean 
// More complex Types : arrays , objects 
// Functions types parameters 


let age:number=13;
let user:string; 
user="ali";
let isValid:boolean=true



// LOWERCASE n in number and string is for premetive types 
// Uppercase is for  object type number object

//------------------------------------------------------------------------
// Working with arrays and objects
// -----------------------------------------------------------------------

// array assignment is like this 

let nameArray:string[]   // isi tarha bol aur numbers ki array bhi ho aa gi 
nameArray=["11","2"]


// Defining objects types

let person:{
    name:string,
    rollno :number 

}
person= {
    name:"",
    rollno:1
}

// We can also define the array of objects like this 

let persons: {
    name:string,
    rollno :number 

}[];





//-------------------------------------------------------------
// Using union types 
//-------------------------------------------------------------

// Aikcheez ki multiple types ke ya tou ye ya tou ye by this |

let nabiha : string | number ;
let nabihas : string | number[] ;

nabiha= ""
nabiha=58
nabihas=[1,2,3]



//---------------------------------------------------------
// Understanding the alises
//---------------------------------------------------------

// We can make templates of types by using "type" keyword 
// like this 

type student ={
    name:string,
    rollNumber:number
}

let nabiha_jamali:student
nabiha_jamali={name:"nabiha", rollNumber:58}


let Ibrahim_amjad:student={name:"Ibrahim", rollNumber:41}