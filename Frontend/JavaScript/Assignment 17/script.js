
let student = {
    Name: "vani",
    rollno: 20,
    Age: 21,
    Grade: 9.5,
    Address: {
        Street: "JNTU",
        City: "HYD",
        Pincode: 5100000,
    },
    MobileNo: 9999999999
};

let employee = {
    EmpId: 100,
    Name: "Hari",
    mobile: 99999999,
    basic: 100000,
    Skills: ["java", "angular", "reactjs"],
    Address: {
        Street: "JNTU",
        City: "HYD",
        Pincode: 5100000,
    },
    getsalary: function () {
        let hra = 0.15 * this.basic;
        let da = 0.10 * this.basic;
        let salary = this.basic + hra + da;
        return salary;
    }
};

let bus = {
    busNumber: "TS09-BU-2345",
    route: "Secunderabad to Gachibowli",
    driverName: "Ravi Kumar",
    conductorName: "Anil",
    capacity: 50,
    currentPassengers: 35,
    timings: {
        start: "07:00 AM",
        end: "05:00 PM"
    },
    stops: ["Secunderabad", "Begumpet", "Panjagutta", "Jubilee Hills", "Gachibowli"]
};

const mobile = {
    brand: "Samsung",
    model: "Galaxy S23",
    price: 79999,
    os: "Android",
    screenSize: "6.1 inches",
    RAM: "8GB",
    storage: "256GB",
    battery: "3900mAh",
    camera: {
        rear: "50MP",
        front: "12MP"
    },
    is5G: true,
    color: "Phantom Black",
    available: true
};

console.log("Student:", student);
console.log("Bus:", bus);
console.log("Employee:", employee);
console.log("Employee Salary:", employee.getsalary());
console.log("Mobile:", mobile);
