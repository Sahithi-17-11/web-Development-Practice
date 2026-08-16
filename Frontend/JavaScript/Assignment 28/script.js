/**1.Get data from  the API " https://jsonplaceholder.typicode.com/todos " and  display the data in both table and grid of cards format
2. Read a number as input from user and print the factors of it on web page.
3. Read two numbers as input from user and create a simple calculator to perform arithmetic operations and the result can be printed on webpage.
4. Read a number and print whether it is prime or not */

async function fetchData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await result.json();
    for (let row of data) {
        let tr = document.createElement("tr");
        let card = document.createElement("div");
        tr.innerHTML = `<td>${row.userId}</td>
                        <td>${row.id}</td>
                        <td>${row.title}</td>
                        <td>${row.completed}</td>`;
        card.innerHTML = `
                            <h3>${row.title}</h3>
                            <p>UserId: ${row.userId}</p>
                            <p>Id: ${row.id}</p>
                            <p>Completed: ${row.completed}</p>
                        `;
        document.getElementById("todoTable").appendChild(tr);
        document.getElementById ("cardContainer").appendChild(card);   
    }
}

fetchData();


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let num = Number(document.getElementById("num").value);
    // factor logic here
    let factors = [];
    let isPrime = false;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    if (num >= 2 &&factors.length === 2) {
        isPrime = true;
    }
    document.getElementById("result").innerHTML = `Factors of ${num}: ${factors}<br>Is Prime: ${isPrime}`;
});

document.getElementById("calcy").addEventListener("submit",(event)=>{
    event.preventDefault();
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let add = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let rem = num1 % num2;
    let power = num1**num2;
    document.getElementById("op").innerHTML = `Arithmetic Operations <br>
                                               Add = ${add} <br>
                                               Sub = ${sub} <br>
                                               Multiply = ${mult} <br>
                                               Div = ${div}<br>
                                               Remainder = ${rem}<br>
                                               Power = ${power}`;
});