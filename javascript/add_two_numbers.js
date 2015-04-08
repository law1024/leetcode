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
 */

var addTwoNumbers = function(l1, l2) {

    var sum  = 0;
    var dec  = 0;
    var res  = null;
    var l3   = null;
    var node = null;

    while (l1 && l2) {
        sum = l1.val + l2.val + dec;
        
        node = new ListNode(sum % 10);
        //指针往后移动一位
        if (!res) {
            res = node;
            l3  = node;
        } else {
            res.next = node;
            res = node;
        }
        //更新dec
        dec = 0|(sum / 10);
        l1 = l1.next;
        l2 = l2.next;
    }

    var add = function(list) {
        var sum;
        var node;

        while(list) {
            sum = list.val + dec;
            node = new ListNode(sum % 10);
            res.next = node;
            res = node;
            dec = 0|(sum / 10);
            list = list.next;
        }
    }

    if (l1) {
        add(l1);
    } else if (l2) {
        add(l2);
    }
    if (dec) {
        res.next = new ListNode(dec);
    }
    //res指向了最后面，所以直接返回时不对的
    return l3;
};