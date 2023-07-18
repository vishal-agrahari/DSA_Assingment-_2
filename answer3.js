function findLHS(nums) {
  const numCount = new Map();
  let longestSubsequence = 0;

  // Count the occurrences of each number in the array
  for (const num of nums) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  // Check for harmonious subsequences
  for (const [num, count] of numCount.entries()) {
    if (numCount.has(num + 1)) {
      const totalLength = count + numCount.get(num + 1);
      longestSubsequence = Math.max(longestSubsequence, totalLength);
    }
  }

  return longestSubsequence;
}

// Test Example 1
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);
console.log(result); // Output: 5
