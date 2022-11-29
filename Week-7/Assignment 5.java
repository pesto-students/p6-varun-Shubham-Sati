

// Next Greater Element


public static int[] nextGreater(int[] arr){
   int[] next = new int[arr.length];
   Stack<Integer> st = new Stack<>();
   
   st.push( arr[arr.length - 1] );
   next[arr.length - 1 ] = -1;
   for( int i = arr.length - 2 ; i >= 0 ; i-- ){ 
       while(  st.size() > 0 && arr[i] > st.peek() ){
           st.pop();
       }
       if( st.size() == 0 ){
           next[i] = -1;
       }else{
           next[i] = st.peek();
       }
       
       st.push(arr[i]);
   }
   return next;
 }






