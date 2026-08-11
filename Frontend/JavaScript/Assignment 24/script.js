/**Destructure the first two colors into variables color1 and color2
const colors = ['red', 'green', 'blue', 'yellow']; */

const colors = ['red', 'green', 'blue', 'yellow']
let [color1,color2] = colors

/**Destructure name and age into variables
const person = {
name: 'Alice',
age: 25,
city: 'New York'
}; */

const person = {
    Name: 'Alice',
    age: 25,
    city: 'New York'
}
let{Name,age} = person

/**Destructure the first user's name and the status
const data = {
users: [
{ id: 1, name: 'Alex' },
{ id: 2, name: 'Sam' }
],
status: 'active'
}; */

const data = {
    users: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Sam' }
    ],
    status: 'active'
}
let {users : [{name}], status} = data

// 1. Array destructuring
console.log(color1);
console.log(color2);

// 2. Object destructuring
console.log(Name);
console.log(age);

// 3. Nested destructuring
console.log(name);
console.log(status);