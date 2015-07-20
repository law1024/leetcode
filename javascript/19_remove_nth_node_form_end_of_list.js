
//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 * Accepted
 */

var removeNthFromEnd = function(head, n) {
    //首先把链表保存下来
    var res   = head;
    var clone = head;

    for (var i = 0; i < n; i ++) {
        clone = clone.next;
    }
    //移除的是第一个节点
    if (clone === null) {
        return res.next;
    }
    while (clone.next !== null) {
        head  = head.next;
        clone = clone.next;
    }
    clone = head.next;
    head.next  = clone.next;
    clone.next = null;

    return res;    
};