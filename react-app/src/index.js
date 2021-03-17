const person = {
    name: '',
    walk() {
        console.log(this);
    },
    talk() {}
};

person.walk();

const walk = person.walk.bind(person);
walk();

// ES5
const square = function(number) {
    return number * number
}
// ES6
const square1 = number => {
    return number * number
}
// Shorter ES6 ONE PARAM
           //!number goes to number * number
const square2 = number => number * number;
console.log(square2(5));

