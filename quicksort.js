function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  let copyArr = arr.slice()
    , pivotIndex = Math.floor(Math.random() * arr.length)
    , pivotValue = copyArr[pivotIndex]
    , left = []
    , right = [];
  // Orient the pivot so that...
  for (let i = 0; i < copyArr.length; i++) {
    if (i === pivotIndex) continue;
    // every number smaller than the pivot is to the left
    if (copyArr[i] < pivotValue) left.push(copyArr[i]);

    // every number larger (or equal) than the pivot is to the right
    else if (copyArr[i] >= pivotValue) right.push(copyArr[i]);
  }

  // Recursively sort the left
  let sortedLeft = recursiveSort(left);

  // Recursively sort the right
  let sortedRight = recursiveSort(right);

  // Return the left, pivot and right in sorted order
  return [...sortedLeft, pivotValue, ...sortedRight];
}


function recursiveSort(arr) {

  // If the array is length 1 or less, return
  if (arr.length <= 1) return arr;

  // Find and remove the largest value in the array
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }
  const maxValue = arr[maxIndex];
  arr.splice(maxIndex, 1);

  // Sort the remaining elements
  arr = recursiveSort(arr);

  // Put the largest value back at the end of the array
  arr.push(maxValue);

  return arr;
}


module.exports = [quicksort];
