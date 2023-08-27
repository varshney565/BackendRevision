class Person {
    static population = 0;
    constructor(name,age) {
        this.name = name;
        this.age = age;
        Person.population++;
    }
    
    call() {
        console.log(`${this.name}`,`${this.age}`);
    }
}

class Engineer extends Person {
    constructor(name,age,field) {
        super(name,age);
        this.field = field;
    }
}

const p1 = new Person("shivam",22);
p1.call();