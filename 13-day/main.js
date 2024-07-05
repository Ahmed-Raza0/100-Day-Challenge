"use strict";
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into Coding");
// Question 38: Cities: Describing cities with a function.
function describe_cities(cities, countries = "Pakistan") {
    console.log(`${cities} is in ${countries}.`);
}
describe_cities("karachi");
describe_cities("Lahore");
describe_cities("tokyo", "Japan");
// Question 39: City Names: Formatting city-country pairs.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
