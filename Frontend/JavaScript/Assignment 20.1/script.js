/*Create a base class called Vehicle with the following:
make (manufacturer)
model
year
Method: getDetails() → returns a string like "2022 Toyota Corolla"*/
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

let car = new Vehicle("Corolla","Toyota",2022)
console.log(car.getDetails())