// Question 58: Average Score Calculator: Write a simple 
// program that can take lots of scores and find their average.

 
function averageScore(...scores: number[]): number {
 
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

 
console.log(averageScore(80, 90, 100, 70));  

// Question 59: Add a Special Number: Make a program that 
// creates custom adders. These adders can add a specific
//  number to any other number you give them later.
 
function makeAdder(valueToAdd: number): (arg0:number) => number {
 
    return function(number: number): number {
        return number + valueToAdd;
    };
}
 
let addFive = makeAdder(5);
console.log(addFive(10));  

// Question 60: Self-Running User Profile: Create a quick, self-setup 
// profile for a user that can tell you the user's name and age.
 
let userProfile = (function() {
 
    let name = "John";
    let age = 30;

 
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

 
userProfile.displayInfo();  