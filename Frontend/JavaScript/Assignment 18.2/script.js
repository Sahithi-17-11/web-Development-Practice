let arr = [1,2,3,4]
let i = 10;
let arr2 = arr.map((a)=>{
    a = a + i
    i += 10
    return a
})
console.log(arr2)
for (let ele of arr2){
    console.log(ele)
}