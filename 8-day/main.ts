// Question 22: Intentional Error: Try to produce an array index error in one of your programs. 
// Correct the error before finishing.

let friends: string[] = ["Ahmed", "Raza", "Danish"];

console.log(friends[3]);  
friends[2] = "Danish";  

// Question 23: Conditional Tests: Write a series of conditional tests.
//  Predict the results of each test.

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict True.");

console.log(car == 'honda');

let Motorcycle = 'subaru';
console.log("Is Motorcycle == 'subaru'? I predict True.");
console.log(Motorcycle == 'subaru');

console.log("Is Motorcycle == 'honda'? I predict True.");

console.log(Motorcycle == 'honda');

let cycle = 'subaru';
console.log("Is cycle == 'subaru'? I predict True.");
console.log(cycle == 'subaru');

console.log("Is cycle == 'honda'? I predict True.");

console.log(cycle == 'honda');

let sazuki = 'subaru';
console.log("Is sazuki == 'subaru'? I predict True.");
console.log(sazuki == 'subaru');

console.log("Is sazuki == 'honda'? I predict True.");

console.log(sazuki == 'honda');

let fan = 'subaru';
console.log("Is fan == 'subaru'? I predict True.");
console.log(fan == 'subaru');

console.log("Is fan == 'honda'? I predict True.");

console.log(fan == 'honda');

// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.


// Tests for equality and inequality with strings
console.log("Test for equality");
console.log("grapes"=="grapes");
console.log("grapes"=="grapes");

//  Tests using the lower case function
console.log("Test for lowerCase");
console.log("Grapes".toLowerCase()=="grapes");

// numerical test
console.log("Numerical test");
console.log(5>2);
console.log(2<1);

// Tests using "and" and "or" operators
console.log("Tests for 'and' and 'or' operators");
console.log(true&&false);
console.log(true || false);

// Test whether an item is in a array
let arr=["ahmed","danish","raza"]
console.log("ahmed include in arr")
console.log(arr.includes("ahmed"));

// Test whether an item is not in a array

let arrs=["ahmed","danish","raza"]
console.log("basit can't include  in arr")
console.log(arr.includes("basit"));
