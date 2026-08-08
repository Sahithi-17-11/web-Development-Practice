//Create Employee class and add properties name, age, basic and add getSalary method to its prototype. Create 5 Employee objects and print their salaries.
class employee{
    //name;
    //age;
    //basic;
    constructor(name,age,basic){
        this.name = name;
        this.age = age;
        this.basic = basic;
    }
    getSalary() {
        let hra = 0.15 * this.basic;
        let da = 0.1 * this.basic;
        let salary = hra + da + this.basic
        console.log(`salary of ${this.name} is ${salary}`)
        return salary;        
    }
}
let emp1 = new employee("sam",23,100000)
let emp2 = new employee("raj",29,250000)
let emp3 = new employee("ram",25,300000)
let emp4 = new employee("shrada",27,220000)
let emp5 = new employee("virat",34,500000)

console.log(emp1)
emp1.getSalary()
console.log(emp2)
emp2.getSalary()
console.log(emp3)
emp3.getSalary()
console.log(emp4)
emp4.getSalary()
console.log(emp5)
emp5.getSalary()