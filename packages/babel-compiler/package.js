Package.describe({
  name: "babel-compiler",
  summary: "Parser/transpiler for ECMAScript 2015+ syntax",
  // Tracks the npm version below.  Use wrap numbers to increment
  // without incrementing the npm version.
  version: '5.8.22-rc.0'
});

Npm.depends({
  'meteor-babel': '0.5.7'
});

Package.onUse(function (api) {
  api.addFiles([
    'babel.js',
    'babel-compiler.js'
  ], 'server');

  api.use('check@1.0.5');

  api.export('Babel', 'server');
  api.export('BabelCompiler', 'server');
});