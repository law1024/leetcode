/**
 * https://leetcode.com/problems/count-complete-tree-nodes/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 * Time Limit Exceeded
 */
var countNodes = function(root) {
	var sum = 0;
    //二叉树的遍历
    if (!!root) {
    	//访问root
    	sum ++;
    	sum += countNodes(root.left);
    	sum += countNodes(root.right);
    }
    return sum;
};
// 掌握递归

var countNodes = function(root) {
  
  if (!root) {
    return 0;
  }

  var hl = 0, hr = 0,
      l = root, r = root;

  //判断的时候尽量不要带表达式或属性
  //while (l.left)
  while (l) {
    l = l.left;
    hl++;
  }

  while (r) {
    r = r.right;
    hr++;
  }

  if (hl === hr) {
    return Math.pow(2, hl) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
    
};
