From line no. 16 we made a call for "createIncrement()" function.
    - while making a call following things happen
        a. count is set to 0.
        b. message is set to "count is 0"
        c. we return two function named as
            - increment()
            - log()
            which are received back seperately at the calling time.

now flow went to line 17 which call for the increment() function
    - while making a call following things happen
        a. count is incremented to 1 as increment() is the child function of the createIncrement() function
            so it have access to its parent variables and methods ( closures ).
        
now again flow went to line 18 and 19 which does the same task as line 17 did
    - now count variable value becomes 3

now the flow went to line 20 and it makes call to log() function
    - while making a call following things happen
        it display the value of the message variable
        - i.e "count is 0" as we have not done any changes to message variable so it did not change its value.



Final output => "count is 0"






















