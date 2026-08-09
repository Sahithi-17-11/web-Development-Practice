/*Create another subclass called Truck that extends Vehicle and adds:
payloadCapacity
Method: getTruckInfo() → returns Vehicle details + , Payload: 1000kg*/
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
let obj = new Truck("Corolla","Toyota",2022,1000);
console.log(obj.getTrunkInfo())