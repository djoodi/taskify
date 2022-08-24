import React from "react";
import "./App.css";


// this is how to make a variable typed
// you add a colon after the var name with the type
let name: string = "Judie";
// typescript union: allowing a variable to
// be more than one type using the | symbol
let age: number | string;
let isStudent: boolean;
// this is how you would declare that this var
// holds an array of strings
let hobbies: string[];
// apparently tuples hold an array of some sort?
let role:[number, string];
// any type has no restrictions
// but this isn't recommended.
let anything: any;
// unknown is apparently the better thing
// to use instead of 'any'
let something: unknown;

// this is how you can declare custom types
type Person = {
  // this is how to declare a property's type
  // by default it's a required property.
  name: string;
  // to make a property required, add a question mark
  // after the property name 
  age?: number; 
}

// you can include properties from other types
// you can "extend" other types
type Employee = Person & {
  position: string;
}

// interface works exactly the same as type
interface IPerson {
  name: string;
  age?: number;
}

// except it uses the keyword 'extend'
// so it is more readable
interface IEmployee extends IPerson {
  position: string;
}

// so, we use our interface/type
// to declare a typed object
let person: Person = {
  name: "Judie",
}

// this is how you can make an array
// with an interface
let lotsOfPeople: Person[];

// you also have to type function parameters
function printName(name: string) {
  console.log(name);
}

printName('Judie');

// Functions are also types?!
let printString: Function;
// this is a better way to declare functions
// parameters are set and it returns a void (or anything)
let printSomething: (name: string) => void;
// void returns "undefined"
// but never doesn't return anything at all
let returnNothing: () => never;

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
