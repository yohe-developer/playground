/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 输入：x = -121
 输出：false
 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x === 0) return true
	if (x < 0) return false
	x = Math.abs(x)
	let target = x
	let result = ""
	while (target) {
		let value = target % 10
		result += value
		target = Math.floor(target / 10)
	}
	return x.toString() === result
}

console.log(isPalindrome(0))
