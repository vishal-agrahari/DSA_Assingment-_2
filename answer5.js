function maximumProduct(nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of three largest positive numbers
  const option2 = nums[0] * nums[1] * nums[n - 1]; // Product of two smallest negative numbers and largest positive number

  return Math.max(option1, option2);
}

// Test Example 1
const nums = [1, 2, 3];
const result = maximumProduct(nums);
console.log(result); // Output: 6
