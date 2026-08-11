/*Create shallow and deep copies of the following object and check the copy
const product = {
id: 101,
name: "Wireless Headphones",
price: 99.99,
features: ["Bluetooth", "Noise Cancelling"],
manufacturer: {
name: "AudioTech",
location: "California"
},
dateAdded: new Date()
}; */
const product = {
    id: 101,
    name: "Wireless Headphones",
    price: 99.99,
    features: ["Bluetooth", "Noise Cancelling"],
    manufacturer: {
        name: "AudioTech",
        location: "California"
    },
    dateAdded: new Date()
}; 
let sProduct = {...product};
let dProduct = structuredClone(product);

console.log(product)
console.log(sProduct)
console.log(dProduct)

console.log("Product === shallow:", product === sProduct);
console.log("Product === deep:", product === dProduct);

console.log("Features shared with shallow:",
    product.features === sProduct.features);

console.log("Features shared with deep:",
    product.features === dProduct.features);

sProduct.features.push("Waterproof");

console.log("Original after shallow modification:", product.features);
console.log("Shallow copy:", sProduct.features);
console.log("Deep copy:", dProduct.features);