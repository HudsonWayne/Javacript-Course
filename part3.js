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

// function myBodyDetails(MyHairColor,MyHeight,MyWeight){
//     const MyNewHeight = MyHeight + 10;
//     const MyNewWeight = MyWeight + 5;
//     const MyNewHairColor = 'Black';
//     const myBodyDetails = 'My name is' + 'My weight is' + MyNewWeight + 'my new hair color is'+MyNewHairColor;
//     return myBodyDetails
// }
// console.log(myBodyDetails(Brown, 10, 20));


// const cutPieces = function(fruit){
//     return fruit * 4;
// }

// const fruitProcessor = function(apples, oranges){

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${orangePieces} pieces of apples and ${applePieces} pieces of orange.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3));

// function calcAge(birthYear,firstname){
//     const age = 2037 - birthYear;
//     console.log(`${firstname} is ${age} years old`);
//     return age;
// }

// const age = calcAge(1991, 'Wayne');


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(2, 3, 4));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKaolas = calcAverage(65, 54, 49);
// console.log(scoreDolphins,scoreKaolas);

// const checkWinner = function(avDolphins, avKoalas){
//     if(avDolphins >= 2 * avKoalas){
        
//     }
// }

//Arrays in Javascript

var characters = ['Wayne', 'Luke', 'Jonathan'];
console.log(characters);
console.log(characters.length);
console.log(characters[characters.length-1]);