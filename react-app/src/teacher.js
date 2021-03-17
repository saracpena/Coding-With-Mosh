import { Person } from './person';

export function promote() {}

export default class Teacher extends Person {
    constructor(name, degree){
      super(name) //!this is a child class inheriting from parent MUST ADD SUPER()
      this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}
