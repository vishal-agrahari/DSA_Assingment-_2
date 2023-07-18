function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  const size = flowerbed.length;

  for (let i = 0; i < size; i++) {
    // Check if the current plot and its adjacent plots are empty
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === size - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1; // Plant a flower at the current spot
      count++; // Increment the count of planted flowers
    }
  }

  return count >= n;
}

// Test Example 1
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true
