// Given an array of integers, return a new array such
// that each element at index i of the new
// array is the product of all the numbers
// in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the
// expected output would be [120, 60, 40, 30, 24]. If
// our input was [3, 2, 1], the expected output would
// be [2, 3, 6].

// Follow-up: what if you can't use division?

const indexProd = (arr) => {

  let len= arr.length  
  let result = Array(len).fill(1)

  let product = 1
  for(let i = 0 ; i < len ; i++ ){
       result[i] *= product
       product *= arr[i]
  }

  product = 1
  for(let i = arr.length-1 ; i >= 0 ; i--){
       result[i] *= product
       product *= arr[i]
  } 

  return result
}

console.log(indexProd([1,2,3,4,5]))
console.log(indexProd([3,2,1]))


//Time Complexity: O(n)
//Space Complexity: O(n)