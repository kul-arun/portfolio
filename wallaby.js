module.exports = function () {
  return {
    env: {
      kind: 'chrome', // Use Chrome environment
      runner: '/usr/bin/google-chrome-stable',
      params: {
        runner: '--headless'
      }
    }
  };
};