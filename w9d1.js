//Question:-1

function printDiagonalSums(mat, n)
{
    let  rightDiagonal = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
 
            // Condition for secondary diagonal
            if ((i + j) == (n - 1))
                rightDiagonal += mat[i][j];
        }
    }
 
    console.log("Right Diagonal" + rightDiagonal);
}
 
// Driver code
    var a = [ [ 1, 2, 3, 6 ], [ 5, 6, 7, 8 ],
                    [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ];
    printDiagonalSums(a, 4);
 



//Question:-2


let N = 4;
	
	// Function to find the sum of all diagonal
	// and Boundary elements
	function diagonalBoundarySum(arr){
		let borderofSum = 0;
		
		// Loop from i to N-1 for rows
		for (let i = 0; i < N; i++) {
	
			// Loop from j = N-1 for columns
			for (let j = 0; j < N; j++) {
	
				
	
				// Condition for Boundary
				// elements
				if (i == 0 || j == 0 || i == N - 1|| j == N - 1) {
					borderofSum += arr[i][j];
				}
			}
		}
	
		// Print the final Sum
		console.log(borderofSum);
	}
	
		let arr = [ [ 1, 2, 3, 4 ],
                    [ 2, 3, 4, 5 ],
					[ 3, 4, 5, 6 ],
                    [ 4, 5, 6, 7 ]
                  ];
	
		diagonalBoundarySum(arr);



//Question:-3



    var matrix = [
        [ 1, 2, 3 ],
        [ 7, 2, 6 ],
        [ 2, 4, 3 ]
      ];
      
      // sums of rows
      var rowSum = matrix.map(val => val.reduce((a, b) => a + b));
      
      console.log(rowSum);