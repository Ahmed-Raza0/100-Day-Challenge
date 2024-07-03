"use strict";
// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album[`tracks`] = tracks;
    }
    return album;
}
console.log(make_album("Artist one:", "The first album"));
console.log(make_album("Artist two:", "The second album"));
console.log(make_album("Artist three:", "The third album", 10));
// Question 41: Magicians: Display magician names from an array.
let magicians = ["Ahmed", "Danish", "Raza"];
function make_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
make_magicians(magicians);
// Question 42: Great Magicians: Add "the Great" to magician names.
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = magician[i] + " The great";
    }
}
make_great(magicians);
make_magicians(magicians);
