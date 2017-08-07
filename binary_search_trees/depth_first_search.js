function dfs(node, isMatch){
  if(isMatch(node.data)) {
    return node;
  }

  if(node.left){
    let result = dfs(node.left, isMatch);
    if(result) return result;
  }
  if(node.right){
    let result = dfs(node.right, isMatch);
    if(result) return result;
  }
  return false;
}
module.exports = dfs;
