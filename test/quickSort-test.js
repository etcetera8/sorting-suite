const { assert } = require('chai');
const quickSort = require('../quickSort.js');
const chai = require("chai"),
expect = chai.expect;

chai.use(require("chai-sorted"));

describe('quickSort', function() {
  let arr;
  let num;
  let staticArr;
  let letterArr;

  beforeEach(function() {
    staticArr = [4,3,2,1];
    letterArr = ['b', 'c', 'd', 'a'];
    randomArr = [];
    num = 100;
    for (let i = 0; i < num; i++) {
      randomArr.push(Math.floor(Math.random() * num +1))
    }
  })

  it('should be a function', function() {
    assert.isFunction(quickSort, true)
  })

  it('should sort an already sorted array', function() {
    assert.deepEqual(quickSort([1, 2, 3, 4]), [1, 2, 3, 4])
  })

  it('should sort a sorted but descending array', function() {
    assert.deepEqual(quickSort([4,3,2,1]), [1,2,3,4])
  })

  it('should sort an unsorted array', function() {
    assert.deepEqual(quickSort([1,4,2,3]), [1,2,3,4])
  })

  it('should sort negative numbers', function() {
    assert.deepEqual(quickSort([-10, -5, 5, 10]), [-10, -5, 5, 10])
  })

  it('should sort letters', function() {
    assert.deepEqual(quickSort(['z', 'y', 'b', 'a']), ['a', 'b', 'y', 'z'])
  })

  it('should sort a large random array', function(){
    expect(quickSort(randomArr)).to.be.sorted();
  })

  it('should sort a very large random array of 1,500,000', function(){
    let largerArray = [];
    let value = 1500000;
    for (let i = 0; i < value; i++) {
      largerArray.push(Math.floor(Math.random() * value + 1))
    }
    expect(quickSort(largerArray)).to.be.sorted();
  })

  

});