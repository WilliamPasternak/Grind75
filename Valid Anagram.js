/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Check str length for early exit
    if(s.length !== t.length){
         return false
    }
    // Invalid input
    if(!s || !t) return false
   
// Option 1: Sort strings and compare. Space: O(N) Time: O(n log n) 
    // Sort the letters in each string
    let firstString = s.split('').sort().join('')
    let secondString = t.split('').sort().join('')
    // If they are the same, they are anagrams
    return firstString === secondString
    

// Option 2: Make a hash table of all the chars in s and count them. Space: O(1) Time O(N) 
    // Create hashtable
    const charCount = {}
    // Iterate over s1 and form hashtable keys, and increment count.
    for(let char of s){
        charCount[char] = charCount[char] + 1 || 1
    }

    // Iterate over s2 and decrement count if found
    for(let char of t){
        if(char in charCount){
            charCount[char]-=1
        }
        // If char is not in hashtable,
        else{
            return false
        }
    }
    // iterate over s1, and lookup each char.
    for (let char of s){
        if(charCount[char] !== 0){
            return false
        }
    }
    return true
};


// Tests:
// Valid Anagram
console.log(isAnagram('anagram','nagaram'),'true')
// Invalid Anagram
console.log(isAnagram('rat','car'),'false')
// Strings of different lengths can't be anagrams
console.log(isAnagram('boy','boys'))