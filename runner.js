  var forever = require('forever-monitor');

  var child = new (forever.Monitor)('survey.js', {
    max: 3,
    silent: true,
    args: []
  });

  child.on('exit', function () {
    console.log('Survey has exited after 3 restarts');
  });

  child.start();
