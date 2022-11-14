// Pair with Given Difference

// Given an one-dimensional unsorted array A containing N integers.
// You are also given an integer B, 
// find if there exists a pair of elements in the array 
// whose difference is B.
// Return1 if any such pair exists else return 0. 
// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
// Input Format First argument is an integer array A of size N. 
// Second argument is an integer B.

// Output Format Return 1 if any such pair exists else return 0.
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Output: 1
// Input 2: A = [-10, 20] B = 30 Output: 1

// This program is done in Java language
public int countKDifference(int[] nums, int k) {
    Map<Integer,Integer> map = new HashMap<>();
    for(int i = 0;i< nums.length;i++){
        if(map.containsKey(nums[i]-k)){
            return 1;
        }
        if(map.containsKey(nums[i]+k)){
            return 1;
        }
        map.put(nums[i],map.getOrDefault(nums[i],0)+1);
    }       

    return 0;
}