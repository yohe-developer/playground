/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    const help = function (root){
        if(!root) return 0
        return Math.max(help(root.left), help(root.right)) +1
    }
    if(!root) return true
    return Math.abs(help(root.left)-help(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right)

};