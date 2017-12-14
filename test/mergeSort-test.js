const { assert } = require('chai');
const mergeSort = require('../mergeSort.js');
const chai = require("chai"),
expect = chai.expect;

chai.use(require("chai-sorted"));

describe('mergesort', function() {
  
  let arr;
  let num;
  let staticArr;
  let letterArr;

  beforeEach(function() {
    staticArr = [4, 3, 2, 1];
    letterArr = ['b', 'c', 'd', 'a']
    arr = [];
    num = 100;
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * num +1))
    }
  })

  it('should be a function', function() {
    assert.isFunction(mergeSort, true)
  })

  it('should sort an already sorted array', function() {
    const sortedArr = [1,2,3,4]
    assert.deepEqual(mergeSort(staticArr), sortedArr)
  })

  it('should sort a sorted but descending array', function() {
    assert.deepEqual(mergeSort([4,3,2,1]), [1,2,3,4])
  })

  it('should sort an unsorted array', function() {
    assert.deepEqual(mergeSort([1,4,2,3]), [1,2,3,4])
  })

  it('should sort negative numbers', function() {
    assert.deepEqual(mergeSort([-10, -5, 5, 10]), [-10, -5, 5, 10])
  })

  it('should sort letters', function() {
    assert.deepEqual(mergeSort(['z', 'y', 'b', 'a']), ['a', 'b', 'y', 'z'])
  })

  it('should sort a large random array', function(){
    expect(mergeSort(arr)).to.be.sorted();
  })

  it('should sort a very large random array of 100,000', function(){
    let largerArray = [];
    let value = 100000;
    for (let i = 0; i < value; i++) {
      largerArray.push(Math.floor(Math.random() * value + 1))
    }
    expect(mergeSort(largerArray)).to.be.sorted();
  })

})

