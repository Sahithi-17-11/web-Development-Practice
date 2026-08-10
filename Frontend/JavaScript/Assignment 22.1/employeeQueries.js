/*Find the names (array of names) of employees from "Hyderabad".
Find the name and address of employees whose age is between 40 and 50 (inclusive).
Find the employees who are NOT from Hyderabad.
Find the names (array of names) of employees whose skills include "reactjs".*/
import { employee } from "./employeesData.js";
let arr = [];
for (let v of employee) {
    if(v.place === "Hyderabad"){
        arr.push(v.name)
    }
}
console.log("names of employees from Hyderabad " , arr)

console.log("name and address of employees whose age is between 40 and 50 :-")
for(let v of employee) {
    if(v.age >= 40 && v.age <= 50) {
        console.log(v.name + " from " + v.place);
    }
}

console.log("Employees who are NOT from Hyderabad :-")
for (let v of employee){
    if(v.place !== "Hyderabad") {
        console.log(v.name);
    }
}

console.log("names of employees whose skills include reactjs")
let ans = [];
for(let v of employee) {
    if(v.skills === "react.js")ans.push(v.name)
}
console.log(ans)