function person(a,b,c){
    this.name = a,
    this.age = b,
    this.country = c
}

const p1 = new person("shivam",12,"INDIA");
console.log(p1);