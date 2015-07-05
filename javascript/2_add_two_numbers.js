
//https://leetcode.com/problems/add-two-numbers/

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

var addTwoNumbers = function(l1, l2) {
	var res = null;
	var sum = 0;
	var dec = 0;
    var l3  = null;

	while (l1 && l2) {
		sum = l1.val + l2.val + dec;
		dec = 0|(sum / 10);
        if (!l3) {
            l3 = new ListNode(sum % 10);
            res = l3;
        } else {
            l3.next = new ListNode(sum % 10);
            l3 = l3.next;
        }
		l1 = l1.next;
		l2 = l2.next;
	}
    var l = (l1 !== null) ? l1 : l2;
	if (!l) {
        if (dec !== 0) {
		  l3.next = new ListNode(dec);
        }
		return res;
	}
	while (l) {
		sum = l.val + dec;
        dec = 0|(sum / 10);

        l3.next = new ListNode(sum % 10);
        l3 = l3.next;
        l  = l.next;
	}
    if (dec !== 0) {
        l3.next = new ListNode(dec);
    }
    return res;
}