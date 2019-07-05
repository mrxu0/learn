// 700. 二叉搜索树中的搜索
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) return null
  if (root.val === val) return root
  if(root.val < val) return searchBST(root.right, val)
  else return searchBST(root.left, val)
};

console.log(searchBST([4,2,7,1,3]))