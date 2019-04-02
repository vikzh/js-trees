[![Maintainability](https://api.codeclimate.com/v1/badges/746da51497c343fd02a3/maintainability)](https://codeclimate.com/github/vikzh/js-trees/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/746da51497c343fd02a3/test_coverage)](https://codeclimate.com/github/vikzh/js-trees/test_coverage)[![Build Status](https://travis-ci.org/vikzh/js-trees.svg?branch=master)](https://travis-ci.org/vikzh/js-trees)
# js Trees
## Install
````
npm install js-trees
````
## Using
````
import { mkNode, hasChildren, map, filter, reduce, findNodes, } from 'js-trees'
````
## Documentation
### Table of Contents

-   [mkNode][1]
    -   [Parameters][2]
    -   [Examples][3]
-   [hasChildren][4]
    -   [Parameters][5]
    -   [Examples][6]
-   [map][7]
    -   [Parameters][8]
-   [filter][9]
    -   [Parameters][10]
-   [reduce][11]
    -   [Parameters][12]
-   [findNodes][13]
    -   [Parameters][14]

## mkNode

Make a node

### Parameters

-   `name`  
-   `meta`  
-   `children`  

### Examples

```javascript
mkNode('test', { color: 'blue' }, []); // { name: 'test', meta : { color: 'blue'}, [] }
```

Returns **{children: [Array][15], meta, name: any}** 

## hasChildren

Check if Node has a Children

### Parameters

-   `node`  

### Examples

```javascript
hasChildren(mkNode('myNode')); // false;
hasChildren(mkNode('myNode2', {}, [mkNode('myNode3')])); // true
```

## map

Map Tree

### Parameters

-   `f`  
-   `node`  

Returns **(any | {children: any})** 

## filter

Filter Tree

### Parameters

-   `f`  
-   `node`  

Returns **({children: any} | null | any)** 

## reduce

Reduce Tree

### Parameters

-   `f`  
-   `tree`  
-   `acc`  

Returns **any** 

## findNodes

Find all nodes that fet comparator function

### Parameters

-   `comparator`  
-   `tree`  

Returns **any** 

[1]: #mknode

[2]: #parameters

[3]: #examples

[4]: #haschildren

[5]: #parameters-1

[6]: #examples-1

[7]: #map

[8]: #parameters-2

[9]: #filter

[10]: #parameters-3

[11]: #reduce

[12]: #parameters-4

[13]: #findnodes

[14]: #parameters-5

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
