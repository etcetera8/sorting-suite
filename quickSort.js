function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  
  let pivot = array.pop()
  let left=[]
  let right=[]
  
  for (let i = array.length-1; i >= 0; i--) {
    if (pivot > array[i]) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return merge(pivot, quickSort(left), quickSort(right))
}

function merge(pivot, left, right) {
    return left.concat(pivot, right)
}

module.exports = quickSort;