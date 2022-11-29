

// Detect a loop in a linked list

// Approach 1
public boolean hasCycle(ListNode head) {
    if( head == null || head.next == null )
        return false;        
    
    ListNode slow = head;
    ListNode fast = head;    
    while( fast.next != null && fast.next.next != null ){
        slow = slow.next;
        fast = fast.next.next;        
        if( slow == fast )
            return true;
    }    
    return false;
}

// Approach 2 
public boolean hasCycle(ListNode head) {
    if( head == null || head.next == null )
        return false;   

    HashSet<ListNode> set = new HashSet<>();    
    ListNode ptr = head;
    while( ptr != null ){
        if( set.contains( ptr ) )
            return true;    
            
        set.add( ptr );
        ptr = ptr.next;
    }    
    return false;
}



