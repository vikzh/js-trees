const mkNode = (name, meta = {}, children = []) => ({ name, meta, children });

const hasChildren = node => Array.isArray(node.children) && node.children.length > 0;

const map = (f, node) => {
  const updatedNode = f(node);
  return (!hasChildren(node))
    ? updatedNode
    : { ...updatedNode, children: node.children.map(el => map(f, el)) };
};

export { mkNode, hasChildren, map };
