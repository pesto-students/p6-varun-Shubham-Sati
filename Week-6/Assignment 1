
// Max sum Contiguous Subarray.
    // ~(Kadane Algorithm)

// Question
// 1. You are given an array(arr) of integers.
// 2. You have to find maximum subarray sum in the given array.
// 3. The subarray must have at least one element.

// This program is done in Java language
public static int maxSumSubarray(int[] arr) {    
    int currsum = 0;
    int overallsum = Integer.MIN_VALUE;
    
    for( int i = 0 ; i < arr.length ; i++ ){
        if( currsum + arr[i] > arr[i] ){
            currsum+=arr[i];
        }else{
            currsum = arr[i];
        }
        if( overallsum < currsum ){
            overallsum = currsum;
        }
    }
    return overallsum;
}