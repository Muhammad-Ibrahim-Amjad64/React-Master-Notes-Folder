// import { useReducer } from "react";

import { useContext, useState } from "react"



// const emailReducer(state,action){
//     if (action.type==="User") {
//         return {anmi:state.ami,ali : action.val }
        
//     }
// }


// const Person = ()=> {
//     const [personState,dispatchPerson]= useReducer(emailReducer, {ami:" "})

    
//     const onButtonClickHandler = (event)=>{
//         dispatchPerson(type="User",val=event.target.value)

//     }

//     return
//     <>

//     <button onClick={onButtonClickHandler}>
        
//     </button>
    

//     </>
// }

// export default Person



//----------------------------------------------------------------------------------


// store  -> cart-context.js and 

// cart-context.js 

import { createContext } from "react"

const cartContext = createContext(
    {
        login : false,
        addItem:()=>{}
    }
)

export default cartContext


// cartContextProvider.js--------------

import cartContext from "cart-context"

const cartContextProvider = props=>{
    
    const [isLoggedIn,setIsLoggedIn] = useState(true);

    const additemHandler= ()=>{

    }


    const contextvalue ={   // bs ye set karo and define functions  accordingly 
        login : isLoggedIn,
        addItem: additemHandler
    } 
    
    return (
    <cartContext.Provider value={contextvalue}>
        {props.childern}
    </cartContext.Provider>)

} 

export default cartContextProvider

//---- Consuming 


import { useContext } from "react"
import cartContext from "./cart-context"

const ctx = useContext(cartContext)



const Person = ()=> {
    
    const ItemHandler = ()=>{
            ctx.addItem({...Item,amoutn:1})
    }
    
    
    return
    <>
    <button onClick={ItemHandler}></button>

    </>
}

export default Person 


