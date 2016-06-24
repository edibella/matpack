var fs = require('fs');

module.exports = {
  create: function (result) {
    fileContent =
`% Basic command for testing self with MatlabSpec
function test
  MatlabSpec.run_tests('${result.matlabPackageName}')
end`

    fs.writeFileSync('test.m', fileContent);
  }
};
