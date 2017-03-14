/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(number){

 	return number.toString();
} 

numberToString(6);

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(number){
	
	return number + 1;
}
increase(5);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(number){

	return number - 1;
}

decrease(5);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x, y){
	return x + y;

}

add(2,3);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x, y){
	return x - y;
}

sunbtract(4,3);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y){
	return x * y;
}

muliply(2,2);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x, y){
return x / y;

}

divide(4,2);


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
	return x * x;
}

square(2);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(add, x, y){
	
	sum = x + y;
	console.log(sum);
	return sum;
}

calculate("add", 4, 7);
console.log("4 + 7 = 11");

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a, b){
	if (a > b){
		return true;
	}else{
		return false;
	}

}

isGreaterThan(4, 5);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(x, y){
	if (x < y){
		return true;
	}else{
		return false;
	}
}

isLessThan(2, 4);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(x, y){
	if(x === y){
		return true;
	}else{
		return false;
	}
}

areEqual(2, 2);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x, y){
	if(x < y){
		return x;
	}else{
		return y;
	}
}

minimum(1, 2);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x, y){
	if(x > y){
		return x;
	}else{
		return y;
	}
}
maximum(3, 2);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){
	if(n % 2 === 0){
		return true;
	}else{
		return false;
	}
}
isEven(3);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n){
	if(n % 2 === 0){
		return false;
	}else{
		return true;
	}
}

isOdd(2);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

