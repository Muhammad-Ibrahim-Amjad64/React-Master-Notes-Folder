// We test but writing code that test our code is the mson focus of that module 

// *  And that concept is called automted testing 

// Testing manuallty can be error prone coz we did not check all the possible scenerios


//----------------------------------------------
// So, What is automated testing  
//-----------------------------------------------
// You write some extra code that run and tests your other's code 

// You can always test eveyrthing no matters what you changed 
// And therefore you typically write these automated tests that tests for the different inividual building blocks of your application but where you then all these building blocks together and hence it allows you to test all building blocks at once 


//------------------------------------------------------------
// Different kinds of automated tests 
//------------------------------------------------------------


// Unit tests :
//      It is the most commmon type of test alot of projects contains dozens of unit tests 
// Testing the individual building blocks(functions, components) in isolation  

// Integration test :
//        Testing the combination multiple building blocks together (for example testing a combination of multiple components together )
// Not easy to differentiate between unit and integration test 
// also iportant but we focuses mainly on unit tests 

// End to end tests (e2e): 
       // Testing the whole scenerios like logging the user in and going to a certain page .So, these aim to really what a real human would do with your website basically what you would also do with manual testing just automated . Projects typically a few end to end test . if unit and integration passed then it is pretty sure that your pplication will work fine 

//--------------------------------------------------------------
// What ot test 
//--------------------------------------------------------------

// Test the smallest building blocks
// Unit tests : Smallest building block that makeup your app  
// test success and error cases that also test rare but possible results 

//--------------------------------------------------------------
// Technical setup involved and tools 
//--------------------------------------------------------------

// jest ---> tool for running our tests 

// React test library ----> For simulating our react app component 

//------------------------------------------------------------------
// Writing our first test 
//------------------------------------------------------------------


// We can run our tests by running NPM tests 

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// redner method se App component ko rendeer kia
// Screen method se We created virtual broser for testing and identifies element that is renders insode of it by the text "learn react" for example in that case 