// Module introduction 

// We will explore 

// Handling async tasks with redux
// REDUX dev tools and how to use them 


// Reducers functions must be free from side effects, synchronous, and pure 

// So where should we  put our side effect code ,  where should we put our asynchronous code .  Becase reducer function is a wrong place 


// So the answer to this question is there are 2 more approaches 

// * Using side effects -> and we only  dispatch an action once the side effect is done so redux does not know anything about that side effects 
// Using  our own action creater functions so, we dont use automatically generated ones by redux toolkit .Redux actually has a solution that allows us to run side effects and async code as a part of this action creaters without changing the reducer function (coz it must be free from side effects )


//------------------------------------------
// Managing async code with redux 
//------------------------------------------

// when we add something in the cart we wanna uptdate the cart in the backend and render it here 

// previously if we add something to the cart on reloading it lost but we wanna load that data on loading the app 

// AS discused earlier 
// reducers must be pure, side-effect free, and synchronous.

// So when we have any code that produces a side effect

// or is asynchronous like sending an http request,

// such code must not go into our reducer functions.

//---------------------------------------------------
// REFERESHER PRACTICE PART 1   
//---------------------------------------------------

// We will   apply redux in referesher practice 

// what to do by 

// * Clicking my cart we want to toggle the cart 
// * if we click on add to cart button we will add to cart if it already exists thenwe will add item to the cart 

//------------------------------------------
// frontend vs backend 
//--------------------------------------


// If we have our backend that does alot of work transforms data and stores data 
// so by this technique we can slim down our reducer function  and simply use that response on the frontend 

// but if we have a dump backend and we have to prepare an dtranfrom the data on the ffrontend 

// * we are not allowed to transform data , apply side effects sending http requests in the reducers

//------------------------------------------------------
// Introduction to the REDUX dev tools 
//------------------------------------------------------

// You can see on what action (button clicking ,fetching ,hide show etc) which function is triggered 

// you can also time travelling by click the dispatched action 

//-----------------------------------------------------
// Advanced REDUX summary
//----------------------------------------------------

// We learned REDUX and side effects and asynchronous code 