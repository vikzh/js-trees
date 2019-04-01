import {
  mkNode, hasChildren, map, filter, reduce, findNodes,
} from '../src';

describe('Tree', () => {
  let tree;
  beforeEach(() => {
    tree = mkNode('/', {}, [
      mkNode('etc', {}, [mkNode('localtime')]),
      mkNode('bin', {}, []),
    ]);
  });

  it('#mkNode', () => {
    const node = mkNode('test');
    const expected = {
      name: 'test',
      meta: {},
      children: [],
    };
    expect(node).toEqual(expected);

    const treeExpected = {
      name: '/',
      meta: {},
      children: [
        {
          name: 'etc',
          meta: {},
          children: [
            {
              name: 'localtime',
              meta: {},
              children: [],
            },
          ],
        },
        {
          name: 'bin',
          meta: {},
          children: [],
        },
      ],
    };
    expect(treeExpected).toEqual(tree);
  });

  it('#hasChildren', () => {
    expect(hasChildren(tree)).toBe(true);
    const node = mkNode('tesstNode');
    expect(hasChildren(node)).toBe(false);
  });

  it('#map', () => {
    const mappedData = map(node => ({ ...node, name: node.name.toUpperCase() }), tree);
    expect(mappedData).toHaveProperty('name', '/');
    expect(mappedData).toHaveProperty(['children', '0', 'name'], 'ETC');
  });

  it('#filter', () => {
    const treeExpected = {
      name: '/',
      meta: {},
      children: [
        {
          name: 'etc',
          meta: {},
          children: [],
        },
        {
          name: 'bin',
          meta: {},
          children: [],
        },
      ],
    };
    const filteredTree = filter(node => node.name.length < 4, tree);
    expect(filteredTree).toEqual(treeExpected);
  });

  it('#reduce', () => {
    expect(reduce(n => n + 1, tree, 0)).toBe(4);
  });

  it('#findNode', () => {
    expect(findNodes(node => node.name === '/', tree).length).toBe(1);
  });
});
