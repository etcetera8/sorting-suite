const { assert } = require('chai');
const bubbleSort = require('../bubbleSort.js');
const chai = require("chai"),
expect = chai.expect;

chai.use(require("chai-sorted"));

describe('bubblesort', function() {
  
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
    assert.isFunction(bubbleSort, true)
  })

  it('take in an array', function() {
    bubbleSort(arr);
    assert.isArray(arr);
    assert.lengthOf(arr, num);
    assert.typeOf(arr[0], 'number');
  })

  it('should be unsorted at first', function() {
    assert.equal(staticArr[0], 4);
    assert.equal(staticArr[1], 3);
    assert.isBelow(staticArr[1], staticArr[0]);

    bubbleSort(staticArr);

    assert.equal(staticArr[2], 3);
    assert.equal(staticArr[3], 4);
    assert.isBelow(staticArr[2], staticArr[3]);
  })

  it('should be sorted after passing it in', function() {
    bubbleSort(staticArr);
    assert.equal(staticArr[0], 1)
  })

  it('should also sort letters', function() {
    assert.equal(letterArr[0], 'b')
    assert.equal(letterArr[1], 'c')
    bubbleSort(letterArr)
    assert.equal(letterArr[0], 'a')
    assert.equal(letterArr[1], 'b')
  })

  it('should handle negative numbers', function() {
    let negNums = [-4, 3, -2, 1]
    bubbleSort(negNums);
    assert.equal(negNums[0], -4)
  })

  it('should sort a very large random array of 10500', function(){
    let largerArray = [];
    let value = 10000;
    for (let i = 0; i < value; i++) {
      largerArray.push(Math.floor(Math.random() * value + 1))
    }
    expect(bubbleSort(largerArray)).to.be.sorted();
  })
})

