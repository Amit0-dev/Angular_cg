// 1. Create variables: name, age, city, and course using appropriate TypeScript data types.

let full_name: string = "John Doe";
let age: number = 30;
let city: string = "New York";
let course: string = "TypeScript Basics";

// 2. Create one variable using 'let' and one using 'const'. Explain the difference in comments.

let mutableVariable: string = "I can change";
const immutableVariable: string = "I cannot change";

// Defining the difference:

// The 'let' keyword allows you to declare a variable that can be reassigned later in the code.
// The 'const' keyword allows you to declare a variable that cannot be reassigned after its initial assignment.

// 3. Create variables of type string, number, and boolean.
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;

// 4. Create an interface named Student with id, name, branch, and age properties.

interface Student {
    id: number;
    name: string;
    branch: string;
    age: number;
}