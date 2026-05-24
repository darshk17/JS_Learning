const user = {
    username: "Darsh",
    price: 999,

    message: function () {
        console.log(`${this.username}, welcome to website`);
    }
}

user.message();

// const chai = function(){
//     username: "Mannu"
// console.log(this.username);
// }


// Arrow Keyword
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(23,23));


// // ANother Method
// const addTwo = (num1,num2) =>  (num1+num2);
// console.log(addTwo(23,23));


// when returning an Object, mjust be inside small bracjets
// const addTwo = (num1,num2) =>  ({username: "Darsh"});
// console.log(addTwo(2,3));



// const obj1={
//     object: "Car"
// };
// const obj2={
//     model: "Toyota",
//     __proto__:obj1
// };
// console.log(`obj2`,obj2.__proto__);



let genricCar = {tyre:4};
let Car={model:"toyota"};

Object.setPrototypeOf(Car,genricCar);

// console.log(`Car`, Object.getPrototypeOf(Car));
console.log(Car.tyre);

