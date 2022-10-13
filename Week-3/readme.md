## This directory contains the assignment related to week 3 ( Javascript )

It contains 4 folders for 4 questions of Week 3 ( JavaScript ).

# Assignment 1

    Exercise 3.1:

    Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method.

# Assignment 2

    Exercise 3.2:

    Create 3 simple functions where call, bind and apply are used. The intention of this exercise isto understand how they work and their differences.

# Assignment 3

    Exercise 3.3:

    What is the output of the below problem and why.

    function createIncrement(){
        let count = 0;
        function increment(){
            count++;
        }
        let message = `count is ${count}`;
        function log(){
            console.log(message);
        }
        return [increment , log];
    }
    const [increment , log] = createIncrement();
    increment();
    increment();
    increment();
    log();

# Assignment 4

    Exercise 3.4:

    Refactor the above stack implementation, using the concept of closure, such that there is no-way to access items array outside of createStack() function scope.
