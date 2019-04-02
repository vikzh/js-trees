/**
 * Make a node
 * @param name
 * @param meta
 * @param children
 * @returns {{children: Array, meta, name: *}}
 * @example
 * mkNode('test', { color: 'blue' }, []); // { name: 'test', meta : { color: 'blue'}, [] }
 */
const mkNode = (name, meta = {}, children = []) => ({ name, meta, children });

/**
 * Check if Node has a Children
 * @param node
 * @returns {arg is Array<any> | boolean}
 * @example
 * hasChildren(mkNode('myNode')); // false;
 * hasChildren(mkNode('myNode2', ,[mkNode('myNode3')])); // true
 */
const hasChildren = node => Array.isArray(node.children) && node.children.length > 0;

/**
 * Map Tree
 * @param f
 * @param node
 * @returns {*|{children: *}}
 */
const map = (f, node) => {
  const updatedNode = f(node);
  return (!hasChildren(node))
    ? updatedNode
    : { ...updatedNode, children: node.children.map(el => map(f, el)) };
};

/**
 * Filter Tree
 * @param f
 * @param node
 * @returns {{children: *}|null|*}
 */
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

/**
 * Reduce Tree
 * @param f
 * @param tree
 * @param acc
 * @returns {*}
 */
const reduce = (f, tree, acc) => {
  const newAcc = f(acc, tree);
  if (!hasChildren(tree)) {
    return newAcc;
  }
  return tree.children.reduce((dAcc, el) => reduce(f, el, dAcc), newAcc);
};

/**
 * Find all nodes that fet comparator function
 * @param comparator
 * @param tree
 * @returns {*}
 */
const findNodes = (comparator, tree) => reduce(
  ((acc, node) => (comparator(node)
    ? [...acc, node]
    : acc)), tree, [],
);

export {
  mkNode, hasChildren, map, filter, reduce, findNodes,
};
