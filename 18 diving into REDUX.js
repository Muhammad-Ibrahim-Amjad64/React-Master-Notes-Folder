// What is Redux ?
// It is an alternative of useContext()  , We will manage app-wide states with REDUX

// In that section we will explore of what is REDUX 
// What is REDUX?And Why
// How to use it (REDUX Basics and using it with React )
// We will explore REDUX toolkit ( which simplifies the REDUX Usage)

//----------------------------------------------------------------------
// Different kind of states 
//---------------------------------------------------------------------

// 3 Major kinds of states 

// * Local state : 
//      belongs to a single component
//      Listening to the user input , toggeling , show more 

// * Cross-Component state : 
//      That affects multiple component 
//      open/closed model ovelay


// * App-wide state :
//      That affects the entire app
//      User Authentication (As if I login then we might change the App navigation to display more options etc )



// WHY DO WE NEED REDUX IF WE ALREADY HAVE REACT CONTEXT



// THE Disadventages of react useContext() 
// --> Complex setup and management , can have a nested structure of providers 
// --> Performance ---> suitable only for low frequency changes like changing theme and authentication 

// In short in small or mmedium projects and relitavely in some larger projects it all does not matters 


// THAT Disadvantages does not occur in REDUX 


//-----------------------------------------------------------------
// How REDUX works
//-----------------------------------------------------------------


// Has only central data store for all your state of your entire application
// Components setup subscriptions with the store (they subscribe to the store)
// And when ever the data changes from the store notifies the components and then the components can get the data they need for example the current authenntication status they  get a slice of the redux store .

//  HOW DO WE CHANGE THE DATA IN THE STORE 
// * Components can never directly manipulate the store data ( So we dont have a direct data flow in another direction )

// * The store data can only be manipulated using the reducer functions (not by the components )

// * the reducers  functions (not  useReducers) are the functions that take some input  and transform that input (like take numbers and return sum) and spit out an output (new  result)   ---> So, the general programming concept of useReducer() and reducer functions uses same concept

//  How do we connect that reducer function with the component 

// * We have actions and the components dispatch(send krna / bhaigna) certain actions.So, yani components trigger certain actions  

// * An action is just simply a javascript object . That describes the kind of operation that the REDUCER SHOULD  perform 

// * Redux then forward action to the reducer function reads that description of the desired operation and then this operation will be performed by the reducer function and then reducer spit out a new state that should be replaced by the existing state in the store and then when the the state is replaced with the new state then the subscribing components will be notified so that they can update their UI 


// --------------------------------------------------------
// Exploring the basic concepts 
//---------------------------------------------------------

// npm i redux 

// createStore method of redux is used to create store 


// And that store should manage some data 
// and the data which it manages is in the end determined by the reducer function,because it's the reducer function which will produce  new state snapshots.The reducer has to go of spitting out a new state snapshot whenever an action reaches it.And when we run this code for the first time, 

// * the reducer function will be executed with a default action 
// * the reducer will spit out a new state snapshot whenever an action reacthes it 

// *  jb hm code first time run karain gy . the reducer function will run with a default action . and that should  spitout the initial state 

// MORE ABOUT REDUCER FUNCTION 

// It is a standard js function but it will be called by the redux library  
// it has two parameters the old and existing state and the current dispatched action
// and must return a certain output ( a new state object in most cases states can be a number or a string )
// must be pure same input leads to same output -> koi bahir ki cheez nai so no side effects and http requests are allowed in the reducer function 

// FIRST CPDE IMPLLEMENTATION

const redux = require('redux')

// reducer function ( and it will return a state object )
const CounterReducer = (state={counter:0},action)=>{
    return {
        counter :state.counter+1 
    }
}


// store  
const store = redux.legacy_createStore(CounterReducer)   // making connection b/w store and reducer function 

console.log(store.getState())   // {counter : 1 }
// Creating a counter subscriber 
const CounterSubscriber = ()=>{
    console.log("ye chala")
    const latestState = store.getState()
    console.log(latestState)
}

store.dispatch({type:"increment"})  
// HERE =============================
 store.subscribe(CounterSubscriber)  // this function will tell the redux that this function will be executed whenevr the state changes to ensure that the subscriber got the latest state (in simple words renders the subscriber )      

// without that I am able to access reducerFunction ()  

console.log(store.getState()) // {counter: 2}
// CounterSubscriber()

store.dispatch({type:"increment"})   // abhi mn ne yahan dispatch kra tou automatic subscriber run to gya 



// const { legacy__createStore: createStore } = require('redux');
// * Store contains certain methods like 
// store.getState()  to get the latest state snapshot 
// store.dispatch()  to perform a certain action 
// store.subscribe(CounerSubscriber)    by subscribing this will ensure that that the subscriber must have the latest state


// STEPS 
// create reducer function
// create store 
// establish connection between store and reducer function
// subscribe a components with the REDUX 
// start dispatching   (store.getState se latest state snapshot )

//-------------------------------------------------------------------------
// Using the action property in the ReducerFunction()
//-------------------------------------------------------------------------

const redux = require('redux')

// reducer function ( and it will return a state object )
const CounterReducer = (state={counter:0},action)=>{
    if (action.type==="increment") {
        return {
            counter :state.counter+1 
        }
    }
    if (action.type==="decrement") {
        return {
            counter :state.counter-1 
        }
    }

    return state
}


// store  
const store = redux.legacy_createStore(CounterReducer)   // making connection b/w store and reducer function 

console.log(store.getState())   // {counter : 1 }
// Creating a counter subscriber 
const CounterSubscriber = ()=>{
    console.log("ye chala")
    const latestState = store.getState()
    console.log(latestState)
}

store.dispatch({type:"increment"})  
// HERE =============================
 store.subscribe(CounterSubscriber)  // this function will tell the redux that this function will be executed whenevr the state changes to ensure that the subscriber got the latest state (in simple words renders the subscriber )      

// without that I am able to access reducerFunction ()  

console.log(store.getState()) // {counter: 2}
// CounterSubscriber()

store.dispatch({type:"increment"})   // abhi mn ne yahan dispatch kra tou automatic subscriber run to gya 
store.dispatch({type:"decrement"})

//  OUTPUT 
// { counter: 0 }
// { counter: 1 }
// ye chala      
// { counter: 2 }
// ye chala      
// { counter: 1 }

// const { legacy__createStore: createStore } = require('redux');
// * Store contains certain methods like 
// store.getState()  to get the latest state snapshot 
// store.dispatch()  to perform a certain action 
// store.subscribe(CounerSubscriber)    by subscribing this will ensure that that the subscriber must have the latest state


// STEPS 
// create reducer function
// create store 
// establish connection between store and reducer function
// subscribe a components with the REDUX 
// start dispatching   (store.getState se latest state snapshot )

//------------------------------------------------------------
// Applying redux into react projects 
//------------------------------------------------------------

// to use REDUX in react 
// * install REDUX by running    npm  i redux react-redux --------
// As redux is not specific to the react projects 

// * create a store folder ( for reduxspecific files)
// * in that folder create index.js file  (isme create store and reducer func)
// * import {Provider} from react-redux at root index
// import store at index   
// * generate a provider at root ( as we did in useContext by wrapping it with anyContextProvider ) and pass store as a prop


// code Implementation
// Top level index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'//-----
import store from './store/index';//--------

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App/></Provider>);//---------


// Store wala index.js

import {legacy_createStore} from 'redux'
// const redux = require('react-redux')

const counterReducer=(state={counter:0},action)=>{
    if (action.type==="INC") {
        return {
            counter:state.counter+1
        }
    }

    if (action.type==="DEC") {
        return{
            counter:state.counter-1
        }
        
    }
    
    return state
}


const store = legacy_createStore(counterReducer)


export default store ;


//-------------------------------------------
// Using Redux data into react components :)
//-------------------------------------------



// To access the REDUX store data into component use useSelecter hook ( subscribe bhi  ho ja aa g )

// * import {useSelecter} form react-redux  // to impoort a part of  state from the store // whic is a custom hook developed by redux team 
// * You can also use useStore to direct access the store(not recommended )

// useSelcetor to import state obj ka kuch part 
// useStore complete store in the components

// * When you use use selector react redux  will automatically set a subscription to  a redux for this component 

// If you ever would unmount this component

// if it would be removed from the DOM for whatever reason,

// React Redux would also automatically clear

// the subscription for you.


//-----------------------------------------------------------
// dispatching actions 
//------------------------------------------------------------

// To dispatch actions of reducer func inside component use
// * useDispatch() hook to dispatch actions

// NOW  DISPATCING ACTIONS WITH PAYLOADS OBJECTS 


// FILAAL YAHAN TK KI CODE IMPLEMENTATION 

// counter.js 

import classes from './Counter.module.css';
// import store from '../store/index';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()  // dispatch krny ke  lia bs ye add
  // const latestStates = store.getState()
  const toggleCounterHandler = () => {
    // store.dispatch({type:"INC"})
  };


  const IncrementHandler = ()=>{
    dispatch({type:'INC'})
  }
  const decrementHandler = ()=>{
    dispatch({type:'DEC'})

  }

  const IncreaseByHandler = ()=>{
    dispatch({type:'increase',amount:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --{counter} </div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncreaseByHandler}>increase by 5</button>
      </div>
            {/* <div className={classes.value}>-- COUNTER VALUE -- {latestStates.counter} */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
// store.subscribe(Counter)

export default Counter;


// index.js (redux)

import {legacy_createStore} from 'redux'
// const redux = require('react-redux')

const counterReducer=(state={counter:0},action)=>{
    if (action.type==="INC") {
        return {
            counter:state.counter+1
        }
    }

    if (action.type==="DEC") {
        return{
            counter:state.counter-1
        }
        
    }

    if (action.type==='increase') {
        return {
            counter:state.counter + action.amount
        }
        
    }
    
    return state
}


const store = legacy_createStore(counterReducer)


export default store ;


//-------------------------------------------------------------------
// managing the multiple states 
//-------------------------------------------------------------------

// counter.js

import classes from './Counter.module.css';
// import store from '../store/index';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    // MULTIPLE STATES 
  const counter = useSelector(state=>state.counter)
  const showConter = useSelector(state=>state.showConter)
  const dispatch = useDispatch()  // dispatch krny ke  lia bs ye add
  // const latestStates = store.getState()
  const toggleCounterHandler = () => {
    // store.dispatch({type:"INC"})
    dispatch({type:"hideCounter"})
  };


  const IncrementHandler = ()=>{
    dispatch({type:'INC'})
  }
  const decrementHandler = ()=>{
    dispatch({type:'DEC'})

  }

  const IncreaseByHandler = ()=>{
    dispatch({type:'increase',amount:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showConter && <div className={classes.value}>-- COUNTER VALUE --{counter} </div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncreaseByHandler}>increase by 5</button>
      </div>
            {/* <div className={classes.value}>-- COUNTER VALUE -- {latestStates.counter} */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
// store.subscribe(Counter)

export default Counter;

// index.js redux -----------------

import {legacy_createStore} from 'redux'
// const redux = require('react-redux')

const counterReducer=(state={counter:0,showConter:true},action)=>{
    if (action.type==="INC") {
        return {
            counter:state.counter+1,
            showConter:state.showConter
        }
    }

    if (action.type==="DEC") {
        return{
            counter:state.counter-1,
            showConter:state.showConter
        }
        
    }

    if (action.type==='increase') {
        return {
            counter:state.counter + action.amount,
            showConter:state.showConter
        }
        
        
    }
    
    if (action.type==="hideCounter") {
        return{
            counter:state.counter,
            showConter:!state.showConter
        }
    }
    return state
}


const store = legacy_createStore(counterReducer)


export default store ;




//-----------------------------------------------------
// How work with REDUX state correctly 
//-----------------------------------------------------

// * Do not 
// do not mutate the retun state object 
// return all the states in the state object as REDUX did not merge the previous and current state object 

// * Do
// always create a brand new values in returning the state object 


// STATE MUTATION EXAMPLE (DO NOT )

if (condition) {
    state.counter++   /// wrong always perform that type of operation in return using actions etc or +1
    return{
      counter:state.counter,
      showCounter:state.showCounter
    }
  }
  
  // brand new value (do this)
  
  if (condition) {
  
    return{
      counter:state.counter+1,
      showCounter:state.showCounter
    }
  }
  
  
  // SO ALWAYS COPY AN DCREATE A NEW BRAND NEW OBJECT ----
  // dont change the existing state without return a brand new  state object  
//---------------------------------------------------------------
// Introducing to the REDUX toolkit (ab asal redux ki shirwaat)
//---------------------------------------------------------------


// Phalay hm basics kr rhy thy ab hm asli redux 

// So to avoid alot of types and types clasing and  to avoid the repitation of state object 
// we were gonna use something differently 


// We can fix the types clasing by defining a const in index and export and use it directly in the component 

// index.js
 
export const INC = "INC"
const counterReducer=(state={counter:0,showConter:true},action)=>{
    if (action.type===INC) {}

// counter.js


import {INC} from "../store/index"
dispatch({type:INC})

//----------------------
// INSTALLING REDUX AND USING IT 

// To install use npm i @reduxjs/toolkit
// You can uninstall react as redux toolkit contains redux 

// MAKING REDUCER FUNCTION USING REDUX 

// * You can make a reducer function using createSlice() and createReducer() functions 


// * createSlice is more poerful than create reducer()

// As create slice is helpful to create a slice of states

//---------------------------------------------------------
// Making reducer function using createSlice()

// TO use that slice we have to store it into a constant 
// So that we can dispatch accordingly 

// When we have multiple slices we have basically multiple reducers 
// and to use that reducer we can pass


// * redux.createStore(counterReducer.reduce)  // to use it  ( but in bigger app there can be alot of reducers and use them like this is not an easy task )

// * REDUX hax a (redux.configureStore())configure store just like create store. creates a store it makes easies to merge reducers into one big reducer . because want one main reducer to manage the global states 


// CODE IMPLEMENTATION OF CREATED STORE AND REDUCER SLICE IN REDUX TOOLKIT  

import {legacy_createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'
// const redux = require('react-redux')

export const INC = "INC"

const stateInitial = {counter:0,showCounter:true}

const counterReducer=createSlice({
    name:'counter',
    // initialState:{counter:0,showCounter:true},
    initialState:stateInitial,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter;
        }
    }
}

)

// Now using REDUX configureStore() to create store 

const store = configureStore({
    reducer: counterReducer.reducer
    //  in case of multiple reducers 
    // reducer:{ counter : counterReducer.reducer , name : nabiha.reducer}
})

// const store = legacy_createStore(counterReducer)


export default store ;



// const counterReducer=(state={counter:0,showConter:true},action)=>{
//     if (action.type===INC) {
//     // if (action.type==='INC') {
//         return {
//             counter:state.counter+1,
//             showConter:state.showConter
//         }
//     }

//     if (action.type==="DEC") {
//         return{
//             counter:state.counter-1,
//             showConter:state.showConter
//         }
        
//     }

//     if (action.type==='increase') {
//         return {
//             counter:state.counter + action.amount,
//             showConter:state.showConter
//         }
        
        
//     }
    
//     if (action.type==="hideCounter") {
//         return{
//             counter:state.counter,
//             showConter:!state.showConter
//         }
//     }
//     return state
// }


//------------------------------------------------------------------
// Dispatching actions in REDUX toolkit 
//-----------------------------------------------------------------

// REDUX TOOLKIT CREATES AUTO GENERATED UNIQUE IDENTIFIER FOR US WE DONT HAVE TO CREATE THEM SEPARATLY like this {type:some unique identifier}  // it creates an action object for a reducer slice  like this 

// counter.actions.increase    actions contains  our functions as keys so that we can point that function 

// We can dispatch actions into the components by importing counteractions and then explicitly use it in the dispatch functiond

// CODE IMPLEMENTATION 

// Index.js


// MAX OODE 
// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });



// const store = configureStore({
//   reducer: counterSlice.reducer ,
// });

// export const counterActions = counterSlice.actions;


// export default store;


//-------------------------------------------
// MY CODE  

// import {legacy_createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'
// const redux = require('react-redux')

// export const INC = "INC"

const stateInitial = {counter:0,showCounter:true};

const counterReducerSlice=createSlice({
    name:'counter',
    // initialState:{counter:0,showCounter:true},
    initialState:stateInitial,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter
        }
    }
});

// Now using REDUX configureStore() to create store 

const store = configureStore({
    reducer: counterReducerSlice.reducer
    //  in case of multiple reducers 
    // reducer:{ counter : counterReducer.reducer , name : nabiha.reducer}
});

// const store = legacy_createStore(counterReducer)

export const counterActions = counterReducerSlice.actions; //-----------
export default store ;



// // const counterReducer=(state={counter:0,showConter:true},action)=>{
// //     if (action.type===INC) {
// //     // if (action.type==='INC') {
// //         return {
// //             counter:state.counter+1,
// //             showConter:state.showConter
// //         }
// //     }

// //     if (action.type==="DEC") {
// //         return{
// //             counter:state.counter-1,
// //             showConter:state.showConter
// //         }
        
// //     }

// //     if (action.type==='increase') {
// //         return {
// //             counter:state.counter + action.amount,
// //             showConter:state.showConter
// //         }
        
        
// //     }
    
// //     if (action.type==="hideCounter") {
// //         return{
// //             counter:state.counter,
// //             showConter:!state.showConter
// //         }
// //     }
// //     return state
// // }



// Counter.js

// import { useSelector, useDispatch } from 'react-redux';

// import { counterActions } from '../store/index';
// import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter.counter);
//   const show = useSelector((state) => state.counter.showCounter);

//   const incrementHandler = () => {
//     dispatch(counterActions.increment());
//   };

//   const increaseHandler = () => {
//     dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
//   };

//   const decrementHandler = () => {
//     dispatch(counterActions.decrement());
//   };

//   const toggleCounterHandler = () => {
//     dispatch(counterActions.toggleCounter());
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={increaseHandler}>Increase by 10</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// // class Counter extends Component {
// //   incrementHandler() {
// //     this.props.increment();
// //   }

// //   decrementHandler() {
// //     this.props.decrement();
// //   }

// //   toggleCounterHandler() {}

// //   render() {
// //     return (
// //       <main className={classes.counter}>
// //         <h1>Redux Counter</h1>
// //         <div className={classes.value}>{this.props.counter}</div>
// //         <div>
// //           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
// //           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
// //         </div>
// //         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// //       </main>
// //     );
// //   }
// // }

// // const mapStateToProps = state => {
// //   return {
// //     counter: state.counter
// //   };
// // }

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     increment: () => dispatch({ type: 'increment' }),
// //     decrement: () => dispatch({ type: 'decrement' }),
// //   }
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(Counter);


//----------------------------


import classes from './Counter.module.css';
// import store from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import {INC} from "../store/index"
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const showConter = useSelector(state=>state.showCounter)
  const dispatch = useDispatch()  // dispatch krny ke  lia bs ye add
  // const latestStates = store.getState()
  const toggleCounterHandler = () => {
    // store.dispatch({type:"INC"})
    dispatch(counterActions.toggleCounter());
    console.log(counter)
  };

console.log(counter)
  const IncrementHandler = ()=>{
    dispatch(counterActions.increment());
    // dispatch({type:INC})
    // dispatch({type:'INC'})
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
    // dispatch({type:'DEC'})

  }

  const IncreaseByHandler = ()=>{
    dispatch(counterActions.increase(10));
    // dispatch(counterActions.increase(10)) // that is also valid as REDUX geenrate an auto generated auto generated object and for extra it uses a property called as payload   like this
    //  { type : some auto generated unique identifier , payload:5}
    // dispatch({type:'increase',amount:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showConter && <div className={classes.value}>COUNTER VALUE {counter} </div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncreaseByHandler}>increase by 5</button>
      </div>
            {/* <div className={classes.value}>-- COUNTER VALUE -- {latestStates.counter} */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
// store.subscribe(Counter)

export default Counter;

//----------------------------------------------------------------------
// HOW TO WORK WITH REDUX PROPELY 
//----------------------------------------------------------------------

// 1. make store 
// 2. make index.js file 
// 3. create store  and reducerslices // by create slice and configure store and combine that slices 
// SAMPLE CREATE SLICE TEMPLATE 
const counterReducerSlice=createSlice({
  name:'counter',
  // initialState:{counter:0,showCounter:true},
  initialState:stateInitial,
  reducers:{} })

  // SAMPLE STORE CREATIONS TEMPLATE 

  const store = configureStore({
    reducer: counterReducerSlice.reducer
    //  in case of multiple reducers 
    // reducer:{ counter : counterReducer.reducer , name : nabiha.reducer}
});


// 4. export default store and export const of slices actions 

export const counterActions = counterReducerSlice.actions; //-----------
export default store ;



// HOW to use in components 
// use useSelecter() to extract certain state 
// use useDispatch()  to dispatch and import actions
// dispATCH like this 
dispatch(counterActions.decrement());
dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }


//-------------------------------------------------------------------------
// Working with multiple slices and splitting our code  
//-------------------------------------------------------------------------

// We can manage all the states in a single index.js file but that is optimal

// CODE IMPLEMENTATION 

// counter-slice.js 

import { createSlice } from "@reduxjs/toolkit";





const stateInitial = {counter:0,showCounter:true};
// const authInitialState = {isAuthenticated:false}

const counterReducerSlice=createSlice({
    name:'counter',
    // initialState:{counter:0,showCounter:true},
    initialState:stateInitial,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter= !state.showCounter
        }
    }
});


export default counterReducerSlice.reducer;

export const counterActions = counterReducerSlice.actions;


//auth-slice.js

import {createSlice} from "@reduxjs/toolkit"
const authInitialState = {isAuthenticated:false}
const authSlice = createSlice({
    name:'auth',
    initialState:authInitialState,
    reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false 
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer; 


// index.js (with the code in on efile commented as backup) 

import { configureStore} from '@reduxjs/toolkit'
import authSlice from './auth-slice';
import counterReducerSlice from './counter-slice';


const store = configureStore({
    reducer: {counter:counterReducerSlice, auth:authSlice}
    
});

export default store ;



/// Baqckup --------------------------------------



// // import {legacy_createStore} from 'redux'
// import { configureStore} from '@reduxjs/toolkit'
// import authSlice from './auth-slice';
// import counterReducerSlice from './counter-slice';
// // const redux = require('react-redux')

// // export const INC = "INC"

// // const stateInitial = {counter:0,showCounter:true};
// // // const authInitialState = {isAuthenticated:false}

// // const counterReducerSlice=createSlice({
// //     name:'counter',
// //     // initialState:{counter:0,showCounter:true},
// //     initialState:stateInitial,
// //     reducers:{
// //         increment(state){
// //             state.counter++;
// //         },
// //         decrement(state){
// //             state.counter--;
// //         },
// //         increase(state,action){
// //             state.counter = state.counter + action.payload;
// //         },
// //         toggleCounter(state){
// //             state.showCounter= !state.showCounter
// //         }
// //     }
// // });

// // const authSlice = createSlice({
// //     name:'auth',
// //     initialState:authInitialState,
// //     reducers:{
// //         login(state){
// //             state.isAuthenticated=true
// //         },
// //         logout(state){
// //             state.isAuthenticated=false 
// //         },
// //     }
// // })

// // Now using REDUX configureStore() to create store 

// const store = configureStore({
//     reducer: {counter:counterReducerSlice, auth:authSlice}
//     //  in case of multiple reducers 
//     // reducer:{ counter : counterReducer.reducer , name : nabiha.reducer}
// });

// // const store = legacy_createStore(counterReducer)

//  //-----------
// // export const authActions = authSlice.actions
// export default store ;



// // // const counterReducer=(state={counter:0,showConter:true},action)=>{
// // //     if (action.type===INC) {
// // //     // if (action.type==='INC') {
// // //         return {
// // //             counter:state.counter+1,
// // //             showConter:state.showConter
// // //         }
// // //     }

// // //     if (action.type==="DEC") {
// // //         return{
// // //             counter:state.counter-1,
// // //             showConter:state.showConter
// // //         }
        
// // //     }

// // //     if (action.type==='increase') {
// // //         return {
// // //             counter:state.counter + action.amount,
// // //             showConter:state.showConter
// // //         }
        
        
// // //     }
    
// // //     if (action.type==="hideCounter") {
// // //         return{
// // //             counter:state.counter,
// // //             showConter:!state.showConter
// // //         }
// // //     }
// // //     return state
// // // }




//--------------------------------------------------------------------
// Summary
//--------------------------------------------------------------------

// We can replace context with REDUX 
// Must learn REDUX if you wna to be a successful react developer 