/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	if (!root) return []
	let result = []
	let stack = []

	stack.push(root)

	while (stack.length > 0) {
		let node = stack.pop()
		if (node.left) stack.push(node.left)
		if (node.right) stack.push(node.right)
		result.push(node.val)
	}
	return result.reverse()
}
// @lc code=end
