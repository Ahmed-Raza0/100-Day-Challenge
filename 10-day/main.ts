// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let age=25;
if(age<2){
    console.log("The person is a baby.");
}
else if(age<4){
    console.log("The person is a toddler.");
}
else if(age<13){
    console.log("The person is a kid.");
}
else if(age<20){
    console.log("The person is a teenager.");
}
else if(age<65){
    console.log("The person is an adult.");
}else{
    console.log("The person is an elder");
}



// Question 29: Favorite Fruit: Create an array for your favorite fruits
//  and check if certain fruits are included.

let favourite_fruits=["Apple","Grapes","Bananas","Mango","cheries"]
if(favourite_fruits.includes("Apple")){
    console.log("I really like Apple!");
}
if(favourite_fruits.includes("Bananas")){
    console.log("I really like Bananas!");
}
if(favourite_fruits.includes("Grapes")){
    console.log("I really like Grapes!");
}
if(favourite_fruits.includes("cheries")){
    console.log("I really like cheries!");
}
if(favourite_fruits.includes("Mango")){
    console.log("I really like Mango!");
}

// Question 30: Hello Admin: Greet users differently, especially 'admin'.


let userNames=["admin","user1","user2","user3","user4"]
userNames.forEach(userName=>{
    if(userName==="admin"){
       console.log(`Hello admin, would you like to see a status report?`)
    }else{
        console.log(`Hello ${userName}, thank you for logging in again.`)
    }
});