var exec = require('child_process').exec;

module.exports = {
  install: function () {

    exec('npm install --save matlab-spec', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
  }
}
