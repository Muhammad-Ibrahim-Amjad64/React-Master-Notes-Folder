// Custom hooks  are just regular functions just like built-in state  they can contain a stateful logic   You can use custom hook to outsource stateful logic into reuseable functions which you might be using into different components 
// These hooks can use other react hooks and react states inside of it 
// it is simply a mechanism of reusing a logic  just a regular functions with a  special thing that in thses custom hooks functions 


//------------------------------------------------------------------------------
// Creating our first custom hook 
//------------------------------------------------------------------------------

// jaisay agar code mn logic duplication hoti ha tou hm function use krty hain isi tarha ja states etc ki logic same ho gi tou hm aik custom hook function bna dain gy

// LIKE Making components we use  
// * " Capital name convention in naming  components  (which is must)"
// * " use  " at the name of the compoent if it is a custom hook  like this 
// * Using custom hook does not mean that we share states between various . each hook in  a specific component will have different states 
// * So just the logic is shared not the concrete state  

import React from "react"

const useCounter = ()=>{
    // iske andar return ke uper wala samaan allowed (i.e states and hooks logic)
 
}
export default useCounter;


//  Now making the logic of the counter logic reuseable 
// Use counter ke andar jo return wala ke upr wala samaan ha wo ja aa ga 


// CODE IMPLEMENTATION 

// use-counter.js 

import React from "react"
import { useEffect,useState } from "react";
const useCounter = ()=>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1  );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter ;
    
    

}
export default useCounter;


// BackwardCounter.js 


import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter();   

  // neechay wali logic ab delete kr skty 
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;


//-------------------------------------------------------------------------
// Configuring custom hooks 
//-------------------------------------------------------------------------

// tagarba 
function func1(function_parameter){
    function_parameter();
  }
  
  function func2(){
    console.log("okay!");
  }
  func1(func2);



// Adding logic into our custom hook

import React from "react";
import { useEffect, useState } from "react";
const useCounter = (forward = true) => {    // forward ka check laga dia 
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return counter;
};
export default useCounter;


// So BackWardCounter.js becomes 


import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;


//--------------------------------------------------------------
// sending http requests using custom hooks (Making Our custom hook)
//--------------------------------------------------------------

import React from "react"
import { useState,useEffect } from "react";
// Once we are done then we are expecting that we will transform the data by another function called applydata which is defined in that file in which that custom hook is used and we are just passing the pointer to that function ( using for loop and const array wala kaam )
const useHttp= (requestConfig,applydata)=>{
    // iske andar return ke uper wala samaan allowed (i.e states and hooks logic)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        
            const response = await fetch(
              'https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json',{
                method:requestConfig.method,
                headers:requestConfig.headers,
                    // "Content-Type":"application/json"
                body:JSON.stringify(requestConfig.body)
              }
            );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json(); // This will convert JSON to js object
  
        applydata(data)
        // const loadedTasks = [];
        // for (const taskKey in data) {
        //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        // }
  
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
  
    useEffect(() => {
      sendRequest();
    }, []);
  
  

    return {
        error:error,
        isLoading,
        sendRequest

    }
 
}
export default useHttp;


//--------------------------------------------------------------
// sending http requests using custom hooks (Using Our custom hooks)
//--------------------------------------------------------------


// APP.JS

import React, { useEffect, useState,useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-firebase';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const transformData = useCallback((tasksObject)=>{
  
       const loadedTasks = [];
        for (const taskKey in tasksObject) {
          loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
        }
        setTasks(loadedTasks)
        
      },[])
// But alone it will not work we should destructure or assign const to usehttp states and functions 
  // const dataHttp = useHttp({  // Or use obj destructuring to directly access
  // the url object is created here again and again so removing it from here and adding it into fetch function 
  const {error,isLoading,sendRequest:fetchTasks} = useHttp(transformData)

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchTasks({ url:"https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json"});
    
  }, [fetchTasks]);  // isko hmne dependency daal dia ha islia hme se callback wala jugar krna pr rha ha 

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}
  
export default App;



// use-Http.js 

import React, { useCallback } from "react"
import { useState } from "react";
// Once we are done then we are expecting that we will transform the data by another function called applydata ( using for loop and const array wala kaam )
const useHttp= (applydata)=>{
    // iske andar return ke uper wala samaan allowed (i.e states and hooks logic)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  
    const sendRequest = useCallback( async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        
            const response = await fetch(
              requestConfig.url,{
                method:requestConfig.method ? requestConfig.method : "GET",
                headers:requestConfig.headers ? requestConfig.headers : {},
                    // "Content-Type":"application/json"
                body:requestConfig.body? JSON.stringify(requestConfig.body) : null 
              }
            );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json(); // This will convert JSON to js object
        console.log("idhar aya ")
        applydata(data);
        // const loadedTasks = [];
        // for (const taskKey in data) {
        //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        // }
  
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },[applydata]);
  
    // useEffect(() => {
    //   sendRequest();
    // }, []);
  
  

    return {
        error:error,
        isLoading,
        sendRequest

    }
 
}
export default useHttp;




// Second approach using useEffect() for  Transform data 

// here  soon app.js



//----------------------------------------------------------
// Using Http hook in other components for (post)
//---------------------------------------------------------


import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-firebase';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

const  {error,isLoading,sendRequest:sendTaskRequest}= useHttp();



const createTask = (taskText, taskData)=> {
  console.log("aaja")
  const generatedId = taskData.name; // firebase-specific => "name" contains generated id
  const createdTask = { id: generatedId, text: taskText }; // the task text is not avalible here we can nest that function into entertask handler or enter enter task text as a parameter  

  props.onAddTask(createdTask);

}



  const enterTaskHandler = async (taskText) => {

    sendTaskRequest({
      url:"https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json",
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({text:taskText})
  
    },createTask.bind(null,taskText))
  
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;


// import Section from '../UI/Section';
// import TaskForm from './TaskForm';
// import useHttp from '../../hooks/use-http';

// const NewTask = (props) => {
//   const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

//   const createTask = (taskText, taskData) => {
//     const generatedId = taskData.name; // firebase-specific => "name" contains generated id
//     const createdTask = { id: generatedId, text: taskText };

//     props.onAddTask(createdTask);
//   };

//   const enterTaskHandler = async (taskText) => {
//     sendTaskRequest(
//       {
//         url: "https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json",
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: { text: taskText },
//       },
//       createTask.bind(null, taskText)
//     );
//   };

//   return (
//     <Section>
//       <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
//       {error && <p>{error}</p>}
//     </Section>
//   );
// };

// export default NewTask;