/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
	return n && n + sumNums(n - 1)
}

console.log(sumNums(100))
