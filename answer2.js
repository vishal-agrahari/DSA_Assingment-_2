function maxUniqueCandies(candyType) {
  const n = candyType.length;
  const maxCandiesToEat = Math.floor(n / 2);

  // Create a Set to store unique candy types
  const uniqueCandiesSet = new Set(candyType);

  // Count the number of unique candy types
  const uniqueCandiesCount = uniqueCandiesSet.size;

  // Return the minimum between uniqueCandiesCount and maxCandiesToEat
  return Math.min(uniqueCandiesCount, maxCandiesToEat);
}

// Test Example 1
const candyType = [1, 1, 2, 2, 3, 3];
const result = maxUniqueCandies(candyType);
console.log(result); // Output: 3
