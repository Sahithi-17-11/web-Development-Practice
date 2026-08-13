const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    },5000)
});

p.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});