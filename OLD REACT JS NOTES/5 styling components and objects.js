// DYNAMIC STYLING (VIP IN navbar , buttons , sidebar etc)

// Suppose we want to change color of our button dynamically then we will change the styles dynamically 

// We can change the styles dynamically just as we change the content dynamically using if block 



// EXAMPLR CODE (changing the button background using if block)

// App.js ----------------------


import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';
function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {id:Math.random().toString() ,name:"ibrahim" ,age:"20"},
      { id:Math.random().toString(),name:"nabiha" ,age:"19"},
      
    ]
  })

  const [showPersons,setshowepersons]=useState(false);

  
 const deletePersonHandler= DeletedIndex=>{
  // setdata(data.persons);
  // slice and spread is immutable fassion 
  // const  personss= data.persons.slice(); 
  const  personss= [...data.persons]; 
  console.log(data.persons[DeletedIndex].id)
  personss.splice(DeletedIndex,1)
  console.log(DeletedIndex)
  // data.persons=personss
  // setdata( p);  // flaw ha 
  setdata({
    persons:   // personss =[nabihan= and mn ]
     personss
      
  });

 }

 

  // const ChangeNameHandler=newName=>{
  //   setdata({
  //     persons:[
  //       {name:"ibrahim khan" ,age:"20"},
  //       {name:newName ,age:"19"},
        
  //     ]
  //   });
    
    
  // }
  // this function to handle text input ye react native mn iska syntax kuch istarha ha 
  // const InputNumberHandler = enteredtext=>{
    //   // Now we want to make sure that the input should only be a number so we use
    //  //  (VALIDATING USING REGULR EXPRESSION  )
    //      setText(enteredtext.replace(/[^0-9]/g),'');  // this regular expression will replace any characer other than 0 to 9 number value with a blank '' space (in case if in some android device user have a decimal so he will not be able to do that )
    
    //  }

    // ADDING ID SO THAT WE UNIQELY IDENTIFY KE KISKO DELETE KRNA HA 
    const dynamicallyNameModifier=(event , id)=>{
      // Example finding person with id 
      // const person = data.persons.find((isperson)=>{return isperson.id === id });
      const personIndex =data.persons.findIndex((isperson)=>{return isperson.id===id})

      const personTobeModified= {...data.persons[personIndex]}
      personTobeModified.name= event.target.value
      const personsList = data.persons 
      personsList[personIndex]=personTobeModified
      // console.log(person)


      setdata({

        persons:personsList
      });
      
      
    }

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
      
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {

      persons = data.persons.map((person,index)=>{
        return( <Person  
          delete={()=>deletePersonHandler(index)}
          // cuz onCange event is called 
           dynamicallychanger={(event)=>{dynamicallyNameModifier(event,person.id)}}
           // alternative  
          //  dynamicallychanger={dynamicallyNameModifier.bind(person.id)} 
           name={person.name} 
           age={person.age}
           key={person.id}/>
           
                // <Person></Person>        
        )
      })
      style.backgroundColor='white'
      style.width='500px'
        // persons=( <div>
        //   <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
        //   <Person dynamicallychanger={dynamicallyNameModifier} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
        //   </div> )
     

    }
    return (
      
      
      
    <div>
      <h1>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicallyNameModifier} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;





// ________________________________________________________________________________

// Applying styling with the help of css classes instead of inline styles 

// We can apply css with the help of classes which is absoutly a good way to make the website good 

// Applying CSS on the personal information with the help of css classes 
//yani agar ye ho tou ye css apply krni ha . we can aslo do this with inline styles but that is  a batter approach 


// className ns string hona cha ha ya kuch bhi karo bs uske paas string send krwao hmne is ke lia class array ka use kia ha 


// CODE IMPLEMANTATION 


import React  from 'react';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';
function App() {
  // this is sample state 
  const [data,setdata] = useState({
    persons:[
      {id:Math.random().toString() ,name:"ibrahim" ,age:"20"},
      { id:Math.random().toString(),name:"nabiha" ,age:"19"},
      
    ]
  })

  const [showPersons,setshowepersons]=useState(false);

  
 const deletePersonHandler= DeletedIndex=>{
  // setdata(data.persons);
  // slice and spread is immutable fassion 
  // const  personss= data.persons.slice(); 
  const  personss= [...data.persons]; 
  console.log(data.persons[DeletedIndex].id)
  personss.splice(DeletedIndex,1)
  console.log(DeletedIndex)
  // data.persons=personss
  // setdata( p);  // flaw ha 
  setdata({
    persons:   // personss =[nabihan= and mn ]
     personss
      
  });

 }

 

  // const ChangeNameHandler=newName=>{
  //   setdata({
  //     persons:[
  //       {name:"ibrahim khan" ,age:"20"},
  //       {name:newName ,age:"19"},
        
  //     ]
  //   });
    
    
  // }
  // this function to handle text input ye react native mn iska syntax kuch istarha ha 
  // const InputNumberHandler = enteredtext=>{
    //   // Now we want to make sure that the input should only be a number so we use
    //  //  (VALIDATING USING REGULR EXPRESSION  )
    //      setText(enteredtext.replace(/[^0-9]/g),'');  // this regular expression will replace any characer other than 0 to 9 number value with a blank '' space (in case if in some android device user have a decimal so he will not be able to do that )
    
    //  }

    // ADDING ID SO THAT WE UNIQELY IDENTIFY KE KISKO DELETE KRNA HA 
    const dynamicallyNameModifier=(event , id)=>{
      // Example finding person with id 
      // const person = data.persons.find((isperson)=>{return isperson.id === id });
      const personIndex =data.persons.findIndex((isperson)=>{return isperson.id===id})

      const personTobeModified= {...data.persons[personIndex]}
      personTobeModified.name= event.target.value
      const personsList = data.persons 
      personsList[personIndex]=personTobeModified
      // console.log(person)


      setdata({

        persons:personsList
      });
      
      
    }

    const showandHidePersonsHandler =()=>{
      const doesShow = showPersons
      setshowepersons(!doesShow);

    }
    
    const style = {
      backgroundColor:'black',
      cursor:'pointer',
      
    
    }
    // button's background color becomes back and pointer cursor ho rha
    
    
    // implementing dynamic content shower using if else instead of : ? 
    let persons=null;
    if (showPersons) {

      persons = data.persons.map((person,index)=>{
        return( <Person  
          delete={()=>deletePersonHandler(index)}
          // cuz onCange event is called 
           dynamicallychanger={(event)=>{dynamicallyNameModifier(event,person.id)}}
           // alternative  
          //  dynamicallychanger={dynamicallyNameModifier.bind(person.id)} 
           name={person.name} 
           age={person.age}
           key={person.id}/>
           
                // <Person></Person>        
        )
      })
      style.backgroundColor='white'
      style.width='500px'
        // persons=( <div>
        //   <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
        //   <Person dynamicallychanger={dynamicallyNameModifier} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
        //   </div> )
     

    }
    //_____________________________________________________
    // class based styling 
    const cssClasses= []
    if (data.persons.length<=1) {
     cssClasses.push('forOnePerson')
      

      
    }

    if (data.persons.length<=0) {
      cssClasses.push('zeroPersons')
      
    }
    // ________________________________________
    // Join method converts array eleemnt into string---? search  
    // ['forOnePerson','zero'] = 'forOnePerson  zero'
    //The join() method returns an array as a string.

    // The join() method does not change the original array.

    // Any separator can be specified. The default is comma (,). 
    return (
      
      
      
    <div>
      <h1 className={cssClasses.join(' ')}>Personal information</h1>
      {/* wraped in div so it is working  */}
      {/* data.showpersons  */}
      <div  className='buttons'>
        {/* adding inline styles in buttons  */}
      <button style={style} className='button' onClick={showandHidePersonsHandler} title={"i am button "}>hide and show details name </button>
        </div>  
{/* using persons variable to show the content  */}
      {persons}


      {/* false ha condition true ho gy tou content false pe show ho ga ab true pe null ho ga page shoru mn render krle ga */}
      {/* { showPersons===false ?   */}

        {/* <div>
      <Person changename={ChangeNameHandler} name={data.persons[0].name} age={data.persons[0].age}><p>mn hocy ka bohot acha khilari hn </p></Person>
      <Person dynamicallychanger={dynamicallyNameModifier} changename={ChangeNameHandler.bind(this,"syeda aanabiha jamali")} name={data.persons[1].name}  age={data.persons[1].age}/>
      </div>  */}
         
      
    </div>




    

  );
}

export default App;

//__________________________________________________________________________
// YOU can uose pseudo selectors and media quaries in the javascript styling using radium package 

// WE can not add pseudo selecter  :hower media quarie etc in the ' : ' ye walay css properties in the inline styling ya react native ki styling mn  so to do that we have to insall a package called radium

// INSTALL IT BY USING  THAT COMMAND : npm install radium --legacy-peer-deps


// Pseudo selecters (:) must be wrapped in   ''  after to use them in inline styles 
//    is tarha hm speudo selector ko add kr skty ainin inline 
// use them inreact native try kario


// CODE Implementation ---


// App.js-----


//__________________________________________________________________________


// radium package also allows you to use media quaries in the same style file (or javascript styling)


//


// App.js -----------------



//__________________________________________________________________________
// Introducing styled components

// Adding custom fonts 


//______________________________________________________________________________

// Adding image 

