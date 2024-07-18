// Question 61: Making Enums for Vehicles: Let's create categories
// for vehicles like cars, trucks, and motorcycles using enums,
// and show one example.

enum VehicleType {
  Car,
  Truck,
  Motorcycle,
}

console.log(VehicleType.Car);

// Question 62: Making a Student Template: Create a blueprint for
//  student information, including their name, age, and the
// classes they're taking, and then fill in this blueprint
// with an example student.

interface Student {
  name: string;
  age: number;
  courses: string[];
}

let student: Student = {
  name: "Alice",
  age: 22,
  courses: ["Math", "Science", "History"],
};

console.log(student);

// Question 63: Shape Shifter: Write a program that can describe either
// a circle or a rectangle using a special type alias, including
// properties unique to each shape.

type Shape = {
  kind: "circle" | "rectangle";
  radius?: number;
  width?: number;
  height?: number;
};

let circle: Shape = {
  kind: "circle",
  radius: 5,
};

let rectangle: Shape = {
  kind: "rectangle",
  width: 10,
  height: 20,
};

console.log(circle);
console.log(rectangle);
