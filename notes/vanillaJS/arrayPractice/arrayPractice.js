// Array Practice -- Ryan Kelley 

const intArr = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const stringArr = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
const floatArr  = [-1.0, -0.5, 0.0, 0.5, 1.0];
const boolArr = [true, false, true, true, false, false];

// Array Methods -- .map(), .filter(), .forEach()

// .filter() will create a new array based on results of function test passed to the method. 
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const evenArr = intArr.filter(isEven);
console.log(evenArr);

// .map() creates a new array by calling the specified function on all non-empty elements. 
function squareIt(num) {
    return num * num; 

}
const squaredFloatArr = floatArr.map(squareIt);
console.log(squaredFloatArr);

/* .forEach() calls a function for each non-empty element in an array. 
function inBed(str) {
    newString = str + 'in bed.'; 
    return newString;
}
var newStringArr = stringArr.forEach(inBed);
console.log(stringArr.forEach(inBed));
console.log(newStringArr.toString()); 

function noU(bool) {
    if (bool === true) {
        return false;
    } else {
        return true;
    }
}
console.log(boolArr.forEach(noU));
console.log(boolArr.forEach);
*/ 