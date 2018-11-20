# helper
A collection of functions I often use in my projects

## Installation
```
npm install jeroentvb/helper
```

## Usage
```js
const Helper = require('helper')
```

## Functions
```js
Helper.exportToFile(name, item)
```
Exports an object or array to a .json file in the root of a project.
**name**
A string. The name the exported file will have.
**item**
Object or array. This will be exported to the contents of the file

```js
Helper.stringify(item)
```
Returns an object, array or anything in form of a nicely formatted, readable string.
**item**
The object, array or something else you want to transform into a string.
