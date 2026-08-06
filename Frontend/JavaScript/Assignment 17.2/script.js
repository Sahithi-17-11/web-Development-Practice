let student = {
    rollnumber : 18,
    name : "virat",
    marks : [55,65,37,90],
    address : {
        hNo : "2-50/1",
        colony : "rose murf",
        town : "zhb",
        district : "srd",
        state : "Ts"
    },
    getAggregate : function() {
        let total = 0
        for (let i of this.marks){
            total += i;
        }
        let aggregate = total / this.marks.length
        return aggregate
    }
}

console.log("student = ",student);
console.log("Aggregate = ",student.getAggregate())