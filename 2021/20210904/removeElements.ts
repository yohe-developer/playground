/* eslint-disable */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 class ListNode {
	 val: number
	 next: ListNode | null
	 constructor(val?: number, next?: ListNode | null) {
		 this.val = (val===undefined ? 0 : val)
		 this.next = (next===undefined ? null : next)
	 }
 }
function removeElements(head: ListNode | null, val: number): ListNode | null {
	const root: ListNode = new ListNode(0, head)
	let cur = root
	while (cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next
			continue
		}
		cur = cur.next
	}
	return root.next
}
