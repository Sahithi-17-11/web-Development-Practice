/*String Analysis
Consider the following string: aaaabbababababbbbabababaaaa Find the frequency of "a" and "b". (Frequency means the number of times that specific character appears.)*/

let str = "aaaabbababababbbbabababaaaa";
let a = 0, b = 0;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'a')a++;
    else b++;
}
console.log(`Frequency of a : ${a}`)
console.log(`Frequency of b : ${b}`)

/*Word Count Function
Write a function that receives a string of multiple words as an argument and then prints the number of words in that string. Example: Input: how are you all Output: 4*/

let input = "how are you all"
let count = 1;
for (let v of input) {
    if (v === ' ')count++;
}
console.log(`Number of words in string ${count}`)
