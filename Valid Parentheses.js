Valid Parentheses
https://leetcode.com/problems/valid-parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Time Complexity:   O(n),   Where n is the length of the input string s. 
Space Complexity:  O(n). Where n is the number of opening characters pushed to our stack. 

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    // A dicitonary of pairs showing which closing tag pairs with which opening tag
    const pairs = { '}':'{', ']':'[', ')': '('}
    // Create an array to hold 'Need to close' 
    const needToClose = []

    for(let char of s){
        // If char is an opening parenthesis
        if(char === '(' || char === '['|| char === '{'){
            needToClose.push(char)
        }
        // If char is a closing parenthesis
        else {
            // Determine if most recent opening tag is a pair to current char (closing tag)
            let openingTag = needToClose.pop()
            if (pairs[char] !== openingTag){
                return false
            }
        }
    }
    // If at the end of string, 'needToClose' is empty, we have successfully closed all parentheses
    return needToClose.length === 0
};

// Tests:
// Single Pair
console.log(isValid('()'), 'true')
// Multiple Pairs
console.log(isValid('()[]{}'), 'true')
// Incorrect Closing
console.log(isValid('(]'), 'false')
// Missing Closing
console.log(isValid('('), 'false')
// Empty input
console.log(isValid(''), 'false')