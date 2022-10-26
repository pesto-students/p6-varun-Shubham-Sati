
// Fibonacci Series with Iterators

const Fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 0;
        let a = 0;
        let b = 0;
        return {
            next : () => {
                if( i++ <  n){
                    [a , b] = [b , (a + b) || 1];
                    return {
                        value: a,
                        done: false,
                    }
                }else{
                    return {
                        value : undefined,
                        done : true,
                    }
                }
            } 
        }
    }
});


console.log( [...Fib(6)] );

for( let num of Fib(6) ){
    console.log(num);
}


