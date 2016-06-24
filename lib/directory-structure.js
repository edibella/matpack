var fs = require('fs');

createDirectory = function (dirName) {
  fs.mkdirSync(dirName)
  process.chdir(dirName + '/')
  fs.writeFileSync('.gitkeep', '')
  process.chdir('../')
};

module.exports = {
  create: function (result) {
    fs.mkdirSync(result.npmName)
    process.chdir(result.npmName + '/');

    // Create directory skeleton
    createDirectory('+tests')
    createDirectory('docs')
    fs.mkdirSync('scripts')
  }
};
