const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.stylelint,
  ignoreFiles: ['.yalc/@next-dev/**/*.less'],
};
