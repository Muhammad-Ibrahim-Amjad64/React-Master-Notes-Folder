// Things I learned before that project are 

//  props and states 
// Handeling function with the help of props
// About date objects updation creation modifications 
// Rendering  lists and conditional content 
// about :? and &&






// Adding styling with the help of ternary expressions  :?( none or some classes )   and f strings  (for one or more classes)

// {`${styles[`form-control`]} ${!isValid && `${styles.invalid}`}} 
// className={!isValidAge?styles.isValidAge:""}

// Managing states and adding form validations of input field using ternary styling 
// and submit using error state 

// showing content using && ternary expressions 
// {errorMessage &&  <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorMessageHandler}/>}

// see some validation  tips from practice app form 

// styling with the help of modals 


// Practiced useEffect hook 



//--------------------------------------------------------------------------


// NEW things learned are 

// portals  --> for error modals navigation,slider etc
//fragments --> wrapper
// useRef hook---> for taking input
// useEffect hook ---> for validation and daikhty 
// useReducer  --> zayada similar states ko aik mn convert 
// useContext hook --> to khatam tree of components


// NEW PROJECT learning here (PHASE 1)
//-------------------------------------------------------

// const can also be only an if condition like this 
//   const haveItems = ctx.cartItems.length>0    ( iske aagae if condition ke ( wala))


//--------------------------------------------------------------
// About bind method 
// use bind method to pre configure the function ( to configure (something) in advance)
// used to preconfigure the argument when that function will be executed because () ye krny se galat pointer ke aagy bind krna correct  restricting functions ke tou yahi receive kry ga 
// for example 
// onAdd kisi component ki properties hain 
// onAdd={CartAddItemsHandler.bind(null,item)}
// onRemove={CartRemoveHandler.bind(null,item.id)}  
//------------------------------------------------------------
// assets folder ke andar pic etc

// styles.header === styles[header]

// you can wrap button with custom items like this using multiple spans 

// `$${props.price.toFixed(3)}` //converts a number into string tofixed points ki aad values fixed like 15.3 --> 15.300 mn convert ho ja aa ga

// Jahan pr props.children likho gy wahan pr openin gand closing tag wala saara content aa ja aa g

// Components wide logic ko context se handle  krwao 

// * METHODS TO ADD NEW ITEM IN AN ARRAY 
// 1. Using spread operator

// 2. using concate method
// using state 
setCartItems(prev=>{
    const UpdatedList = prev.concat(item) 

}) 

// we can set defaul properties as object or equals
// where input is an object passed  
<input {...props.input} {...{min:3,max:6}}  />
{/* <input min=2, max=  /> */}

// using useReducer  
// HOW to use reducer more effectively 
// *  decide what states you want to manage and make const initial object(this object contains initial states values) outside the component and also define redcer function outside the function component 


//then define define reducer like this 
const [cartState,dispatchart]= useReduce(cartReducerFunction, defaultCartState)

// the default state is defined outsid the component 

// then in the reducer function use "state" as prev and action as newly added things ( where action is an object which contain type  and item or id etc )

// dispatch mn action object pass krna ha type set kr ke dosrii properties mn new object and id etc


// CODE IMPLEMENTATION OF INITIAL BASIC useReducer()

import React, { useState } from "react";
import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
    cartItems : [],
    totalAmount : 0
}

const CartReducer= (state,action)=>{
    if(action.type==="ADD-ITEM"){
       const updatedItems = state.cartItems.concat(action.cartItem)
       const totalAmount = state.totalAmount + (action.cartItem.price * action.cartItem.amount)
       return({
        cartItems : updatedItems,
        totalAmount : totalAmount
       }) 
        // const checker = state.cartItems.filter((citem)=>citem.id===action.item.id)
        // if (checker) {
            
            
        // }
        
    }
    if (action.type==="REMOVE-ITEM") {
        
    }

    return defaultCartState

}


const CartContextProvider = props => {
    // An alternative to useReducer 
    // const [cartItems, setCartItems]= useState([])
    // const [amount, setAmount]= useState(0)



    const [Cartstate,dispatchCartState]= useReducer(CartReducer,defaultCartState)
    
    const cartItemsAddHandler = (item)=>{
        // const checker = Cartstate.cartItems.filter((citem)=>citem.id===item.id)
        // if (checker) {
    
        // }
        dispatchCartState({type:'ADD-ITEM' , item:item})
    }

    // const totalAmountHandler = ()=>{
    //     setAmount(58)
    // }

    const cartItemRemoveHandler = (id)=>{
        dispatchCartState({type:"REMOVE-ITEM",id:id})
        // setCartItems(prevItems=>{
        //     const updatedCartItems = prevItems.filter(item=>item.id!==id)
        //     return updatedCartItems
        // })

    }

    const contextOfCart = {
        cartItems: Cartstate.cartItems,
        totalAmount: Cartstate.totalAmount,
        addItem: cartItemsAddHandler,
        removeItem:cartItemRemoveHandler
      }

  return (
    <cartContext.Provider value={contextOfCart}>
        {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;


// Max code of basic 

import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;




// * How to use useContext() properly 
// 1. store folder -> any-context and AnyContextProvider -> initialize the states in any-context-> import any-context in AnyContext (to define provider and then props.children)-> import anyContext in App.js (wrap)-> consume the stataes in the components 

// any-context mn wo sb aain gy jo possible states and props ho skta

// to make app component lean use different provider makes it easy to maintsain and makes a lot of sense 

// SO use useContext() are with the the states and states updating funtion in it so that we can point out to ctx.onAddgoal = (goal)=>{}

// then in provider  value ={ onAddgoal:goalHandler}

// like this  

// cart-context 

import React from "react";
import { createContext } from "react";

const cartContext = createContext({
    cartItems:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}

})


export default cartContext;


// and in porvider 

// like this 

const contextOfCart = {
  cartItems: Cartstate.cartItems,
  totalAmount: Cartstate.totalAmount,
  addItem: cartItemsAddHandler,
  removeItem:cartItemRemoveHandler
}

return (
<cartContext.Provider value={contextOfCart}>
  {props.children}
</cartContext.Provider>
);
};



//------------------------------------------
// Modal can be added on the cart in two ways  using react portal 


// 1. Like this (my implementation)

import  ReactDOM from "react-dom";
import React from "react";
import Cart from "../Cart/Cart";
import styles from "./Modal.module.css"

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };



const  Modal = ()=>{
    return(
        <div className={styles.modal}>
            {/* <Cart></Cart> */}
            nabiha

       
      
        
        </div>
    )
}

const CartModal = ()=>{

    return (
        <>
          {ReactDOM.createPortal(<Backdrop/>, document.getElementById("modal-root"))}
          {ReactDOM.createPortal(<Modal/>, document.getElementById("modal-root"))}
        </>
    )

}

export default CartModal;



// 2. Or like this (max implementation)


// Adding Cart reducer to actually add cart tems in the cart model


// Now managing cart with states 

// cart logic ko workable bnaya gya . repetation of cart item ko elemenate kia gya by adding logic in cart context by grabbing obj then updating visit PHASE 1 context for more details   

//  animating the cart button using useEffect()  // We can also use effec tto animate 
// by setting the states t and f  conditionally for example 

// CODE IMPLEMENTATION 

import React, { useContext } from "react"
import styles from "./HeaderCart.module.css"
import CartIcon from "../Cart/CartIcon"
import cartContext from "../store/cart-context"
import { useState,useEffect } from "react"

const HeaderCart = props =>{

const [buttonBump,setButtonBump]= useState(false)
const ctx = useContext(cartContext)
const number = ctx.cartItems.reduce((accumulator,currentvalue)=>{
  return accumulator+currentvalue.amount
},0)

const {cartItems} = ctx

useEffect(()=>{
  setButtonBump(true)
  const timer = setTimeout(()=>{
    console.log("timer")
    setButtonBump(false)

    return (()=>{
      clearTimeout(timer)
    })

  },300)

},[cartItems])

    const buttonClasses = `${styles.button}  ${ buttonBump && styles.bump}`
    return(
     
        <>
         <button className={buttonClasses} onClick={props.showCart}>
      <span className={styles.icon}>
        <CartIcon /> 
      </span>
      <span>Your Cart</span>
      {/* <span className={styles.badge}>{ctx.cartItems.length}</span> */}
      <span className={styles.badge}>{number}</span>
    </button>
    
        </>
    )
}

export default HeaderCart

//------------------------------------------------------------------
// The begining of the new project PHASE 2   

// WHAT NEW THINGS LEARNED 
// sendign https requests 
// building custom hooks 
// working wiht forms and user input 

// We will
// * Adding a checkout/ order form
// * Submitting orders to the backend server 
// * fetch data from our backend server (Meals data )


// Try it on your own 

// * By moving that dummy data to the firebase 
// *

// adding a  cart modal so that when we click on order then we will dispaly form and remove oder and cancel buttons 

// CREATED A PROPER USE USE CUSTOM HTTP GET HOOK 
// form mn sirf aik button type submit type ka agar aur button s hain to unki type button hogi 
// jb bhi props drilling ho to useContext or REDUX . But if the task is not too complex then we can consider slight drilling 


//----------------------------------------------
//  THINGS  that we can do in redux toolkit 
//---------------------------------------------


// we will wire add item to the cart with our cart slice ( product wala button wire kran ha cart slice ) disectly  just by storeing in const 

// like this  

import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemToTheCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === newItem.id);
      if (existingItem) {
        
        existingItem.quantity++
        existingItem.totalPrice = newItem.price + existingItem.totalPrice 
        
        
      }
      else {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice:newItem.price,
          title:newItem.title
        });
        
      }
      
        
      
    

      // but it can also be done directly in REDUX toolkit jaisay uper kia 
      // if (existingItem) {
      //   const ItemsList = state.items;
      //   const existingItemIndex = state.items.findIndex(existingItem);
      //   ItemsList[existingItemIndex] = {
      //     ...existingItem,
      //     amount: existingItem.amount + 1,
      //   };
      //   return;
      // }
    },

    removerItemFromTheCart(state,action){
      // item dhondna ha index
      //
      const id = action.payload
      const existingItem = state.items.find(item=>item.itemId===id)
      if (existingItem.quantity===1) {
        state.items=state.items.filter(item=>item.itemId!==existingItem.itemId)
        
      }else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
      state.totalQuantity--;
       
    }
  },
});

export const carttActions = cartSlice.actions;
export default cartSlice.reducer;

// We didnot validate on client side we have also to validate on client side 