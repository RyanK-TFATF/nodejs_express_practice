// Array Practice 

const intArr = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArr = ["Red", "Green", "Blue", "Yellow", "Orange"];
const floatArr  = [-1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5];
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