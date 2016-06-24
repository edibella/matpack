var fs = require('fs');

module.exports = {
  create: function (result) {
    process.chdir('scripts/');
    fileContent =
`//Rename npm package so that matlab can use it
fs = require('fs');
fs.renameSync('../${result.npmName}','../${result.matlabName}')`
    fs.writeFileSync('rename.js', fileContent);
    process.chdir('../')
  }
};
