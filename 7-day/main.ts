// Question 19: Dinner Guests: Use one of your programs from Exercises
//  14 through 18 to print a message indicating the number of people you are inviting to dinner.

let guests: string[] = ["Ahmed","Raza","Danish"];
console.log(`I am inviting ${guests.length} people to dinner.`);

// Question 20: Think of something you could store in an array.
//  For example, you could make a list of mountains, rivers, countries,
//  cities, languages, or anything else you’d like. Write a program that 
// creates a list containing these items.


let countries: string[] = ["Pakistan", "India", "China", "USA"];
console.log("Countries I like to visit:", countries);


// Question 21: Think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.


let book: { title: string; author: string; yearPublished: number } = {
    title: "My Hobby",
    author: "Ahmed Raza",
    yearPublished: 2024
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);
