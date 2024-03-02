// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    const diffIndex = nums.indexOf(diff);
    // "diffIndex !== index" takes care of same index not being reused
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
};

// var twoSum = function (nums, target) {
//   let initialIndex = nums[0];
//   let currState = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let option = nums[i];
//     if (initialIndex + option !== target) {
//       if (option === nums[nums.length - 1]) {
//         initialIndex = nums[currState + 1];
//       }
//     } else {
//       console.log(`${initialIndex} + ${option} equals the target ${target}`);
//     }
//   }
// };

console.log(twoSum([1, 2, 5, 2, 57, 24, 3, 4], 7));
