
// Employee is the child of Person. 

// 1. initialize function is in the prototye of Person.
// 2. teach function is in the prototype of Employee.


function Person(){
}

Person.prototype.initialize = function(name , age){
    this.name = name;
    this.age = age;
}

function Employee(name , age){
    Person.call(this , name , age);
}
Object.setPrototypeOf( Employee.prototype , Person.prototype );

Employee.prototype.teach = function(subject){
    console.log( this.name + " is now teaching " + subject );
}

const emp1 = new Employee();
emp1.initialize("Shubham" , 23);
emp1.teach("Data Structures and Algorithms.")
console.log( emp1 )


