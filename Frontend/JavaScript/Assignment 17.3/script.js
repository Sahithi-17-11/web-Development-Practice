//Create product object with properties product number, product name, model, price and a method to return discount price by receiving the discount percentage as argument.
let product = {
    number : 17,
    name : 'mobile',
    model : 'moto',
    price : 18000,
    discount : function(x) {
        let dis = this.price * x * 0.01
        this.price = this.price - dis
        return this.price
    }
}
console.log("product = ",product)
console.log("discount is 15% then price = ",product.discount(15));
console.log("discount is 33.33% then price =",product.discount(33.33));