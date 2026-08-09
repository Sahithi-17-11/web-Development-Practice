class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails() {
        return `${this.year} ${this.model} ${this.make}`;
    }
}
class Truck extends Vehicle{
    constructor(make,model,year,payloadCapacity){
        super(make,model,year);
        this.payloadCapacity = payloadCapacity;
    }
    getTrunkInfo(){
        return `${this.getDetails()} , Payload: ${this.payloadCapacity}kg`;
    }
}

class Car extends Vehicle{
    constructor(make,model,year,numberOfDoors){
        super(make,model,year)
        this.numberOfDoors = numberOfDoors;
    }
    getCarInfo(){
        return this.getDetails() + " , " + this.numberOfDoors + " -door car";
    }
}
// Car objects
let c1 = new Car("Toyota", "Corolla", 2022, 4);
let c2 = new Car("Honda", "Civic", 2024, 4);
console.log(" details of car 1: ",c1.getCarInfo());
console.log(" details of car 2: ",c2.getCarInfo());
// Truck objects
let t1 = new Truck("Ford", "F-150", 2022, 2000);
let t2 = new Truck("Chevrolet", "Silverado", 2024, 2500);
console.log(" details of truck 1: ",t1.getTrunkInfo());
console.log(" details of truck 2: ",t2.getTrunkInfo());