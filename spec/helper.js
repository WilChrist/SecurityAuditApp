var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'AuditApp.app', 'Contents', 'MacOS', 'AuditApp');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'AuditApp');
      default:
        throw 'Unsupported platform';
    }
  }
};
