// var name = "ishan"
// console.log(name)

// var name = "rehman"
// console.log(name)

// var name = "shaik"
// console.log(name)

// // and  for this the output had been generated as ishan , rehman and shaik respectively. Did the same with LET instead of VAR :

// let name = "ishan"
// console.log(name)

// let name = "rehman"
// console.log(name)

// let name = "shaik"
// console.log(name)

// I recieved an error.






// class human {
//   name = "Ibrahim";
//    printName=()=> {
//       console.log(this.name);
//     }
// }
  
  
//   class person extends human {
//     name = "nabiha";  // yahan pr re assignment ho gyi islia nabiha nabiha print ho rha 
//     age = 18;
    
//     printinfo=()=>{
//       console.log(this.name," ",this.age)
//     }
//   }
  
//   const nabiha = new person();
//   nabiha.printName()
//   nabiha.printinfo()

// const filterAndSorter=(...args)=>{
//     args.sort()
//     console.log(args)
//    const num= args.filter(num=>num===1)
//     console.log(num)
// }

// filterAndSorter(4,3,2,14,6,1)

// // [ 1, 14, 2, 3, 4, 6 ]  // tatti sorter 
// // [ 1 ]


// [name,,age]= ['nabiha',18]
// console.log(name,age)
// // nabiha undefined  // Output 

// ({name,age} = {name:'nabiha',age:20})
// console.log(name,age)
// // nabiha 20 // OUTPUT 


// let num = 1;
// number = num ;
// console.log(number);
// console.log(num);
// num=2
// console.log(number);
// console.log(num);

// // Output 
// // 1
// // 1
// // 1
// // 2


// const person1 = {
//     name:"nabiha",
//     age:20
// }

// const person2 = {...person1} // make copy by reference  shallow copy (same things is also applicable )

// person1.name="nabiha jamali"
// // console.log(person2)
// // console.log(person1)

// const ar1= [1,3,{name:"nabiha"}]
// const ar2= [1,3,4]

// const ar3 = ar1.concat(ar2)

// ar1.push(14)
// ar1[2]={name:"nabo"}
// // ar3[2]={name:"syeda nabiha jamali"}
// // [ 1, 3, { name: 'nabo' }, 14 ]
// // [ 1, 3, { name: 'syeda nabiha jamali' }, 1, 3, 4 ]
// console.log(ar1)
// console.log(ar3)

// OUTPUT 
// [ 1, 3, { name: 'nabo' }, 14 ]
// [ 1, 3, { name: 'nabiha' }, 1, 3, 4 ]
//HENCE CONCAT METHOD IS SAFE if we only mody stings etc use it or prefer spread


// const date = new Date(2022,7,2)  
// // console.log((new Date.now.toString()))

// const month =date.toLocaleDateString('en-US',{month:'long'})
//  const day = date.toLocaleDateString('en-US',{day:'2-digit'})
// //  const day = props.date.toLocaleDateString('en-US',{day:'numeric'})// OR
//  const year = date.getFullYear()
//  console.log(day,month,year)  // 02 August 2022 OUTPUT 




const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const chartDataPoint in chartDataPoints) {
    console.log(chartDataPoints.values)
    
  }