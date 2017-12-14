function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  
  let middle =  array.length/2
  let left = array.splice(0, middle);
  let right = array; 

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
let container = [];

  while (left.length || right.length) {
    if (left[0] > right[0] || left[0] === undefined) {
      container.push(right.shift())
    } else {
      container.push(left.shift())
    }
  }
  return container;
}
module.exports = mergeSort;