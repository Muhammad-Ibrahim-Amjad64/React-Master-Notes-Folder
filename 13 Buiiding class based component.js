// Functional vs class  based components 
//------------------------------------------------------------------------------------

import { render } from "react-dom"

// Functional components are more flexible 

// render method f classes is equal to the return method of the functional 
import { Component } from "react"
class user extends Component {
    render(
      return(  <>
        {this.props.name}
        </>)

    )
}



//--------------------------------------------------------------
// State management in classbased components 
//------------------------------------------------------------

// In class based components our states is always an object 
// But in functional components our states can be anything object, boolean , string etc

// * With class based components you have to define constructer(){} and in the constructer you can define your states into slices and pieces like this
constructer (){
  this.state = {
      isVlid:false,
      person:"nabiha"

    }
  }

// if we want to update that state then there is a special updation funtion 
// this.state.isValid(true)  is wrong 

//------------------------------------
// states in classbased 
//------------------------------------

// * In functional components if we have multiple pices we define other const etc but in class based all states are defined in this.state 

// * You could do in functional components by useState({}) object in define states pieces and is optional but in class based components you must define your states in object 

//-------------------------------------------
// States updates in classbased 
//--------------------------------------------
// * this.setState({isVlid:true})  is right 
// All the other states will be kept because merges all other states with the updated ones 

// updating states that depends on the previous states

toggleUsersHandler() {
  // this.state.showUsers = false; // NOT!
  this.setState((curState) => {
    return { showUsers: !curState.showUsers };
  });
}


// In the past if we want to manage states then we have only option of using classbased components


//----------------------------------------------------------------------------
// Side effects in class based components
//----------------------------------------------------------------------------
// You cant use hooks in class based components 


// You can use a render() method in class based components 


// * componentDidMount() in class based component is a method that will execute when the component is mounted equvalent to useEffect(()=>{},[])

// * componentDidUpdate() is equvalent to the useEffect(()=>{},[SomeDependency])

// * componentWillUnmount() is equivalent to the useEffect( return ()=>{})  (cleanup function of the useEffect() )

//-------------------------------------------------
// Working with context with class based components 
//-------------------------------------------------

// In class based the only change is consuming the states 
// We use useContext() to consume 

// The context consumer can be used in both class and functional based components 

// Only one component can use a context ctx kr ilawa cctx aik hi component mn no use ye krna ke lia dosray context ko use krny waln ko alag component mn wrap 

// In classbased components we cant  access all the contex with only ctx but there you should maintain useReducer()


// Bs only you  have to define static ctx instead of const (without useContext()) 

// static contextType = UsersContext;


// CODE IMPLEMENTATION 

import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;


//----------------------------------------------------------------------
// Introduction to the error boundries 
//----------------------------------------------------------------------

// Error boundries laga kr hm errors ko handle kr skty hain  

// Functional components mn hm if and else ki madad se error ko handle krty hain  
// and try catch can also be applied to the class based component 
// but if you wan to handle error inthe parent component then it can not done by using try catch 
// we cant wrap jsx code into tr catch 
// * But we can handle errors in parent component using error boundry by wraping the component into error boundry component

// The error boundry component contains a life cycle method called componentDidCatch(error)   this method will be triggered when on eof the child componnet  generates an  error / throws an error


// Errorboudry.js 

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    // if error aya tou hm usko yahan manage karain gy idhar hmne bs state ko true kr dia to display paragraph 
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;



// using that error boundry in parent component  UserFider.js


import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
