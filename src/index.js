const mkNode = (name, meta = {}, children = []) => ({ name, meta, children });

const hasChildren = node => Array.isArray(node.children) && node.children.length > 0;

const map = (f, node) => {
  const updatedNode = f(node);
  return (!hasChildren(node))
    ? updatedNode
    : { ...updatedNode, children: node.children.map(el => map(f, el)) };
};

const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  if (!hasChildren(node)) {
    return node;
  }
  const children = node.children.map(n => filter(f, n)).filter(v => v);
  return { ...node, children };
};
export {
  mkNode, hasChildren, map, filter,
};