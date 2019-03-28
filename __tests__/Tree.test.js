import { mkNode, hasChildren } from '../src';

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
    console.log(node);
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
});
