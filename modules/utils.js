const fs = require('fs')

function mkDir (path, verbose = true) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, (err) => {
      if (err) reject(err)

      if (verbose) console.log(`created dir ${path}`)

      resolve(`created dir ${path}`)
    })
  })
}

function writeFile (path, item, verbose = true) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, item, (err) => {
      if (err) reject(err)

      if (verbose) console.log(`${path} written`)

      resolve(`${path} written`)
    })
  })
}

function readFile (path, verbose = true) {
   return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
         if (err) reject(err)
   
         if (verbose) console.log(`read ${path}: ${data}`)
   
         resolve(data)
      })
   })
}

function checkExportFolder () {
  if (!fs.existsSync('exports')) {
    fs.mkdirSync('exports')
    console.log('Created exports folder')
  }
}

module.exports = {
  writeFile,
  mkDir,
  checkExportFolder,
   readFile
}
