class Go{
    #a;
    constructor(name1,name2,name3){
        this.#a = name1,
        this.b = name2,
        this.c = name3
    }

    set changeA(val) {
        this.#a = val;
    }

    get getA(){
        return this.#a;
    }
}

const obj = new Go("a","b","c");
console.log(obj);
console.log(obj.getA);
obj.changeA = 12;
console.log(obj.getA);