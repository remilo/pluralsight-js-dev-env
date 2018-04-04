// This file isn't transpile, so must use CommonJS and ES5

//register Babel to transpile before our tests run
require('babel-register')();

// Disable wepack feature that Mocha doesn't understand
require.extensions['.css'] = function(){};
