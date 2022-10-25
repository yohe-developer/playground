"use strict";
/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */
Object.defineProperty(exports, "__esModule", { value: true });
// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
class Node {
    constructor(val, children) {
        this.val = val === undefined ? 0 : val;
        this.children = children === undefined ? [] : children;
    }
}
function maxDepth(root) {
    const helper = function (node) {
        if (!node)
            return 0;
        let deep = 0;
        node.children &&
            node.children.map((item) => {
                deep = Math.max(helper(item), deep);
            });
        return deep + 1;
    };
    return helper(root);
}
