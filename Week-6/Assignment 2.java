// Spiral Order Matrix II.

// Question
// 1. Given an m x n matrix, return all elements of the matrix in spiral order.

// 2. Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 3. Output: [1,2,3,6,9,8,7,4,5]

// This program is done in Java language
public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> res = new ArrayList<Integer>();    
    if (matrix.length == 0) {
        return res;
    }    
    int rowBegin = 0;
    int rowEnd = matrix.length-1;
    int colBegin = 0;
    int colEnd = matrix[0].length - 1;    
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse Right
        for (int j = colBegin; j <= colEnd; j ++) {
            res.add(matrix[rowBegin][j]);
        }
        rowBegin++;     
        // Traverse Down
        for (int j = rowBegin; j <= rowEnd; j ++) {
            res.add(matrix[j][colEnd]);
        }
        colEnd--;    
        if (rowBegin <= rowEnd) {
            // Traverse Left
            for (int j = colEnd; j >= colBegin; j --) {
                res.add(matrix[rowEnd][j]);
            }
        }
        rowEnd--;    
        if (colBegin <= colEnd) {
            // Traver Up
            for (int j = rowEnd; j >= rowBegin; j --) {
                res.add(matrix[j][colBegin]);
            }
        }
        colBegin ++;
    }        
    return res;
    }