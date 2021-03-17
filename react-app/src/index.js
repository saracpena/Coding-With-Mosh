const person = {
    name: '',
    walk() {
        console.log(this);
    },
    talk() {}
};

person.walk();

const walk = person.walk;
walk();

