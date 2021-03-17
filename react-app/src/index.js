//! Example 1
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

//! Example 2
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

//! Example 3
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];

const activeJobs = jobs.filter(function(job) {return job.isActive;});

const activeJobs1 = jobs.filter(job => job.isActive);

//! Example 4 Arrow function don't need 'bind' because it inherits it

const people = {
    talk() {
        var self = this;
        setTimeout(() => {
         console.log('this', this);
        }, 1000 );
        
    }
};

people.talk();
