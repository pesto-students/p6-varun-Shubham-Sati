
// Function to find the duplicate in an array of not


function hasDuplicate( array ){
    const set = new Set();
    for( const element of array ){
        if( set.has( element ) ){
            return true;
        }else{
            set.add(element);
        }
    }

    return false;
}


console.log(hasDuplicate([1,2,4,5,6,3,2]));













