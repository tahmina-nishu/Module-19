/*
Check whether a string contains all the vowels a, e, i, o, u
*/

let str = 'i love string';

const lowerStr = str.toLowerCase();

const containsAllVowels =
    lowerStr.indexOf('a') !== -1 &&
    lowerStr.indexOf('e') !== -1 &&
    lowerStr.indexOf('i') !== -1 &&
    lowerStr.indexOf('o') !== -1 &&
    lowerStr.indexOf('u') !== -1;

    console.log(containsAllVowels); 