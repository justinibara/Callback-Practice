/**
 *
 * Independent Practice: Functions and Callbacks
 *
 * GOALS
 *
 * Your goal in this exercise is for the last line of code in this file to log
 * the number of odd numbers in the array.
 *
 * DIRECTIONS
 *
 * Implement 'makeCountingFunction()'. 'makeCountingFunction() should accept a
 * predicate function as an argument and return another function that is able
 * to:
 *
 * 	1. iterate through an array and apply the predicate function to each item in
 * 	   that array,
 * 	2. increment a counter based on the result of applying the predicate function
 * 	   to that item (i.e. does it match what we're looking for?)
 * 	3. return the final count.
 *
 * The predicate function 'isOdd()' should accept an individual number as a
 * parameter and return whether or not that number is odd.
 *
 * BONUS 1: Can you write another predicate function that counts evens?
 * BONUS 2: Can you write another function like 'makeCountingFunction', but for
 * summing up elements in an array (based on a predicate) instead of counting
 * them?
 *
 */

function makeCountingFunction(callback) { 

    return function (arr) {
        let oddCount = 0
        for(i = 0; i < arr.length; i++){
            if(isOdd(arr[i])) {
                oddCount += 1
            }
        }
        return oddCount
    }

}
    
    
    // should accept a predicate function as an argument
    // return another function

        // iterate through an array and apply the predicate function to each item in that array

            // increment a counter based on the result of applying the predicate function to that item
        
        // return the final count.


// should accept a predicate function as an argument
function isOdd(num) {
    if(num % 2 !== 0) {
        return true
    }else {
        return false
    }
}

// =============================================================================
// The code below should work without modification.
// =============================================================================

/**
 * The line below should package up 'makeCountingFunction()' and 'isOdd()' into
 * a single function that accepts an array of items as a parameter, iterates
 * through it and returns a count of how many of those items are odd numbers.
 * This new function is being assigned to the variable 'countTheOdds'.
 */

let countTheOdds = makeCountingFunction(isOdd);

/**
 * The final line below calls our new 'countTheOdds()' function and passes in an
 * array of numbers. Once your code is working, the line below should return the
 * number 4.
 */

var oddCount = countTheOdds([1, 2, 3, 4, 5, 6, 7]);
console.log('There are ' + oddCount + ' odd numbers in the array.');
// expected output: 'There are 4 odd numbers in the array.'
