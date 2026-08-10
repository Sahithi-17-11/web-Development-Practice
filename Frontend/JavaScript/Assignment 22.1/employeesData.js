/*Assignment: Employee Data Module & Filtering
Part 1: Define and Export Employee Data Module
Define an array of employee objects in a module (e.g., employeesData.js) and export it.
Part 2: Import and Filter Employee Data
In a separate module (e.g., app.js or employeeQueries.js), import the employees array and perform the following operations:

Find the names (array of names) of employees from "Hyderabad".
Find the name and address of employees whose age is between 40 and 50 (inclusive).
Find the employees who are NOT from Hyderabad.
Find the names (array of names) of employees whose skills include "reactjs".*/

export let employee = [
    {name:"ram",place:"Hyderabad",age:37,skills:"react.js"},
    {name:"sita",place:"Hyderabad",age:34,skills:"node.js"},
    {name:"raj",place:"Bombay",age:42,skills:"sql"},
    {name:"sam",place:"chennai",age:44,skills:"ai-ml"}
]
