// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log('I can drive:D');

 function lodgger (){
    console.log('My name is Wayne')
 }

 lodgger();
 lodgger();
 lodgger();

 function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples`; // Use template literals for cleaner string construction
    return juice; // Return the created juice string
  }
  
  // Call the function and store the returned value in a variable
  const myJuice = fruitProcessor(2, 1);
  console.log(myJuice); // Output: Juice with 2 apples