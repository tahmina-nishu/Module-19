/*
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
Output:
4
*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
};

let objKeys = Object.keys(student);
let propetyNumber = objKeys.length;
console.log(propetyNumber);