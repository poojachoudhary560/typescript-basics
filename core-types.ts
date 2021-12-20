const person = {
  name: "Pooja",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], // TS gives type as number | string but we want array of fixed size 2 with el 1 as number and 2 as string
};
person.role.push("admin");
person.role[1] = 10;

console.log(person.name);

const person1: object = {
  name: "Pooja",
  age: 26,
};

// console.log(person1.name);

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // type is tuple here
} = {
  name: "Pooja",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person2.role.push("admin"); // Exception will not give error
// person2.role[1] = 10;

console.log(person2.name);

let favoriteActivities: string[];
// favoriteActivities = "Sports";
favoriteActivities = ["Sports"];

// to store mixed types in array, use any, but this flexibility comes at the cost of features typescript offers
let favoriteActors: any[];
favoriteActors = ["Tom Hardy", 11];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // TS automatically interprets hobby as string
  // console.log(hobby.map)
}

// Enum alternative In JS
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const user = {
  name: "Pooja",
  age: 26,
  hobbies: ["sports", "music"],
  role: ADMIN,
};

if (user.role === ADMIN) {
  console.log("is Admin!");
}

// Enum TS

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
/*
enum Role1 {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

enum Role2 {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
} */

const user1 = {
  name: "Pooja",
  age: 26,
  hobbies: ["sports", "music"],
  role: Role.ADMIN,
};

if (user1.role === Role.AUTHOR) {
  console.log("user1 is author");
}
