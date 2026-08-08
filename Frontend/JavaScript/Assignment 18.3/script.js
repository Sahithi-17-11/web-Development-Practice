let arr = [
            { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},
            { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},
            { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},
        ];
let mat = 0, phy = 0, chem = 0;
let mats,phys,chems;
for (let student of arr){
    if (student.marks.maths > mat) {
        mat = student.marks.maths
        mats = student.name;
    } 
    if (student.marks.physics > phy) {
        phy = student.marks.physics
        phys = student.name
    }
    if (student.marks.chemistry > chem) {
        chem = student.marks.chemistry;
        chems = student.name
    }
}
console.log(`student who scored highest marks in maths is ${mats}`);
console.log(`student who scored highest marks in physics is ${phys}`);
console.log(`student who scored highest marks in chemistry is ${chems}`);