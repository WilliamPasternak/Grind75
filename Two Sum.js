Two Sum 
https://leetcode.com/problems/two-sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Solution: Iterate through array, check if the current number, has a companion which will add up to target.
        // Option 1: We can do this with nested loops. Checking every combination of numbers. This would be inefficient in larger data sets but would work.
            // We would not need additional space, but would sacrifice time. O(1) Space, O(N^2) Time
        // Option 2: We could create an object that held numbers seen (as keys) and their idx as values
            // Time would be O(N), checking each element once, Space: O(n) where space grows as the number of unique elements grow.
        
        // Establish an object to hold values seen
        const numsSeen = {}
        // Iterate over nums loop
        for(let i = 0; i < nums.length; i++) {
            const currentNum = nums[i]
            const complimentaryNum = target - currentNum

            if(complimentaryNum in numsSeen) {
                return [i,numsSeen[complimentaryNum]]
            }
            else {
                // add current num to num seen
                numsSeen[currentNum] = i
            }
        }
};

// Tests:
console.log(twoSum([1,2,3], 4),'[0,2]')
// No Repeating Nums
console.log(twoSum([1,2,3,5,8],10), '[1,4]')
// Repeating Nums
console.log(twoSum([1,2,3,5,5,8],10), '[3,4]')
// Negatives
console.log(twoSum([-1,0,1,2],0),'[0,2]')