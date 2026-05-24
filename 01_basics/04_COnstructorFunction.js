function Shape(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    // THis type of function only be used inside constructor one(one with parameters)
    this.area = function() {
        return this.length * this.breadth;
    };
}

let newShape = new Shape(4, 9);
console.log(newShape.length);

console.log(newShape);
console.log(newShape.area());