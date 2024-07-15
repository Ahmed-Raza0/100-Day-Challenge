// Question 52: Make a Smartphone Object: Create a simple way to keep track
//  of a smartphone's details. Include its brand, model, and other key
//  features like how much storage it has, the size of its screen, 
// and how long its battery lasts.

let smartPhone = {
    brand:"Sumsung",
    model:"A33 5G",
    spec:{
          rom:"128GB",
          ram:"8GB",
          display:"6.3 inches",
          battery:"5000mah"
    }
}

console.log(smartPhone);

// Question 53: Pulling Apart a Nested Object: Imagine you have a list
//  inside another list that shows what a computer programmer knows, 
// like coding languages, tools, and software frameworks. Find a way 
// to get three specific skills from this list and show them.

 
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

 
let  {languages,frameworks,tools} = developerSkills

 
console.log(`Language: ${languages[1]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);


// Question 54: Making Flexible Object Keys: Learn how to set up a list where 
// you can change the name of each section based on what you need at that moment,
//  like adjusting labels based on user choices.

 
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject: { [key: string]: string } = {};
     
    dynamicObject[key] = value;
    return dynamicObject;
}
 
let userPreference = createObjectWithDynamicKey("theme", "dark");

 
console.log(userPreference);
