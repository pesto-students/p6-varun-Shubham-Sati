

// Level Order traversal


public List<List<Integer>> levelOrder(TreeNode root) {
    if( root == null ){
        return new ArrayList<>();
    }    
    
    Queue<TreeNode> que = new ArrayDeque<>();
    que.add( root );
    List<List<Integer>>ans = new ArrayList<>();
    
    while( que.size() > 0 ){
        int size = que.size();
        List<Integer> res = new ArrayList<>();
        while( size-- > 0 ){
            TreeNode rem = que.remove();    
            res.add( rem.val );

            if( rem.left != null ){
                que.add( rem.left );
            }
            if( rem.right != null ){
                que.add( rem.right );
            }    
        }
        ans.add( new ArrayList( res ) );
    }    
    
    return ans;
}


