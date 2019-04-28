const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withTranspile = require("next-transpile-modules");

module.exports = withPlugins([
  [
    withTranspile,
    {
      transpileModules: ["@next-problem"]
    }
  ],
  withTypescript
]);
