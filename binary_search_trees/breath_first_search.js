function bfs(root, isMatch){
  let queue = [];

  queue.push(root);
  while(queue.length > 0){
    let out = queue.shift();

    if(isMatch(out.data)) return out;

    if(out.left) queue.push(out.left);
    if(out.right) queue.push(out.right);
  }

  return false;
}

module.exports = bfs;
