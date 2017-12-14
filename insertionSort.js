//start inner loop from index i = 1
//compare j to i
//swap if j > i
//compare to other elements in sorted array
//repeat through for length of array

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]){
        [ array[j], array[j-1] ] = [ array[j-1], array[j] ]
      }
    }
  }
  return array;
};

module.exports = insertionSort;
