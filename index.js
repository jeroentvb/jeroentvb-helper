function stringify (item) {
  if (typeof item === 'string') throw new Error(`Error while stringifying: ${item} is already a string`)
  return JSON.stringify(item, null, 4)
}

function exportToFile (name, item) {
  if (name === undefined || item === undefined) throw new Error('Error while exporting: parameters not defined')
  if (typeof item !== 'string') item = stringify(item)
  const fs = require('fs')
  fs.writeFile(name + '-export.json', item, err => {
    if (err) throw err
    console.log(`${name}-export.json written`)
  })
}

function log (item) {
  if (typeof item === 'object') {
    console.log({ item })
  } else {
    console.log(item)
  }
}

module.exports = {
  stringify,
  exportToFile,
  log
}
