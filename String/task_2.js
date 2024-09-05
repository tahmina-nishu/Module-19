/*
Count how many times a string has the letter a or A
*/

let str = 'tahminA';
let len = str.length;
let cnt = 0;
for(let i = 0; i < len; i++)
{
    if(str[i] === 'a' || str[i] === 'A')
        cnt++;
}

console.log(cnt);