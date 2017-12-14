const { assert } = require('chai');
const insertionSort = require('../insertionSort.js');
const chai = require("chai"),
expect = chai.expect;

chai.use(require("chai-sorted"));


describe('insertion sort', function() {
  
  let arr;
  let num;
  let staticArr;
  let letterArr;

  beforeEach(function() {
    staticArr = [4, 3, 2, 1];
    letterArr = ['b', 'c', 'd', 'a']
    arr = [];
    num = 5;
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * num +1))
    }
  })

  it('should be a function', function() {
    assert.isFunction(insertionSort);
  })

  it('the random array should be an array', function() {
    assert.isArray(arr)
  })

  it('should be unsorted at first', function() {
    assert.equal(staticArr[0], 4);
    insertionSort(staticArr);
    assert.equal(staticArr[0], 1);
  })

  it('should also sort letters', function() {
    assert.equal(letterArr[0], 'b')
    assert.equal(letterArr[1], 'c')
    insertionSort(letterArr)
    assert.equal(letterArr[0], 'a')
    assert.equal(letterArr[1], 'b')
  })

  it('should handle negative numbers', function() {
    let negNums = [-4, 3, -2, 1]
    insertionSort(negNums);
    assert.equal(negNums[0], -4)
  })

  it('should sort a very large random array of 15000', function(){
    let largerArray = [];
    let value = 15000;
    for (let i = 0; i < value; i++) {
      largerArray.push(Math.floor(Math.random() * value + 1))
    }
    expect(insertionSort(largerArray)).to.be.sorted();
  })
});