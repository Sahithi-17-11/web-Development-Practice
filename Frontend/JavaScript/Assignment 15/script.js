//basic problems

//{1} Write a program to find big number of given two numbers
let a = 10,b = 20;
if (a > b) {
    console.log(a)
}
else{
    console.log(b)
}

//{2} Write a program to find big one in given three numbers
let c = 10, d = 20, e = 30;
if (c > d && c > e) {
    console.log(c);
}
else if (d > e && d > c) {
    console.log(d);
}
else{
    console.log(e) 
}

//{3} Write a function to find the factors of a given number
function factors(n){
    for (let i = 1; i <= n; i++) {
        if (n % i == 0)console.log(i);
    }
}
console.log("factors = ")
factors(15)

//{4} Write a function to check given number is prime or not(Hint: Prime number have only two factors)
function isPrime(num){
    let found = 0
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
           found = 1;
           break;
        }
    }
    if (found == 1)console.log(`${num} is not prime`)
    else console.log(`${num} is prime`)
}
isPrime(17)
isPrime(9)

//{5} Write a function to print even factors of given number
function evenFactors(x){
    for (let i = 2; i <= x; i = i + 2) {
       if (x % i == 0)console.log(i);
    }
}
console.log("even factors :")
evenFactors(12)

//{6} Write a function to receive a number as arg and return sum of its digits  INPUT : 1234  OUTPUT : 10 (1+2+3+4)
function sumOfDigits(y) {
    let sum = 0
    while (y != 0){
        sum += (y % 10)
        y = Math.floor(y / 10)
    }
    return sum;
}
console.log("sod = " + sumOfDigits(1234))
