/*
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/

let str = "Example with x and X characters.";

str = str.split('x').join('y');

str = str.split('X').join('Y');

console.log(str);

    