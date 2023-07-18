function minimumScore(nums, k) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const medianIndex = Math.floor(n / 2);
  const medianValue = nums[medianIndex];

  let minScore = nums[n - 1] - nums[0]; // Initialize minScore with the maximum difference

  for (let i = medianIndex; i < n; i++) {
    const lowerBound = Math.max(medianValue - k, nums[i] - k);
    const upperBound = Math.min(medianValue + k, nums[i] + k);
    minScore = Math.min(minScore, upperBound - lowerBound);
  }

  return minScore;
}

// Test Example 1
const nums = [1];
const k = 0;
const result = minimumScore(nums, k);
console.log(result); // Output: 0
