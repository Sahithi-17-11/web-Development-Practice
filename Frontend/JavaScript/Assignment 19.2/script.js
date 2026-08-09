//Note: For each object of these 5 , send different discount percentages as argument
//Create Product class and add properties brand, price, model and add getDiscountPrice method to its prototype. Create 5 Products objects and print their discount price.
class product{
    constructor(brand,price,model,discount){
        this.brand = brand
        this.price = price
        this.model = model
        this.discount = discount
    }
    getDiscountPrice(){
        let x = this.price * this.discount * 0.01;
        let dis = this.price - x;
        console.log("Discount price :",dis)
        return dis;
    }
}

let p1=new product("Genie",1000,5.7,5)
let p2=new product("Wattpad",2000,4.7,3.5)
let p3=new product("Lakme",999,10,7)
let p4=new product("Dazller",100,6,2)
let p5=new product("Louis Vitton",100000,1,10)

console.log(p1)
p1.getDiscountPrice()
console.log(p2)
p2.getDiscountPrice()
console.log(p3)
p3.getDiscountPrice()
console.log(p4)
p4.getDiscountPrice()
console.log(p5)
p5.getDiscountPrice()