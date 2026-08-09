/*Create a subclass called Car that extends Vehicle and adds:
numberOfDoors
Method: getCarInfo() → returns Vehicle details + , 4-door car*/
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

class Car extends Vehicle{
    constructor(make,model,year,numberOfDoors){
        super(make,model,year)
        this.numberOfDoors = numberOfDoors;
    }
    getCarInfo(){
        return this.getDetails() + " , " + this.numberOfDoors + " -door car";
    }
}

let obj = new Car("Corolla","Toyota",2022,4);
console.log(obj.getCarInfo())