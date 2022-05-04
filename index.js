function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    for (let j = i+1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true;
      }
    }
  };
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  for each number of array
    go through all following numbers in array
    if sum is target
      return true

*/

/*
  Add written explanation of your solution here
  take the first number of the array and check it against every other number of the array, if the sum is the target have it return true.
  Move onto comparing the second number with everything then on. Making sure to start ignore the first number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8, 6, 5], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 3, 5, 6, 7, 50, 50], 100));
}

module.exports = hasTargetSum;
