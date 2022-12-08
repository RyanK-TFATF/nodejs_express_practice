// JavaScript Data Types 
const myArr: [] = []; // Short hand version. 
const myBool: boolean = true;
const myNum: number = 0; // integers and floats are numbers.  
const myObj: {} = {}; // Short hand version. 
const myNotANumber = NaN;
const myNull: null = null;
const myString: string = 'This is a string.';
const myUndef: undefined = undefined;

// Data Sets 
const arrExample = ['Red', 'Blue', 'Green', 'Yellow', 'Orange'];

/* Traditional for Loop -- Use when requiring index. 
for (let i = 0; i < arrExample.length; i++) {
    console.log(arrExample[i]); 
}
*/

// for of loop -- automatically loops the entire iterable -- most common 
for (const color of arrExample) {
    if (color === 'Green') {
        break;
    }
    console.log(color);
}

/* 
arrExample.forEach((color) => {console.log(color)}); 

// Traditional Function Example 
function babyFunction(parameter1, test) { 
    console.log("Blah blah blah."); 
    test = true;     
}

// Arrow Function Example 
(parameter1) => { 
    console.log("Blah blah blah."); 
}
*/

// Creating Interfaces (PascalCaseEachWordIsUpperCase used in interfaces, enums, classes.)
interface People {
    firstName: string;
    lastName: string;
    age: number;
    height?: number;  // ? makes it an optional properties.  
    // 
    address?: {
        state: string;
        zipCode: number;
    }
}

const peopleArr: People[] = [
    {
        firstName: 'Billy',
        lastName: 'The Kid',
        age: 10
    },
    {
        firstName: 'Wyatt',
        lastName: 'Earp',
        age: 10
    },
    { 
        firstName: 'Doc', 
        lastName: 'Holliday', 
        age: 10, 
        height: 75, 
        address: { 
            state: 'Florida', 
            zipCode: 32224
        } 
    } 
];


console.log(peopleArr.findIndex((person: any) => {
    return person.lastName === 'Holliday';
}));

// Find first name Wyatt in the array.  Update age to 91. Console.log the entire new array. 
// .map() will iterate through an array, can map to a new structure. 
const updatedPeople = peopleArr.map((person: any) => {
    if (person.firstName === 'Wyatt') {
        // person.age = 91; 
        // delete person.age; Deletes property from the object. 
    } // Do not use else in simple situations.  
    return person;
});
console.log(updatedPeople);
console.log('SHOW PROPERTIES');
console.log([...peopleArr]); // Show properties.  
console.log('SHOW PROPERTIES END');
/* .filter() creates a new array based on true/false returns of function. 
const wantedCriminal = peopleArr.filter((person:any) => {
    return person.age === 10; 
});
console.log(wantedCriminal); 
*/


// .find() returns the first instance of a object from an array. 
console.log('BEGIN .find() HERE');
console.log('ORIGINAL ARRAY');
console.log(peopleArr);
const wantedCriminal = peopleArr.find((person: any) => {
    return person.age === 10;
});
console.log('NEW ARRAY');
console.log(wantedCriminal);
console.log('END .find() HERE');

// Copying object properties to new object.  
// const orange = Object.assign({}, apple); // Assigned by reference. OLD SCHOOL 
console.log('BEGIN COPY OBJECT PROPERTIES HERE');
const apple = { color: 'Red' };
const orange = { ...apple }; // ... is destructuring an object, pulls all the properties.  
orange.color = 'Orange';
console.log('APPLE', apple);
console.log('ORANGE', orange);
console.log('END COPY OBJECT PROPERTIES HERE');


// Why use this notation? 
function getSum(x:number, y:number) {
    return x + y; 
}

console.log(getSum(5, 2)); 

/*
+
-
* 
/
% 
*/ 

/* Most Common if Operators 
&&
||
!
=== Matches by type and value.  
*/ 

/* Comparison Operators 
<=
>= 
<
> 
!==  
*/ 

// Ctrl-D select next.  
const newObject = {prop1: 1, prop2: 1, prop3: 1, prop4: 1, prop5: 1};
const {prop1, prop2, prop3} = newObject; 
console.log(prop1); 

// Destructuring an Object -- Why? 
function calcValue(obj:any) {
    const {age, weight} = obj; 
}














