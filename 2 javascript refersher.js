// let vs const 


// let is the modern var 

// LET  

// let jb karain gy jb hamain value change krni ho gi  

// for example   let is changable 

let myname = 'nabiha';
console.log(myname);

myname = 'ibrahim'
console.log(myname);


// const -> can not be changed 

const mynamee = 'nabiha';
console.log(myname);

mynamee = 'ibrahim'  // that line is not valid with const 
console.log(myname);

// TypeError: Assignment to constant variable.  // on the console 


//--------------------------------------------------------------
// About arrow functions 
//--------------------------------------------------------------

// An  arrow function which only return something example below
const multiply = (number)=>{
    return number * 2 

}

// can be write like this 
const multiply = number => number * 2 


// const Navbar = (number)=> number+1

//-----------------------------------------------------
// Import and exports 
//----------------------------------------------------

// export and import 

// * export default person -> import prs from './playground.js'
// karain gain  tou usko hm different names se import kr skty hain  

// * export person -> import {person} from './playground.js'

// * import * as bundeled from './playground.js'  (istarha bundeled. kr ke use kr skty hain)

// * import {smth as Smit} from './playground.js'


//-------------------------------------------------------------------------
// classes in javascript 
//-------------------------------------------------------------------------

class human {
    constructor() {
      this.name = "Ibrahim";
    }
    printName() {
      console.log(this.name);
    }
  }
  
  class person extends human {
    constructor() {
      super()
      this.name = "nabiha";  // yahan pr re assignment ho gyi islia nabiha nabiha print ho rha 
      this.age = 18;
    }
    printinfo(){
      console.log(this.name," ",this.age)
    }
  }
  
  const nabiha = new person();
  nabiha.printName()
  nabiha.printinfo()
  
  // console.log(nabiha.name)
  
  
  // THE ABOVE CODE IS PLAIN JS SYNTAX NOW CONVERTING IT INTO NEXT JEN JAVASCRIPT SYNTAX


  
class human {
    name = "Ibrahim";
     printName=()=> {
        console.log(this.name);
      }
  }
    
    
    class person extends human {
      name = "nabiha";  // yahan pr re assignment ho gyi islia nabiha nabiha print ho rha 
      age = 18;
      
      printinfo=()=>{
        console.log(this.name," ",this.age)
      }
    }
    
    const nabiha = new person();
    nabiha.printName()
    nabiha.printinfo()


//---------------------------------------------------------------------
// REST AND THE SPREAD OPERATOR
//---------------------------------------------------------------------


// SPREAD OPERATIOR 

// * Applicable on arrays and objects to literally pull out the objects 

// Array and obj example 


const marks = [95,96,93]
const nabihaMarks = [...marks, 45]
console.log(nabihaMarks)
// [ 95, 96, 93, 45 ] // output


const person = {
    name:"ibrahim"

}
// const persons = {...person,name:"nabiha"}
const persons = {name:"nabiha",...person}  // overriden name property 
// [ 95, 96, 93, 45 ]
// { name: 'ibrahim' }
const persons = {...person,name:"nabiha"}  // overriden name property 
console.log(persons)
// [ 95, 96, 93, 45 ]
// { name: 'nabiha' }

// rest operator -----------------------------
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

// ----------------------------------------------------------------
// Destructuring 
//-----------------------------------------------------------------

// To easily extract the values and properties form an array or an object 


[name,age]= ['nabiha',18]
console.log(name,age)

// nabiha undefined  // Output 

({name,age} = {name:'nabiha',age:20})
console.log(name,age)
// nabiha 20 // OUTPUT 


// ----------------------------------------------------
// Premetive and reference types 
//-----------------------------------------------------

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays & Objects
*/

let num = 1;
number = num ;
console.log(number);
console.log(num);
num=2
console.log(number);
console.log(num);

// Output 
// 1
// 1
// 1
// 2


// Reference type   p1 = p2 krny pr copy by reference ho ga for example 

const person1 = {
    name:"nabiha",
    age:20
}

const person2 = person1 // make copy by reference  shallow copy (same things is also applicable )

person1.name="nabiha jamali"
console.log(person2)
console.log(person1)
//OUTPUT 
// { name: 'nabiha jamali', age: 20 }
// { name: 'nabiha jamali', age: 20 }

// We can make deep co[y using spread like this  

const person1 = {
    name:"nabiha",
    age:20
}

const person2 = {...person1} // make copy by reference  shallow copy (same things is also applicable )

person1.name="nabiha jamali"
console.log(person2)
console.log(person1)

// OUTPUT 
// { name: 'nabiha', age: 20 }
// { name: 'nabiha jamali', age: 20 }



//--------------------------------------------------------
// Array functions 
//--------------------------------------------------------


// map mn return number*2 bhi krwa skty hain to return [1,2,3] willl becomes [2,4,6]

// Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

// You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

// The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Particularly important in this course are:

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


// CONCAT EXPLAINATION =====
const ar1= [1,3,{name:"nabiha"}]
const ar2= [1,3,4]

const ar3 = ar1.concat(ar2)

ar1.push(14)
ar1[2]={name:"nabo"}
// ar3[2]={name:"syeda nabiha jamali"}
// [ 1, 3, { name: 'nabo' }, 14 ]
// [ 1, 3, { name: 'syeda nabiha jamali' }, 1, 3, 4 ]
console.log(ar1)
console.log(ar3)

// OUTPUT 
// [ 1, 3, { name: 'nabo' }, 14 ]
// [ 1, 3, { name: 'nabiha' }, 1, 3, 4 ]
//HENCE CONCAT METHOD IS SAFE if we only mody stings etc use it or prefer spread