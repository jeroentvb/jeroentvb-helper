const fs = require('fs')

function writeFile (filename, item, verbose = true) {
  fs.writeFile(filename, item, (err) => {
    if (err) throw err
    if (verbose) console.log(`${filename} written`)
  })
}

module.exports = {
  writeFile
}
