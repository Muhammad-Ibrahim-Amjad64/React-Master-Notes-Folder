// Components are just a funtion that we repeat multiple times in our code so in react we will put that function into separate file 

// * React does not support custom component className  defination we have to handle this in the component uses classes strings 
// like this 
  props.className
  const classes = `card ${props.className}`  // classes template in component 
///------------------------------
align-items: flex-end;   // price and usko end mn kia aik div mn wrap kr ke 

//----------------------------------------------------
// A closer look at the JSX
//----------------------------------------------------

// Snapshot 

//---------------------
// About dates
//---------------------

/ date creations ---------------------------------
const date = new Date   
const date = new Date.now
const date = new Date(2022,7,3)

{
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },


// to extract date in human readable format  we have to use toLocaleDateString method 


const date = new Date(2022,7,2)  
// console.log((new Date.now.toString()))

const month =date.toLocaleDateString('en-US',{month:'long'})
 const day = date.toLocaleDateString('en-US',{day:'2-digit'})
//  const day = props.date.toLocaleDateString('en-US',{day:'numeric'})// OR
 const year = date.getFullYear()
 console.log(day,month,year)  // 02 August 2022 OUTPUT 