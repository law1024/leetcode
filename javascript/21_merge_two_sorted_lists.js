
//https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * Accepted
 */

var mergeTwoLists = function(l1, l2) {
	var l3;
	var res;
	if (!l1 && !l2) {
		return l1;
	}
	while (l1 && l2) {
		var node;
		if (l1.val < l2.val) {
			node = new ListNode(l1.val);
			l1 = l1.next;
		} else {
			node = new ListNode(l2.val);
			l2 = l2.next;
		}
		if (!l3) {
			res = l3 = node;
		} else {
			l3.next = node;
			l3 = node;
		}
	}
	var l = l1 || l2;
	if (l) {
		if (!l3) {
			res = l3 = l;
		} else {
			l3.next = l;
		}
	}
	return res;
};