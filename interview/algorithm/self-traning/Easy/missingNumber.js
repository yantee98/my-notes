/**
 * @param {number[]} nums
 * @return {number}
 */

//  Example 1:
//  Input: nums = [3,0,1]
//  Output: 2
//  Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

//  Example 2:
//  Input: nums = [0,1]
//  Output: 2
//  Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

//  Example 3:
//  Input: nums = [9,6,4,2,3,5,7,0,1]
//  Output: 8
//  Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

const missingNumber1 = function (nums) {
  const len = nums.length;

  for (let i = 0; i <= len; i++) {
    const temp = nums.find((e) => e == i);
    if (temp == undefined) return i;
  }
};

// O(n^3)

const missingNumber2 = function (nums) {
  const len = nums.length;
  const dic = {};

  for (let i = 0; i < len; i++) {
    dic[nums[i]] = i;
  }

  for (let i = 0; i <= len; i++) {
    if (dic[i] == undefined) return i;
  }

  return 0;
};

// o(n)

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result = missingNumber2(nums);
console.log('🚀 ~ Result: ', result);
