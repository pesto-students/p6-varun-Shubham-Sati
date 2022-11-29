

// Implement queue using two stack


class MyQueue {
Stack<Integer> mainS;
    Stack<Integer> helperS;
    /** Initialize your data structure here. */
    public MyQueue() {
        mainS = new Stack<>();
      helperS = new Stack<>();
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        mainS.add(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
        if( mainS.size() != 0 ){
          while( mainS.size() != 0 ){
              helperS.push( mainS.pop() );
          }
          
          int val = helperS.pop();
          while( helperS.size() != 0 ){
              mainS.add( helperS.pop() );
          }
          
          return val;
        }else{
            System.out.println( "Queue underflow");
            return -1;
        }
    }
    
    /** Get the front element. */
    public int peek() {
        if( mainS.size() != 0 ){
          while( mainS.size() != 0 ){
              helperS.push( mainS.pop() );
          }
          
          int val = helperS.peek();
          while( helperS.size() != 0 ){
              mainS.add( helperS.pop() );
          }
          return val;
        }else{
            System.out.println( "Queue underflow");
            return -1;
        }
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        if( mainS.size() == 0 ){
            return true;
        }else{
            return false;
        }
    }
}





