# helper
A collection of functions I often use in my projects

## Installation
```
npm install jeroentvb/helper
```

## Usage
```js
const helper = require('jeroentvb-helper')
```

## Functions
```js
helper.export.json(name, item, verbose)
helper.export.text(name, item, verbose)
```
Exports an object or array to a .json file in the root of a project.  

**name**  
A string. The name the exported file will have.  

**item**  
Object or array. This will be exported to the contents of the file.  

**verbose**  
Optional  
If set to `false`, nothing will be logged to the console. Default is true

```js
helper.export.custom(filename, item, verbose)
```
Exports the passed item in a specified format

**filename**  
A string. The name the exported file will have, this must include the file extension.  

**item**  
Object or array or string. This will be exported to the contents of the file.  

**verbose**  
Optional  
If set to `false`, nothing will be logged to the console. Default is true

```js
helper.stringify(item)
```
Returns an object, array or anything in form of a nicely formatted, readable string (instead of a single line string). Useful for logging to the console. 

**item**  
The object, array or something else you want to transform into a string.  

```js
helper.log(item)
```
Logs an item to the console. If it's an object it will be made a little more readable, instead of collapsed.

**item**  
Object that you want to log to the console.