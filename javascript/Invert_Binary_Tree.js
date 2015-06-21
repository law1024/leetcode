/**
 * Invert a binary tree.
 * Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
 * %>_<%
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 递归实现
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
    	return null;
    }
    // 交换左右子树
    var temp   = root.left;
    root.left  = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

/**
 * 非递归实现
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (root === null) {
		return null;
	}
	// 栈
	var stack = [root];
	while (stack.length) {
		var node = stack.pop();
		// 交换左右子树
		var temp = node.left;
		node.left  = node.right;
		node.right = temp;
		if (node.left) {
			stack.push(node.left);
		}
		if (node.right) {
			stack.push(node.right);
		}
	}
	return root;

}
