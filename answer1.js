function arrayPairSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let maxSum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    // Pair adjacent elements and sum the minimum of each pair
    maxSum += Math.min(nums[i], nums[i + 1]);
  }

  return maxSum;
}

// Test Example 1
const nums = [1, 4, 3, 2];
const result = arrayPairSum(nums);
console.log(result); // Output: 4
