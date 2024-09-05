/*
Count how many times a string has the letter a
*/

let str = 'tahmina';
let len = str.length;
let cnt = 0;
for(let i = 0; i < len; i++)
{
    if(str[i] === 'a')
        cnt++;
}

console.log(cnt);