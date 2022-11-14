
// 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// This program is done in Java language
public List<List<Integer>> threeSum(int[] nums , int k) {
    Arrays.sort( nums );
    List<List<Integer>> ans = new ArrayList<>();
    for( int i = 0 ; i < nums.length ; i++ ){
        if( i > 0 && nums[i - 1] ==  nums[i] ){
            continue;
        }
        List<List<Integer>> res = twoSum( nums , 0 , i );
        for( List<Integer>list : res ){
            list.add( nums[i] );
            ans.add( new ArrayList<>( list ) );
        }
    }
    return ans;
}
public static List<List<Integer>> twoSum( int[] nums , int target , int i ){      
    List<List<Integer>> ans = new ArrayList<>();
    int left = i + 1;
    int right = nums.length - 1;
      
    while( left < right ){
        int sum = nums[left] + nums[right];
        if( sum == target ){
            List<Integer> list = new ArrayList<>();
            list.add( nums[left] );
            list.add( nums[right] );
            ans.add( new ArrayList<>( list ) );  
            while(left < right && nums[left+1] == nums[left])
                left++;
            while(right > left && nums[right] == nums[right -1])
                right--;  
                left++;
                right--;
        }else if( sum < target ){
            left++;
        }else{
            right--;
        }
    }  
    return ans;  
  }