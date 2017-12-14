function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  
  let middle =  Math.floor(array.length/2)
  var left = array.slice(0, middle)
  var right = array.slice(middle, array.length); 

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
let container = [];

  while (left.length > 0 || right.length > 0) {
    if (left[0] > right[0] || left[0] === undefined) {
      container.push(right.shift())
    } else {
      container.push(left.shift())
    }
  }
  return container;
}
console.log(merge)
module.exports = mergeSort;