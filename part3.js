// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('I can drive:D');

//  function lodgger (){
//     console.log('My name is Wayne')
//  }

//  lodgger();
//  lodgger();
//  lodgger();

//  function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples`; // Use template literals for cleaner string construction
//     return juice; // Return the created juice string
//   }
  
//   // Call the function and store the returned value in a variable
//   const myJuice = fruitProcessor(2, 1);
//   console.log(myJuice); // Output: Juice with 2 apples

//FUNCTION DECLARATION VS EXPRESSONS

// function calcAge1(birthYear){
//     return 2037 - birthYear; 
// }

// const age1 = calcAge1(2003);
// console.log(age1)

// //Arrow function
// const calcAge3= birthYear => 2037 - birthYear


//FUNCTIONS CALLING OTHER FUNCTIONS

function myBodyDetails(MyHairColor,MyHeight,MyWeight){
    const MyNewHeight = MyHeight + 10;
    const MyNewWeight = MyWeight + 5;
    const MyNewHairColor = 'Black';
    const myBodyDetails = 'My name is' + 'My weight is' + MyNewWeight + 'my new hair color is'+MyNewHairColor;
    return myBodyDetails
}
myBodyDetails(Brown, 100, 500);