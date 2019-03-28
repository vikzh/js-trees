const mkNode = (name, meta = {}, children = []) => ({ name, meta, children });

const hasChildren = node => Array.isArray(node.children) && node.children.length > 0;

export { mkNode, hasChildren };
