
// Validate Binary Tree


public boolean isValidBST(TreeNode root){
    TreeNode[] prev = new TreeNode[1];
    prev[0] = null;
    return solve( root , prev );
}
    
public boolean solve( TreeNode node ,TreeNode[] prev ){    
    if( node == null ){
        return true;
    }        
        
    boolean left = solve( node.left , prev );
    if( left == false ){
        return false;
    } 
        
    if( prev[0] != null && prev[0].val >= node.val ){
        return false;
    }    

    prev[0] = node;    
    boolean right = solve( node.right , prev );
    if( right == false ){
        return false;
    }
    
    return true;
}





