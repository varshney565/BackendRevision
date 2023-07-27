class Circle{
    static a = 2;
    static b = 2;
    constructor(name){
        this.name = name;
    }
}

Circle.t = 12;
const cir = new Circle("This is a Beautiful Circle");
console.log(cir);
console.log(Circle.t);