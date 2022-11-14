// Sort Array of 0's , 1's and 2's

// Given an array of size N containing only 0s, 1s, and 2s; 
// sort the array in ascending order. 
// Example: Input: N = 5 arr[]= {0 2 1 2 0} 
// Output:0 0 1 2 2

// This program is done in Java language
public static void maxSumSubarray(int[] arr) {        
    int ptr0 = 0;
    int ptr2 = arr.length - 1;

    for( int i = 0 ; i < arr.length && i <= ptr2 ; i++ ){
        if( arr[i] == 0 ){
            swap( arr , i , ptr0 );
            ptr0++;
        }else if(arr[i] == 2){
            swap( arr , i , ptr2 );
            ptr2--;
            i--;
        }else{
            continue;
        }
    }
}

public static void swap( int[] arr , int i , int j ){
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


