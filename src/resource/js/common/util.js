let util = {};

if (window.console) {
  let log = window.console.log;
  window.console.log = process.env.NODE_ENV == 'production' ? () => {} : log
}

module.exports = util