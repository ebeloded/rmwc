const fs = require('fs-extra');
const childProcess = require('child_process');

fs.readdir('react-versions', function(err, files) {
  const reactVersions = files.filter(f => f.startsWith('react-'));

  reactVersions.forEach(reactVersion => {
    const versionNum = reactVersion.split('-')[1];
    console.log('Running tests for', versionNum);
    childProcess.execSync(
      `export REACT_TEST_VERSION=${versionNum} CI=true && react-app-rewired test --env=jsdom`,
      { stdio: [0, 1, 2] }
    );
  });
});
