const utils = require('./modules/utils')

function stringify (item) {
  if (typeof item === 'string') throw new Error(`Error while stringifying: ${item} is already a string`)
  return JSON.stringify(item, null, 4)
}

function json (name, item, verbose) {
  if (name === undefined || item === undefined) throw new Error('Error while exporting: parameters not defined')
  if (typeof item !== 'string') item = stringify(item)

  utils.checkExportFolder()

  return utils.writeFile(`${name}-export.json`, item, verbose)
}

function text (name, item, verbose) {
  if (name === undefined || item === undefined) throw new Error('Error while exporting: parameters not defined')
  if (typeof item !== 'string') item = stringify(item)

  utils.checkExportFolder()

  return utils.writeFile(`exports/${name}-export.txt`, item, verbose)
}

function custom (name, item, verbose) {
  if (name === undefined || item === undefined) throw new Error('Error while exporting: parameters not defined')

  utils.checkExportFolder()

  return utils.writeFile(`exports/${name}-export.txt`, item, verbose)
}

function log (item) {
  if (typeof item === 'object') {
    console.log({ item })
  } else {
    console.log(item)
  }
}

text('testing', 'asdasdasd')

module.exports = {
  stringify,
  exportFile: {
    json,
    text,
    custom,
  },
  log,
  writeFile: utils.writeFile,
  mkDir: utils.mkDir
}
