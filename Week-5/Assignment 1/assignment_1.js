
// Problem Statement

// I have an array and I have to perform the addition , subtraction and multiplication 
// with the first , second and third value of the array.


function* generator(array){
    for( const value of array ){
        yield value;
    }
}
const array = [100 , 150 , 200];
let gen = generator(array);

const fun = async function(){
    await console.log( "addition is " +  task1Add( gen.next().value ) );
    await console.log( "subtraction is " +  task2Subtract( gen.next().value ) );
    await console.log( "multiplication is " +  task3Multiply( gen.next().value ) );

}

fun();

function task1Add(num){
    return num + 5;
}

function task2Subtract(num){
    return num - 5;
}

function task3Multiply(num){
    return num * 10;
}




















