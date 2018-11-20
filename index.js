class Helper {
  static stringify (item) {
    return JSON.stringify(item, null, 4)
  }

  static exportToFile (name, item) {
    if (name === undefined || item === undefined) throw new Error('Error while exporting: parameters not defined')
    var fs = require('fs')
    fs.writeFile(name + '-export.json', Helper.stringify(item), err => {
      if (err) throw err
      console.log(`${name}-export.json written`)
    })
  }
}

module.exports = Helper
