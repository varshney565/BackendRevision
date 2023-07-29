function Person(a,b,c){
    this.name = a,
    this.age = b,
    this.marks = c
}

const p1 = new Person("shivam",22,23);
console.log(p1);
const t = 2;
console.log(t.__proto__.__proto__.constructor.name);