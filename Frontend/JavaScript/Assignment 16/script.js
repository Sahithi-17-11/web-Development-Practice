//1} sum
let a = [1,2,3,4,5]
let sum = 0;
for (v of a) {
    sum = sum + v
}
console.log(`sum of elements = ${sum}`)

//2} even numbers
let b = [12,45,68,23,17]
console.log(`Even numbers in the array ${b} are :-`)
for(x of b){
    if (x % 2 === 0)console.log(x)
}

//3} prime numbers
console.log(`Prime numbers in the array ${b} are:-`)
for(y of b){
    let flag = 0;
    for (let i = 2; i < y; i++) {
        if (y % i === 0){
            flag = 1;
            break;
        }
    }
    if(flag === 0)console.log(y)
}