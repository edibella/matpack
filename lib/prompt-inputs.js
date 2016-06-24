// npm modules
var validate = require("validate-npm-package-name");

// local files
var directoryStructure = require('./directory-structure.js');
var packageJSON = require('./package-json.js');
var dependencies = require('./dependencies.js');
var readme = require('./readme.js');
var testScript = require('./test-script.js');
var installScript = require('./install-script.js');

onErr = function (err) {
  console.log(err);
  return 1;
};

module.exports = {
  schema: {
    properties: {
      matlabName: {
        description: 'MATLAB version of your package name (e.g. +MatlabPackage).',
        pattern: /^\+\S*$/,
        message: 'Name must start with a + and not contain spaces. See the MATLAB package docs for assistance: http://www.mathworks.com/help/matlab/matlab_oop/scoping-classes-with-packages.html',
        required: true
      },
      npmName: {
        description: 'NPM version of your package name (e.g. matlab-package).',
        conform: function (testName) {
          var isValid = validate(testName);
          if (typeof isValid.errors !== "undefined") {
            console.log(`${isValid.errors}\n`);
          };
          return isValid.validForNewPackages
        },
        message: 'See the NPM docs for assistance: https://docs.npmjs.com/files/package.json#name'
      },
    },
  },
  callback: function (err, result) {
    if (err) { return onErr(err); }
    // if no error continue on with the script
    result.matlabPackageName = result.matlabName.slice(1); // remove + at front

    directoryStructure.create(result);
    packageJSON.create(result);
    dependencies.install();
    readme.create(result);
    testScript.create(result);
    installScript.create(result);
  }
};
