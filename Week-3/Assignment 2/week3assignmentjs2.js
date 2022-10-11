
console.log("***********************")
console.log("*********Bind**********")
console.log("***********************")

const getFullName = {
    fullName: function(address , pincode){
        return this.firstName + " " + this.lastName + " from " + address + " Pin " + pincode;
    }
}

// console.log(person.fullName());

const person1 = {
    firstName: "Shubham",
    lastName: "Sati",
}

const person2 = {
    firstName: "abcd",
    lastName: "efgh",
}

let person1FullName = getFullName.fullName.bind( person1 );
console.log( person1FullName() );
console.log( person1FullName("Srinagar") );
console.log("************")
let person2FullName = getFullName.fullName.bind( person2 );
console.log( person2FullName() );
console.log( person2FullName("Dehradun" , "798798") );

console.log("*************************")
console.log("*********Call************")
console.log("*************************")

console.log( getFullName.fullName.call( person1 ) )
console.log( getFullName.fullName.call( person1 , "Sringar" , "78969" ) )
console.log("************")
console.log( getFullName.fullName.call( person2 ) )
console.log( getFullName.fullName.call( person2 , "Dehradun" , "78698" ) )


console.log("**************************")
console.log("*********Apply************")
console.log("**************************")

console.log( getFullName.fullName.apply( person1 ) )
console.log( getFullName.fullName.apply( person1 , ["Sringar" , "78969"] ) )
console.log("************")
console.log( getFullName.fullName.apply( person2 ) )
console.log( getFullName.fullName.apply( person2 , ["Dehradun" , "78698"] ) )






