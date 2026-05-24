// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,

//     start: function () {
//         return `${this.make} car got started in ${this.year}`
//     },
// };

// console.log(car.start());




// function car(type,model,year){
// this.type=type;
// this.model=model;
// this.year=year;
// this.statement= function(){
//     return `${this.type} car is of ${this.model} manufactured in ${this.year}`;
// }
// }
// let Car= new car("Audi","Rx555",1952);
// console.log(Car);
// console.log(Car.statement());







class Car {

    constructor(type, model, year) {
        this.type = type;
        this.model = model;
        this.year = year;
    }

    start() {
        return `${this.type} car is of ${this.model} manufactured in ${this.year}`;
    }
}

let car1 = new Car("Audi", "Rx555", 1952);

console.log(car1);

console.log(car1.start());