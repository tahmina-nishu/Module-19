/*
Capitalize Every first Letter of each word in a String
*/

let strng = 'i love javascript';
let str = strng.split(" ");
for(let i = 0; i < str.length; i++)
{
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
}
const capitialized = str.join(" ");

console.log(capitialized);