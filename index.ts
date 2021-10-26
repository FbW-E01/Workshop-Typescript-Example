// --------------------------------------------------------------------
// --- Regular JS ------------------------------------------------

const pretty = x => x.toFixed(x); // No types!
const output = pretty(1.2345);
console.log(output);

// --------------------------------------------------------------------
// --- Static types ------------------------------------------------

// Declaring variables with strict types

// 1. Explicit type - age IS and WILL BE a number
const age: number = 42;

// 2. Implicit / Inferred type; text IS and WILL BE a string
let text = "Hello World";

// --------------------------------------------------------------------
// --- Catching errors ------------------------------------------------

// Now TS knows it is always a string and TS knows what a string can do
// text.toLocaleLowercase(); // TS knows "text" is a string and can't do this!
// text.toLocalLowerCase(); // TS knows "text" is a string and can't do this!
text.toLocaleLowerCase();

// TS can help catch other errors too!
//const fiftyFifty = Math.random > 0.5; // Error, cannot compare function and number!

// TS can even catch logic errors sometimes
// const playerAge = Math.random() * 20;
// const canBuyBeer = playerAge > 18 ? "yes" : "no";

// if (canBuyBeer !== "yes") { // Accidental negation;
//     console.log("Hooray you can buy beer!");
// } else if (canBuyBeer === "no") {
//     console.log("Oh no, cannot buy beer in game!"); // This code cannot ever be run! Logical error!
// }


// --------------------------------------------------------------------
// --- Object Types ---------------------------------------------------

// TS does types for objects too; Inferred type on an object
// Also called "duck typing"
const user = {
    name: "Samantha Fox",
    id: 1
};

console.log(user.name);



// Explicit types for objects made with an "interface"
// Also: custom type
interface Pet {
    name: string,
    id: number
}

const rauli: Pet = {
    name: "Rawli",
    id: 1337
}

// console.log(rauli.location); // JS: "undefined"; TS: Unable to compile


// --------------------------------------------------------------------
// --- Class Types ----------------------------------------------------

class Account {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user1: Pet = new Account("Joel", 71357416);
console.log(user1.name);


// --------------------------------------------------------------------
// --- Functions!! ----------------------------------------------------

function printAndReturnName(user: Account): string {
    console.log(user.name);
    return user.name;
}

const someName: string = printAndReturnName(user1);
