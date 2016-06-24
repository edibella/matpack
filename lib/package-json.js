var fs = require('fs');

module.exports = {
  create: function (result) {
    packageObj = {
      "name": result.npmName,
      "version": "0.0.0",
      "description": "Insert description here",
      "keywords": ["An", "Array", "of", "keywords"],
      "scripts": {"postinstall": "node scripts/rename.js"}
    };

    stringifiedJSON = JSON.stringify(packageObj, null, 2);

    fs.writeFileSync('package.json', stringifiedJSON);
  }
};
