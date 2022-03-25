// Question 1
// Write a simple JavaScript program to join all elements of the following array into a string.

var myColor = ["Rio", "Tokyo", "Berlin"]
console.log('Question 1');
console.log(myColor.toString());

// Question 2
// Write a JavaScript program to remove duplicate items from an array. Consider Case sensitive text as well.

var myColor = ['Red', 'Green', 'Blue', 'red', 'Orange', 'blue']
var uniqueArray = []
myColor.forEach((color, index) => {
    myColor[index] = color.toUpperCase();
});
uniqueArr = [...new Set(myColor)]
console.log('Question 2');
console.log(uniqueArr);

// Question 3
//Write a JavaScript function to sort the following array of objects by title value

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
library.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
console.log('Question 3');
console.log(library);


// Question 4
//Create a function called “abs” that returns the absolute value of the number passed to it as an argument.
// The positive version of a negative number is its absolute value, whereas the absolute value of a positive number (or zero) is the number itself.

function abs(absValue) {
    if (absValue >= 0) {
        return absValue;
    } else {
        return -1 * absValue;
    }
}
var num = prompt('Enter Value for Absolute Filter');
console.log('Question 4');
console.log('Abs Value is :' + abs(num));

// Question 5
// Write a function named “returnMyAns”, that takes three arguments: two operands and an operator and returns a string with the question “What is [oprd1] [opr] [oprd2]?”.

function returnMyAns(num1, num2, ope) {
    switch (ope) {
        case '+':
            return (num1 + num2)
        case '-':
            return (num1 - num2)
        case '*':
            return (num1 * num2)
        case '/':
            return (num1 / num2)
        case '%':
            return (num1 % num2)
        default:
            return 'Please Enter Valid Operator'
    }
}
console.log('Question 5');
console.log(returnMyAns(5, 7, '+'));
console.log(returnMyAns(8, 2, '*'));
console.log(returnMyAns(8, 2, '-'));

// Question 6
// Write a function named randomOp that randomly returns either "+", "-", "*", or "/".

rendArr = ['+', '-', '*', '/']
randValue = Math.floor(Math.random() * 4);
console.log('Question 6');
console.log('Random Operators :' + rendArr[randValue]);