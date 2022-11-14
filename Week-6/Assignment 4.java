//Best Time to  Buy And Sell Stocks

// 1. You are given a number n, representing the number of days.
// 2. You are given n numbers, where ith number represents price of stock on ith day.
// 3. You are required to print the maximum profit you can make if you are allowed a single transaction.


// This program is done in Java language
public int buyAndSellStock(int[] prices) {   
    int n = prices.length;
    Stack<Integer> st = new Stack<>();
    st.push(prices[n - 1]);
    int profit = 0;    
    for( int i = prices.length - 2 ; i >= 0 ; i-- ){        
        int pro = st.peek() - prices[i];    
        if( profit < pro ){
            profit = pro;
        }
        if( st.size() > 0 && st.peek() < prices[i] ){
            st.pop();
            st.push( prices[i] );
        }        
    }    
    return profit;
}



